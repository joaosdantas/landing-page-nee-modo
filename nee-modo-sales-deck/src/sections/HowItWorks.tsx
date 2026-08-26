import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { WORKFLOW_STEPS } from '../data/content';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <Section id="como-funciona">
      <SectionHeader
        label="Como funciona"
        title="Um fluxo claro e completo."
        subtitle="Do cadastro do cliente ao registro final, cada etapa tem seu lugar."
      />
      <div className="mt-12 flex flex-col gap-4 md:mt-20 md:flex-row md:items-start md:justify-center md:gap-4 lg:gap-6">
        {WORKFLOW_STEPS.map((step, i) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/40 bg-card font-semibold text-primary shadow-[0_0_24px_-6px_var(--primary)]">
                {step.number}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 max-w-[120px] text-xs text-muted-foreground">
                {step.description}
              </p>
            </div>
            {i < WORKFLOW_STEPS.length - 1 && (
              <ArrowRight className="mx-2 mt-[-24px] hidden h-5 w-5 flex-shrink-0 text-primary/40 md:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
