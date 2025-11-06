'use client'

import InteractiveSlide, { Topic } from '@/app/components/InteractiveSlide'
import { Sparkles, Heart, Users, Eye } from 'lucide-react'

export default function Slide3() {
  const topics: Topic[] = [
    {
      id: 'what',
      title: 'ما هو GUILD',
      icon: <Sparkles className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">ما هو GUILD</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Guild ليست تطبيقًا عاديًا، بل مركز أعمال جديد يعيد تعريف العمل ذاته. إنها بيئة رقمية تفتح الباب لكل إنسان ليشارك بمهارته، بصرف النظر عن عمره أو تعليمه أو مكانه.
          </p>
        </div>
      ),
    },
    {
      id: 'philosophy',
      title: 'فلسفة Guild',
      icon: <Heart className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">فلسفة Guild</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            في عالمٍ يقدّس الورق، تؤمن Guild أن القيمة في الفعل لا في اللقب. هنا، المهارة تتحدث، لا السيرة الذاتية. كل إنجاز يبني الثقة، وكل مهمة تُضيف إلى رصيدك الحقيقي.
          </p>
        </div>
      ),
    },
    {
      id: 'community',
      title: 'مجتمع Guild',
      icon: <Users className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">مجتمع Guild</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            مجتمع حيّ يجمع المبدعين وأصحاب الأعمال في منظومة واحدة. الناس، الشركات، المؤسسات، وحتى الحكومات يمكنها أن تتعاون في فضاءٍ واحد، دون تعقيد أو وساطة.
          </p>
        </div>
      ),
    },
    {
      id: 'vision',
      title: 'الرؤية',
      icon: <Eye className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">الرؤية</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            رؤيتنا أن يكون العمل متاحًا للجميع، والفرص شفافة، والنجاح مبنيًا على الجهد لا الصدفة. Guild هي الخطوة الأولى نحو سوقٍ عالميٍّ أكثر عدلاً ومرونة.
          </p>
        </div>
      ),
    },
  ]

  return (
    <InteractiveSlide
      title="GUILD"
      topics={topics}
      background="dark"
    />
  )
}
