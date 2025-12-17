import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is CBT and how does it work?',
      answer: 'Cognitive Behavioral Therapy (CBT) is a proven approach that helps identify and change negative thought patterns and behaviors. We work together to develop practical strategies for managing challenges and achieving your goals.'
    },
    {
      question: 'How long are the sessions?',
      answer: 'Individual therapy sessions are 50 minutes long. We meet weekly or bi-weekly, depending on your needs and goals.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, I work with several major insurance providers. We can discuss your coverage during our initial consultation.'
    },
    {
      question: 'What if I\'m new to therapy?',
      answer: 'Many of my clients are first-time therapy seekers. I\'ll guide you through the process and ensure you feel comfortable every step of the way.'
    },
    {
      question: 'Are online sessions available?',
      answer: 'Yes, I offer secure video sessions for clients in the Washington, D.C. area. Online therapy provides the same quality of care with added convenience.'
    }
  ]

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-display mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
