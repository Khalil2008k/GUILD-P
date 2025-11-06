'use client'

import InteractiveSlide, { Topic as TopicType } from '@/app/components/InteractiveSlide'
import { DollarSign, Users, Shield, Zap } from 'lucide-react'

export default function Slide4() {
  const topics: TopicType[] = [
    {
      id: 'economy',
      title: 'اقتصاد الفرص',
      icon: <DollarSign className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">اقتصاد الفرص</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            أي شخص يمكنه أن يقدّم أو يطلب خدمة. الشركات، الأفراد، المدارس، وحتى المقاهي، كلهم جزء من منظومة واحدة تحركها الحاجة والمهارة. النظام سريع، مباشر، وآمن.
          </p>
        </div>
      ),
    },
    {
      id: 'inclusion',
      title: 'شمول المجتمع',
      icon: <Users className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">شمول المجتمع</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            كل فئة تجد مكانها في Guild: الشباب، ذوو الاحتياجات الخاصة، وربات البيوت، والمحترفون المستقلون. الجميع قادر على المساهمة بقدرته ومهارته.
          </p>
        </div>
      ),
    },
    {
      id: 'trust',
      title: 'الثقة الرقمية',
      icon: <Shield className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">الثقة الرقمية</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            الثقة لا تُفرض، بل تُبنى. من خلال تقييم حقيقي وتاريخ إنجازات موثّق، يعرف كل مستخدم من يتعامل معه. كل تفاعل يولّد مصداقية جديدة.
          </p>
        </div>
      ),
    },
    {
      id: 'freedom',
      title: 'الحرية والمرونة',
      icon: <Zap className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">الحرية والمرونة</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            اختر وقتك وطريقتك. اعمل من بيتك، من مكتبك، أو من هاتفك. Guild لا تقيّدك، بل تمنحك الأدوات لتختار كيف تكون منتجًا وسعيدًا في الوقت ذاته.
          </p>
        </div>
      ),
    },
  ]

  return (
    <InteractiveSlide
      title="نموذج Guild"
      topics={topics}
      background="dark"
    />
  )
}

