'use client'

import InteractiveSlide, { Topic as TopicType } from '@/app/components/InteractiveSlide'
import { Target, Shield, Clock, Scale, Lock, GraduationCap, Heart } from 'lucide-react'

export default function Slide2() {
  const topics: TopicType[] = [
    {
      id: 'access',
      title: 'ضعف الوصول إلى الفرص',
      icon: <Target className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">ضعف الوصول إلى الفرص</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            المنصات التقليدية لا تصل إلى الجميع. التكنولوجيا موجودة، لكن التنظيم غائب. الباحث عن عمل لا يجد الطريق، وصاحب المشروع لا يجد الشخص المناسب. الفجوة تتسع يومًا بعد يوم.
          </p>
        </div>
      ),
    },
    {
      id: 'trust',
      title: 'هشاشة الثقة بين الأطراف',
      icon: <Shield className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">هشاشة الثقة بين الأطراف</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            الخوف من الاحتيال، ومن المماطلة، ومن ضياع الحقوق جعل السوق الرقمي ساحةً مشوشة. بدون نظام يضمن العدالة للطرفين، لا يمكن لأي بيئة عمل حرة أن تزدهر.
          </p>
        </div>
      ),
    },
    {
      id: 'speed',
      title: 'بطء النظم التقليدية',
      icon: <Clock className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">بطء النظم التقليدية</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            الإجراءات الطويلة والموافقات الورقية تُقتل السرعة في عصرٍ يقوده الإيقاع الزمني السريع. الشركات لا تستطيع التحرك بالسرعة التي يتطلبها الاقتصاد الحديث.
          </p>
        </div>
      ),
    },
    {
      id: 'justice',
      title: 'غياب العدالة في التوظيف',
      icon: <Scale className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">غياب العدالة في التوظيف</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            التحيّز الاجتماعي والاقتصادي يحدّد مصير الناس أكثر من مهاراتهم. الفرص لا توزّع بالعدل، بل بالمكان والعلاقات. هذا هو أصل الخلل الذي يحتاج إلى تصحيح.
          </p>
        </div>
      ),
    },
    {
      id: 'flexibility',
      title: 'انعدام المرونة في بيئة العمل',
      icon: <Lock className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">انعدام المرونة في بيئة العمل</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            النظام الوظيفي الحالي لا يسمح بالاختيار. لا حرية في تحديد الوقت أو المكان أو أسلوب الإنتاج. النتيجة: إنتاجية منخفضة ورضا أقل.
          </p>
        </div>
      ),
    },
    {
      id: 'guidance',
      title: 'غياب التوجيه المهني المبكر وتكدّس الوظائف',
      icon: <GraduationCap className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">غياب التوجيه المهني المبكر وتكدّس الوظائف</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            يعاني خريجو الثانوية في دول مثل قطر من محدودية الفرص التي تتيح لهم تجربة مجالات مختلفة قبل اختيار تخصصهم الجامعي أو مسارهم المهني. يدخل كثير منهم في مجالات لا تتناسب مع قدراتهم أو اهتماماتهم، مما يؤدي إلى تكدّس وظيفي في بعض القطاعات ونقص حاد في أخرى. غياب النظام الذي يتيح لهم خوض تجارب عمل مؤقتة يضعف التوازن في سوق العمل ويؤخر اكتشاف المواهب الحقيقية التي يمكن تطويرها مبكرًا.
          </p>
        </div>
      ),
    },
    {
      id: 'special-needs',
      title: 'محدودية الفرص لذوي التوحّد وذوي الاحتياجات الخاصة',
      icon: <Heart className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">محدودية الفرص لذوي التوحّد وذوي الاحتياجات الخاصة</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            يواجه كثير من ذوي التوحّد وذوي الاحتياجات الخاصة صعوبة في الاندماج داخل بيئات العمل التقليدية التي لا تراعي احتياجاتهم الحسية أو النفسية. كما أن معظمهم لا يُكملون تعليمهم الجامعي، مما يقلّل من فرصهم في الالتحاق بالوظائف الرسمية. غياب المنصات التي تتيح لهم العمل من بيوتهم أو ضمن بيئة رقمية مناسبة يجعلهم يشعرون بأنهم عبء على أسرهم والمجتمع. إن توفير فرص عمل مؤقتة ومرنة عبر بيئة رقمية مثل Guild يتيح لهم استثمار مهاراتهم الخاصة، وتنميتها تدريجيًا، وتحقيق دخل كريم يضمن لهم الكرامة والاستقلال.
          </p>
        </div>
      ),
    },
  ]

  return (
    <InteractiveSlide
      title="القضايا الجوهرية"
      topics={topics}
      background="dark"
    />
  )
}
