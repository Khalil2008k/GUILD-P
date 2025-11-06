'use client'

import InteractiveSlide, { Topic as TopicType } from '@/app/components/InteractiveSlide'
import { TrendingUp, Zap, Lightbulb, Sparkles } from 'lucide-react'

export default function Slide9() {
  const topics: TopicType[] = [
    {
      id: 'flexible',
      title: 'اقتصاد مرن ومتصل',
      icon: <TrendingUp className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">اقتصاد مرن ومتصل</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Guild تخلق اقتصادًا حيًا يتحرك بالطلب والمهارة، لا بالروتين الإداري.
          </p>
        </div>
      ),
    },
    {
      id: 'productivity',
      title: 'تسريع الإنتاجية الوطنية',
      icon: <Zap className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">تسريع الإنتاجية الوطنية</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            العمل الحر المنظّم يرفع الإنتاجية ويقلل البطالة المقنّعة، ويعيد توزيع الدخل بعدالة.
          </p>
        </div>
      ),
    },
    {
      id: 'entrepreneurship',
      title: 'تحفيز ريادة الأعمال',
      icon: <Lightbulb className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">تحفيز ريادة الأعمال</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            المنصة تهيئ بيئة عملية لتجربة الأفكار وتطوير رواد أعمال جدد من خلال العمل الواقعي.
          </p>
        </div>
      ),
    },
    {
      id: 'culture',
      title: 'ثقافة الفرص الجديدة',
      icon: <Sparkles className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">ثقافة الفرص الجديدة</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Guild لا تخلق وظائف فقط، بل ثقافة جديدة تجعل الفرصة متاحة في كل لحظة ولكل إنسان.
          </p>
        </div>
      ),
    },
  ]

  return (
    <InteractiveSlide
      title="الأثر والاقتصاد"
      topics={topics}
      background="dark"
    />
  )
}
