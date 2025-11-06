import type { Metadata } from 'next'
import { Cairo, Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-noto-sans-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'عرض تقديمي متحرك | Animated Arabic Presentation',
  description: 'عرض تقديمي احترافي بتأثيرات متحركة سينمائية',
  keywords: ['عرض تقديمي', 'تقنية', 'مشروع', 'عربي'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${notoSansArabic.variable} font-arabic antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

