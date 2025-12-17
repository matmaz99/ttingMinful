import { Hero } from '@/components/sections/hero'
import { ProblemSolution } from '@/components/sections/problem-solution'
import { Approach } from '@/components/sections/approach'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { FAQ } from '@/components/sections/faq'
import { Booking } from '@/components/sections/booking'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Approach />
      <About />
      <Services />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  )
}