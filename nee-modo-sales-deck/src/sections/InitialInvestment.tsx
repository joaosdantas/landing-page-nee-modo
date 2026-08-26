import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { INVESTMENT_ITEMS } from '../data/content';
import { Star } from 'lucide-react';

export default function InitialInvestment() {
  return (
    <Section id="investimento">
      <SectionHeader
        label="Investimento"
        title="Investimento inicial."
        subtitle="Transparência total sobre os custos para iniciar."
      />
      <div className="mt-12 grid gap-5 sm:gap-6 md:mt-16 md:grid-cols-3">
        {INVESTMENT_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-3xl border border-border/60 bg-card/60 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-foreground">
                R$ {item.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-6 text-center shadow-[0_20px_60px_-20px_var(--primary)] sm:p-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
          <Star className="h-3 w-3" />
          Condição especial de lançamento
        </div>
        <p className="text-lg font-medium text-foreground sm:text-xl">
          Implantação gratuita para os primeiros clientes selecionados.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Fale com nosso time para saber se você se qualifica.
        </p>
      </div>
    </Section>
  );
}
