import { useState } from 'react'
import FAQItem from '../components/FAQItem'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../lib/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-y border-white/5 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes sobre o Nee MODO"
          description="Respostas diretas para correspondente, assessoria e gestores que querem sair do Excel."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
