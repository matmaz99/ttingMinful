export function Services() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Your Journey to Well-being
          </h2>
          <div className="mt-12 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Individual Therapy Sessions</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-none mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>50-minute sessions focused on your specific needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-none mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible scheduling for busy professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-none mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>In-person and virtual options available</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-none mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Evidence-based techniques you can apply immediately</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">What to Expect</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-white font-semibold">1</span>
                  <div>
                    <h4 className="font-semibold">Initial Consultation</h4>
                    <p className="text-gray-600">We'll discuss your needs and ensure we're a good fit</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-white font-semibold">2</span>
                  <div>
                    <h4 className="font-semibold">Personalized Plan</h4>
                    <p className="text-gray-600">Together, we'll create clear goals for your therapy journey</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-white font-semibold">3</span>
                  <div>
                    <h4 className="font-semibold">Regular Sessions</h4>
                    <p className="text-gray-600">Weekly or bi-weekly meetings to maintain progress</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-white font-semibold">4</span>
                  <div>
                    <h4 className="font-semibold">Progress Review</h4>
                    <p className="text-gray-600">Regular check-ins to adjust our approach as needed</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}