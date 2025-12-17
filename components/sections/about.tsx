import { Card } from '@/components/ui/card'

export default function About() {
  const credentials = [
    'Licensed Professional Counselor',
    'Certified CBT Practitioner',
    'Mindfulness-Based Stress Reduction (MBSR) Certified',
    'Member of the American Psychological Association'
  ]

  return (
    <section id="about" className="bg-muted py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-full overflow-hidden">
          {/* Professional headshot placeholder */}
          <div className="w-full h-full bg-accent/20" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading">Meet Sarah Johnson</h2>
          <div className="prose prose-sage max-w-none">
            <p className="text-lg">
              Hi, I'm Sarah. As a licensed therapist specializing in anxiety treatment, 
              I understand that seeking therapy is a significant step. My role is to 
              provide you with both the professional expertise and personal support 
              needed for real transformation.
            </p>
            <p className="text-lg">
              My approach is warm, direct, and solutions-focused. I believe in creating 
              a space where you feel both heard and guided toward practical solutions. 
              With over [X] years of experience, I've helped hundreds of clients move 
              from overwhelm to confidence.
            </p>
          </div>
          <Card className="mt-8 p-6 bg-secondary">
            <h3 className="text-lg font-heading mb-4">Professional Credentials</h3>
            <ul className="space-y-2 list-none">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}