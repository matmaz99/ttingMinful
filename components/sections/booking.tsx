import { Button } from '../ui/button'

export default function BookingSection() {
  // Using straight quotes instead of curly quotes
  const benefits = [
    'Discuss your specific challenges',
    'Learn more about my approach',
    'Understand how we\'ll work together',
    'Get answers to your questions'
  ]

  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-display mb-8 text-center">Book a Free Consultation</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">Ready to start your journey to better mental health? Schedule a free 30-minute consultation to:</p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-8">Schedule Now</Button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-display mb-4">What to Expect</h3>
            <p className="mb-4">During our initial consultation, we will:</p>
            <ul className="space-y-3 text-sm">
              <li>• Discuss your current challenges and goals</li>
              <li>• Explore how CBT and mindfulness can help</li>
              <li>• Answer any questions about therapy</li>
              <li>• Determine if we're a good fit</li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">Sessions available online or in-person in Washington, D.C.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
