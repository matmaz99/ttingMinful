export function FAQ() {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Common Questions
          </h2>
          <div className="mt-12 grid gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">How long does therapy typically last?</h3>
              <p className="text-gray-600">
                Each journey is unique. Most clients begin to see meaningful changes within 8-12 sessions, though some prefer ongoing support for sustained growth.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Do you accept insurance?</h3>
              <p className="text-gray-600">
                Yes, I work with several major insurance providers. We can discuss your coverage during our initial consultation.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What if I'm new to therapy?</h3>
              <p className="text-gray-600">
                Many of my clients are first-time therapy seekers. I'll guide you through the process and ensure you feel comfortable every step of the way.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">How do I know if CBT with mindfulness is right for me?</h3>
              <p className="text-gray-600">
                This approach is particularly effective for anxiety, stress, and depression. Our initial consultation will help determine if it's the best fit for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}