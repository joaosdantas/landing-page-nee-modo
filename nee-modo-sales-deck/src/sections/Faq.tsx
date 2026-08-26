import { useState } from 'react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <SectionHeader
        label="FAQ"
        title="Perguntas frequentes."
      />
      <div className="mx-auto mt-12 max-w-3xl space-y-3 md:mt-16">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-muted/30"
            >
              <span className="text-sm font-medium text-foreground sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-40 pb-4' : 'max-h-0'
              }`}
            >
              <p className="px-6 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
