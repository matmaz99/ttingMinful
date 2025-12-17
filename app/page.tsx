import Hero from '@/components/sections/Hero'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Approach from '@/components/sections/Approach'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import FAQ from '@/components/sections/FAQ'
import Booking from '@/components/sections/Booking'
import Testimonials from '@/components/sections/Testimonials'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Approach />
      <About />
      <Services />
      <FAQ />
      <Booking />
      <Testimonials />
      <Footer />
    </main>
  )
}