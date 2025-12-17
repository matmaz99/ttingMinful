export function About() {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Meet Sarah Johnson
          </h2>
          <div className="mt-8 space-y-6">
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Hi, I'm Sarah. As a licensed therapist specializing in anxiety treatment, I understand that seeking therapy is a significant step. My role is to provide you with both the professional expertise and personal support needed for real transformation.
              </p>
              <p>
                My approach is warm, direct, and solutions-focused. I believe in creating a space where you feel both heard and guided toward practical solutions. With over [X] years of experience, I've helped hundreds of clients move from overwhelm to confidence.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Professional Credentials</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-none text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Licensed Professional Counselor
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-none text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Certified CBT Practitioner
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-none text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Mindfulness-Based Stress Reduction (MBSR) Certified
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-none text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Member of the American Psychological Association
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}