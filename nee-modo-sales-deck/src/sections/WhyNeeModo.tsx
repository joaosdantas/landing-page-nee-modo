import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { WHY_PILLARS } from '../data/content';

export default function WhyNeeModo() {
  return (
    <Section id="por-que-nee-modo">
      <SectionHeader
        label="Por que Nee MODO"
        title="Por que escolher o Nee MODO?"
      />
      <div className="mt-12 grid gap-5 sm:gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
        {WHY_PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="group flex flex-col items-center rounded-3xl border border-primary/15 bg-gradient-to-br from-card via-card to-primary/[0.06] p-6 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-8"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 shadow-[0_0_24px_-6px_var(--primary)] transition-all group-hover:bg-primary/20">
              <pillar.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
