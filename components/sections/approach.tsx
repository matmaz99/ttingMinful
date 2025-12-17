import { Card, CardTitle } from '@/components/ui/card'

export default function Approach() {
  const methodologies = [
    {
      title: 'Cognitive Behavioral Therapy (CBT)',
      points: [
        'Evidence-based techniques that create real change',
        'Practical tools you can use immediately',
        'Clear strategies to reshape challenging thought patterns',
        'Measurable progress you can track'
      ]
    },
    {
      title: 'Mindfulness Integration',
      points: [
        'Present-moment awareness techniques',
        'Stress reduction through proven practices',
        'Enhanced emotional regulation skills',
        'Deep-rooted, sustainable change'
      ]
    }
  ]

  return (
    <section id="approach" className="bg-background py-16 md:py-24">
      <div className="container space-y-12">
        <h2 className="text-3xl md:text-4xl font-heading text-center">
          Where Science Meets Mindfulness
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {methodologies.map((method, index) => (
            <Card key={index} className="p-6 space-y-4">
              <CardTitle className="text-xl font-heading">
                {method.title}
              </CardTitle>
              <ul className="space-y-2">
                {method.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="text-center text-lg text-mutedForeground max-w-2xl mx-auto">
          Together, these approaches create a comprehensive path to healing that addresses both immediate symptoms and long-term well-being.
        </p>
      </div>
    </section>
  )
}