import { CheckCircle } from 'lucide-react'

export function ProblemSolutionSection() {
  const benefits = [
    'Transform overwhelming thoughts into manageable perspectives',
    'Develop practical tools for immediate anxiety relief',
    'Create lasting strategies for long-term emotional well-being',
    'Build resilience that extends beyond the therapy room'
  ]

  return (
    <section id="problem-solution" className="section-padding bg-muted">
      <div className="container-width grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading">
            You're Not Alone in This Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Living with anxiety can feel like carrying an invisible weight that others don't see. 
            The racing thoughts, the constant worry, the physical tension – they impact every aspect of your life. 
            But you don't have to face these challenges alone.
          </p>
          <div className="space-y-4 mt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
