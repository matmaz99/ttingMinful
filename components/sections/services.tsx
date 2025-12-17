import { Card, CardHeader, CardContent } from '@/components/ui/card'

export default function Services() {
  const sessionDetails = [
    'Individual Therapy Sessions',
    '50-minute sessions focused on your specific needs',
    'Flexible scheduling for busy professionals',
    'In-person and virtual options available',
    'Evidence-based techniques you can apply immediately'
  ]

  const process = [
    {
      step: 'Initial Consultation',
      description: "We'll discuss your needs and ensure we're a good fit"
    },
    {
      step: 'Personalized Plan',
      description: "Together, we'll create clear goals for your therapy journey"
    },
    {
      step: 'Regular Sessions',
      description: 'Weekly or bi-weekly meetings to maintain progress'
    },
    {
      step: 'Progress Review',
      description: 'Regular check-ins to adjust our approach as needed'
    }
  ]

  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="container space-y-12">
        <h2 className="text-3xl md:text-4xl font-heading text-center">
          Your Journey to Well-being
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-heading">{sessionDetails[0]}</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {sessionDetails.slice(1).map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-heading">What to Expect</h3>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-primary/30 space-y-8 pl-8">
                {process.map((item, index) => (
                  <li key={index} className="relative">
                    <div className="absolute -left-[33px] h-6 w-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-sm text-primary font-medium">{index + 1}</span>
                    </div>
                    <h4 className="font-medium mb-1">{item.step}</h4>
                    <p className="text-mutedForeground">{item.description}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}