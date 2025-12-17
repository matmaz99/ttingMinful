import { Button } from '@/components/ui/button'

export function Booking() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Take the First Step Today
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg text-gray-600">
              Your journey to emotional well-being begins with a simple conversation.
            </p>
            <ul className="inline-block text-left space-y-3">
              <li className="flex items-center gap-3">
                <svg className="h-6 w-6 flex-none text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Discuss your specific challenges
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-6 w-6 flex-none text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Learn more about my approach
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-6 w-6 flex-none text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Understand how we'll work together
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-6 w-6 flex-none text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Get answers to your questions
              </li>
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-semibold">
                Book Your Consultation
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                Send me a message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}