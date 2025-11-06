'use client'

import InteractiveSlide, { Topic as TopicType } from '@/app/components/InteractiveSlide'
import { Users, Shield, TrendingUp } from 'lucide-react'
import { DottedSurface } from '@/components/ui/dotted-surface'

export default function Slide6() {
  const topics: TopicType[] = [
    {
      id: 'empowerment',
      title: 'التمكين للجميع',
      icon: <Users className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">التمكين للجميع</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            العمل ليس امتيازًا لفئة معينة، بل حقّ لكل إنسان. Guild تفتح الأبواب لمن لا يجدون بيئة عمل تقبلهم، لتمنحهم فرصة الكرامة والإنتاج. كما تتيح المنصة فرصًا واقعية لذوي التوحّد وذوي الاحتياجات الخاصة للعمل من منازلهم ضمن بيئة رقمية تراعي احتياجاتهم المختلفة، دون ضغط أو تعامل مباشر مرهق. يستطيع هؤلاء الأفراد تقديم خدمات متخصصة وفق مهاراتهم، والمشاركة في المهام المؤقتة التي تنمّي قدراتهم وتمنحهم مصدر دخل مستقر وشعورًا حقيقيًا بالاستقلال والاندماج في المجتمع.
          </p>
        </div>
      ),
    },
    {
      id: 'independence',
      title: 'الاستقلالية',
      icon: <Shield className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">الاستقلالية</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            من خلال الدخل المرن، يصبح المستخدم مسؤولاً عن وقته ومستقبله. لا تبعية، لا بيروقراطية، فقط حرية محسوبة.
          </p>
        </div>
      ),
    },
    {
      id: 'economy',
      title: 'بناء اقتصاد رقمي إنساني',
      icon: <TrendingUp className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">بناء اقتصاد رقمي إنساني</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            التحول الرقمي يجب أن يخدم الإنسان أولًا. Guild تضع القيم قبل الأرباح، لتصنع سوقًا عادلاً يحترم الجهد والوقت.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div style={{ transform: 'translateY(-150px)' }} className="relative">
      <InteractiveSlide
        title="المجتمع والتمكين"
        topics={topics}
        background="dark"
      />
      {/* Dotted Surface at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none">
        <DottedSurface className="h-full w-full" />
      </div>
    </div>
  )
}
