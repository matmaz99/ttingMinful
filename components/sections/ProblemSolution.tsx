import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function ProblemSolution() {
  const bulletPoints = [
    'Transform overwhelming thoughts into manageable perspectives',
    'Develop practical tools for immediate anxiety relief',
    'Create lasting strategies for long-term emotional well-being',
    'Build resilience that extends beyond the therapy room'
  ]

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading">You're Not Alone in This Journey</h2>
            <p className="text-lg">
              Living with anxiety can feel like carrying an invisible weight that others don't see. 
              The racing thoughts, the constant worry, the physical tension – they impact every aspect of your life. 
              But you don't have to face these challenges alone.
            </p>
            <Card className="p-6 space-y-4">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </Card>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-accent/20">
            {/* Placeholder for image */}
          </div>
        </div>
      </div>
    </section>
  )
}