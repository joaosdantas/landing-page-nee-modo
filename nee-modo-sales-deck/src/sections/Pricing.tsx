import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import PricingCard from '../components/PricingCard';
import { PRICING_PLANS } from '../data/content';

export default function Pricing() {
  return (
    <Section id="planos">
      <SectionHeader
        label="Planos"
        title="Escolha o plano ideal para sua operação."
        subtitle="Foco em facilitar a conversa comercial."
      />
      <div className="mt-12 grid gap-5 sm:gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
        {PRICING_PLANS.map((plan) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            subtitle={plan.subtitle}
            users={plan.users}
            description={plan.description}
            highlighted={plan.highlighted}
            badge={plan.badge}
          />
        ))}
      </div>
    </Section>
  );
}
