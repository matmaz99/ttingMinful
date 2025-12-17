import { Hero } from '@/components/sections/hero'
import { ProblemSolution } from '@/components/sections/problem-solution'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
    </main>
  )
}