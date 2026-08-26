import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ProblemCard from '../components/ProblemCard';
import { PROBLEMS } from '../data/content';

export default function Problem() {
  return (
    <Section id="o-problema">
      <SectionHeader
        label="O problema"
        title="Sua operação está espalhada?"
        subtitle="Quando as informações estão espalhadas, o gestor perde tempo tentando descobrir o que está acontecendo."
      />
      <div className="mt-12 grid gap-5 sm:gap-6 md:mt-16 md:grid-cols-3">
        {PROBLEMS.map((problem) => (
          <ProblemCard
            key={problem.title}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
          />
        ))}
      </div>
    </Section>
  );
}
