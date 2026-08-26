import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import { FEATURES } from '../data/content';

export default function Features() {
  return (
    <Section id="funcionalidades">
      <SectionHeader
        label="Funcionalidades"
        title="Tudo que sua operação precisa."
        subtitle="Recursos pensados para quem gerencia operações imobiliárias."
      />
      <div className="mt-12 grid gap-4 sm:gap-5 md:mt-16 md:grid-cols-4">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            className={i === FEATURES.length - 1 ? 'md:col-span-2' : ''}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
