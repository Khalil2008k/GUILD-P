#!/usr/bin/env node

/**
 * نص تحقق من إعداد المشروع
 * Setup Verification Script
 * 
 * يتحقق من أن جميع الملفات والمكونات موجودة وجاهزة
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 التحقق من إعداد المشروع...\n');

const requiredFiles = [
  // Config files
  { path: 'package.json', name: 'ملف التبعيات' },
  { path: 'next.config.js', name: 'إعدادات Next.js' },
  { path: 'tailwind.config.ts', name: 'إعدادات Tailwind' },
  { path: 'tsconfig.json', name: 'إعدادات TypeScript' },
  
  // Documentation
  { path: 'README.md', name: 'الدليل الكامل' },
  { path: 'QUICKSTART.md', name: 'دليل البدء السريع' },
  { path: 'DEPLOYMENT.md', name: 'دليل النشر' },
  
  // App structure
  { path: 'app/layout.tsx', name: 'التخطيط الرئيسي' },
  { path: 'app/page.tsx', name: 'الصفحة الرئيسية' },
  { path: 'app/globals.css', name: 'التنسيقات العامة' },
  
  // Components
  { path: 'app/components/Slide.tsx', name: 'مكون الشريحة' },
  { path: 'app/components/Topic.tsx', name: 'مكون العنوان' },
  { path: 'app/components/Background3D.tsx', name: 'الخلفية ثلاثية الأبعاد' },
  { path: 'app/components/NavigationDots.tsx', name: 'نقاط التنقل' },
  { path: 'app/components/SlideNumber.tsx', name: 'رقم الشريحة' },
  { path: 'app/components/SlideNavigation.tsx', name: 'التنقل' },
  
  // Slides
  { path: 'app/slides/layout.tsx', name: 'تخطيط الشرائح' },
  { path: 'app/slides/1/page.tsx', name: 'الشريحة 1 - المقدمة' },
  { path: 'app/slides/2/page.tsx', name: 'الشريحة 2 - المشكلة' },
  { path: 'app/slides/3/page.tsx', name: 'الشريحة 3 - الحل' },
  { path: 'app/slides/4/page.tsx', name: 'الشريحة 4 - الفكرة التقنية' },
  { path: 'app/slides/5/page.tsx', name: 'الشريحة 5 - مراحل التطوير' },
  { path: 'app/slides/6/page.tsx', name: 'الشريحة 6 - التصميم' },
  { path: 'app/slides/7/page.tsx', name: 'الشريحة 7 - الأهداف' },
  { path: 'app/slides/8/page.tsx', name: 'الشريحة 8 - الأثر المجتمعي' },
  { path: 'app/slides/9/page.tsx', name: 'الشريحة 9 - التمويل' },
  { path: 'app/slides/10/page.tsx', name: 'الشريحة 10 - الشكر' },
  
  // GitHub Actions
  { path: '.github/workflows/deploy.yml', name: 'GitHub Actions' },
];

let allFilesExist = true;
let checkedFiles = 0;
let missingFiles = [];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file.path);
  const exists = fs.existsSync(filePath);
  
  if (exists) {
    console.log(`✅ ${file.name}`);
    checkedFiles++;
  } else {
    console.log(`❌ ${file.name} - مفقود`);
    allFilesExist = false;
    missingFiles.push(file.name);
  }
});

console.log('\n' + '='.repeat(50));

if (allFilesExist) {
  console.log('\n🎉 رائع! جميع الملفات موجودة وجاهزة');
  console.log(`\n📊 تم التحقق من ${checkedFiles} ملف بنجاح\n`);
  console.log('الخطوات التالية:');
  console.log('1. npm install        - تثبيت التبعيات');
  console.log('2. npm run dev        - تشغيل المشروع');
  console.log('3. افتح http://localhost:3000');
  console.log('\n📖 اقرأ QUICKSTART.md للبدء السريع\n');
} else {
  console.log(`\n⚠️  تحذير: ${missingFiles.length} ملف مفقود`);
  console.log('\nالملفات المفقودة:');
  missingFiles.forEach(file => console.log(`  - ${file}`));
  console.log('\nيُرجى التأكد من تحميل جميع الملفات بشكل صحيح.\n');
  process.exit(1);
}

// Check package.json dependencies
console.log('🔍 التحقق من التبعيات...\n');

try {
  const packageJson = require('./package.json');
  const requiredDeps = [
    'next',
    'react',
    'framer-motion',
    'gsap',
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'lottie-react',
  ];
  
  let allDepsPresent = true;
  
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep]) {
      console.log(`✅ ${dep} - ${packageJson.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep} - مفقود`);
      allDepsPresent = false;
    }
  });
  
  if (!allDepsPresent) {
    console.log('\n⚠️  بعض التبعيات مفقودة. قم بتشغيل: npm install\n');
  } else {
    console.log('\n✅ جميع التبعيات موجودة في package.json\n');
  }
} catch (error) {
  console.log('❌ خطأ في قراءة package.json\n');
}

console.log('='.repeat(50) + '\n');

