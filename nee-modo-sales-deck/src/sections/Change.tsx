import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { BEFORE_ITEMS, AFTER_ITEMS } from '../data/content';
import { ArrowRight, X, Check } from 'lucide-react';

export default function Change() {
  return (
    <Section id="a-solucao">
      <SectionHeader
        label="A solução"
        title="Uma única visão da operação."
      />
      <div className="mt-12 grid items-center gap-8 md:mt-16 md:grid-cols-[1fr_auto_1fr] md:gap-12">
        <div className="rounded-3xl border border-danger/30 bg-danger/5 p-6 sm:p-8">
          <div className="mb-4 inline-flex rounded-full bg-danger/10 px-3 py-1 text-xs font-medium text-danger">
            ANTES
          </div>
          <div className="space-y-3">
            {BEFORE_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/40 px-4 py-3"
              >
                <X className="h-4 w-4 flex-shrink-0 text-danger" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <div className="flex flex-col items-center gap-2">
            <ArrowRight className="h-8 w-8 text-primary" />
            <div className="h-16 w-px bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
        </div>

        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            DEPOIS
          </div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
              <span className="text-sm font-bold text-primary">N</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              Nee MODO
            </span>
          </div>
          <div className="space-y-3">
            {AFTER_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3"
              >
                <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
