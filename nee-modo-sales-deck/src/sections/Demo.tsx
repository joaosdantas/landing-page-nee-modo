import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import DashboardMockup from '../components/DashboardMockup';

export default function Demo() {
  return (
    <Section id="demonstracao">
      <SectionHeader
        label="Produto"
        title="Veja o Nee MODO em acao."
        subtitle="Uma plataforma completa para gestao da sua operacao."
      />
      <div className="mt-12 md:mt-16">
        <DashboardMockup />
      </div>
    </Section>
  );
}
