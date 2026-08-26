import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { COMMERCIAL_PROCESS_STEPS } from '../data/content';

export default function CommercialProcess() {
  return (
    <Section id="processo-comercial">
      <SectionHeader
        label="Processo comercial"
        title="Como funciona o processo."
        subtitle="Do primeiro contato à operação rodando."
      />
      <div className="mt-12 grid gap-7 sm:grid-cols-2 md:mt-16 md:grid-cols-5 md:gap-6">
        {COMMERCIAL_PROCESS_STEPS.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/40 bg-card font-semibold text-primary shadow-[0_0_24px_-6px_var(--primary)]">
                {step.number}
              </div>
            </div>
            <h3 className="text-base font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
