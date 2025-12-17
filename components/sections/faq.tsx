import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does therapy typically last?',
      answer: 'Each journey is unique. Most clients begin to see meaningful changes within 8-12 sessions, though some prefer ongoing support for sustained growth.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, I work with several major insurance providers. We can discuss your coverage during our initial consultation.'
    },
    {
      question: 'What if I'm new to therapy?',
      answer: 'Many of my clients are first-time therapy seekers. I'll guide you through the process and ensure you feel comfortable every step of the way.'
    },
    {
      question: 'How do I know if CBT with mindfulness is right for me?',
      answer: 'This approach is particularly effective for anxiety, stress, and depression. Our initial consultation will help determine if it's the best fit for your needs.'
    }
  ]

  return (
    <section id="faq" className="bg-muted py-16 md:py-24">
      <div className="container max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-heading text-center">
          Common Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-mutedForeground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}