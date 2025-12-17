import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
            Find Your Path to Peace Through Evidence-Based Therapy
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Combining the proven effectiveness of CBT with mindfulness techniques to help you overcome anxiety and reclaim your life
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-semibold">
              Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Learn My Approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}