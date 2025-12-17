import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Booking() {
  const benefits = [
    'Discuss your specific challenges',
    'Learn more about my approach',
    'Understand how we'll work together',
    'Get answers to your questions'
  ]

  return (
    <section id="booking" className="bg-primary text-primaryForeground py-16 md:py-24">
      <div className="container text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-heading">
          Take the First Step Today
        </h2>
        
        <ul className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4 text-left">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <Button variant="secondary" size="lg">
            Book Your Consultation
          </Button>
          <p className="text-primary-foreground/80">
            Not ready to book? Send me a message
          </p>
        </div>
      </div>
    </section>
  )
}