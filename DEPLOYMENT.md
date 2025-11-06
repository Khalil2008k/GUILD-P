# 🚀 دليل النشر | Deployment Guide

دليل شامل لنشر المشروع على مختلف المنصات

## 📋 قبل البدء

تأكد من:
- ✅ اختبار المشروع محلياً (`npm run dev`)
- ✅ بناء المشروع بنجاح (`npm run build`)
- ✅ التأكد من عدم وجود أخطاء

## 🌐 النشر على Vercel (الأسهل والأسرع)

### الخطوات:

1. **إنشاء حساب Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجّل الدخول بحساب GitHub

2. **استيراد المشروع**
   - اضغط "New Project"
   - اختر المستودع من GitHub
   - Vercel ستتعرف تلقائياً على Next.js

3. **الإعدادات**
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **النشر**
   - اضغط "Deploy"
   - انتظر 2-3 دقائق
   - ✅ جاهز!

### المزايا:
- ✨ نشر تلقائي عند كل push
- ⚡ أداء عالي جداً
- 🌍 CDN عالمي
- 🔒 HTTPS تلقائي
- 🆓 مجاني للمشاريع الصغيرة

---

## 📦 النشر على GitHub Pages

### الطريقة 1: استخدام GitHub Actions (موصى بها)

1. **إنشاء ملف Workflow**

أنشئ الملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
      
      - name: Export
        run: npx next export
      
      - name: Add .nojekyll
        run: touch ./out/.nojekyll
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. **تحديث next.config.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  trailingSlash: true,
}

module.exports = nextConfig
```

3. **تفعيل GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root
   - Save

4. **Push إلى GitHub**
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

5. **انتظر 2-3 دقائق**
   - المشروع سيكون متاحاً على:
   - `https://username.github.io/repository-name`

### الطريقة 2: النشر اليدوي

```bash
# بناء المشروع
npm run build

# تصدير الملفات الثابتة
npx next export

# تثبيت gh-pages
npm install -g gh-pages

# نشر مجلد out
gh-pages -d out
```

---

## ☁️ النشر على Netlify

1. **إنشاء حساب**
   - [netlify.com](https://netlify.com)
   - سجّل دخول بـ GitHub

2. **استيراد المشروع**
   - "Add new site" → "Import an existing project"
   - اختر المستودع

3. **الإعدادات**
   ```
   Build command: npm run build
   Publish directory: out
   ```

4. **متغيرات البيئة** (إذا لزم الأمر)
   ```
   NEXT_PUBLIC_BASE_PATH=/
   ```

5. **Deploy**

---

## 🐳 النشر باستخدام Docker

### إنشاء Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/out ./out

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npx", "serve", "-s", "out", "-l", "3000"]
```

### بناء وتشغيل:

```bash
# بناء الصورة
docker build -t arabic-presentation .

# تشغيل الحاوية
docker run -p 3000:3000 arabic-presentation
```

---

## 📊 مقارنة المنصات

| المنصة | السهولة | السرعة | المزايا | العيوب |
|--------|---------|--------|---------|--------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | CI/CD تلقائي، أداء ممتاز | - |
| **GitHub Pages** | ⭐⭐⭐⭐ | ⚡⚡ | مجاني، سهل | محدود للملفات الثابتة |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | سهل، مزايا كثيرة | - |
| **Docker** | ⭐⭐⭐ | ⚡⚡ | تحكم كامل | يحتاج خبرة |

---

## 🔧 نصائح التحسين

### 1. تحسين الأداء
```javascript
// next.config.js
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}
```

### 2. تحسين الصور
- استخدم WebP
- ضغط الصور قبل الرفع
- استخدم lazy loading

### 3. تحسين CSS
- إزالة CSS غير المستخدم
- تصغير الملفات

### 4. إضافة Analytics
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🐛 حل المشاكل الشائعة

### المشكلة: الصفحة 404 بعد النشر
**الحل**: تأكد من:
- `output: 'export'` في next.config.js
- `trailingSlash: true` مفعّل
- المسار الأساسي صحيح

### المشكلة: الصور لا تظهر
**الحل**:
```javascript
// next.config.js
images: {
  unoptimized: true,
}
```

### المشكلة: الخطوط لا تعمل
**الحل**: تأكد من استخدام Google Fonts بشكل صحيح:
```typescript
import { Cairo } from 'next/font/google'
```

---

## ✅ قائمة المراجعة قبل النشر

- [ ] اختبار على جميع الأجهزة
- [ ] التأكد من RTL يعمل بشكل صحيح
- [ ] فحص الروابط المكسورة
- [ ] اختبار سرعة التحميل
- [ ] مراجعة النصوص العربية
- [ ] اختبار التنقل بين الشرائح
- [ ] التأكد من الحركات تعمل
- [ ] فحص الأخطاء في Console

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. راجع الـ README.md
2. افتح Issue على GitHub
3. تواصل عبر البريد الإلكتروني

---

**نتمنى لك نشراً موفقاً! 🚀**

