import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ComparisonTable from '../components/ComparisonTable';

export default function Differential() {
  return (
    <Section id="diferenciais">
      <SectionHeader
        label="Diferencial"
        title="Não é só organização. É gestão."
        subtitle="O Nee MODO foi pensado para a operação, não apenas para armazenar dados."
      />
      <div className="mt-12 md:mt-16">
        <ComparisonTable />
      </div>
    </Section>
  );
}
