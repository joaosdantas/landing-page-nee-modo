import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { Eye, Users, AlertTriangle, BarChart3 } from 'lucide-react';

const managerFeatures = [
  {
    icon: Eye,
    title: 'Visão geral',
    description: 'Acompanhe todos os processos em um só lugar.',
  },
  {
    icon: Users,
    title: 'Responsáveis',
    description: 'Saiba quem está cuidando de cada etapa.',
  },
  {
    icon: AlertTriangle,
    title: 'Pendências',
    description: 'Identifique gargalos antes que sejam problemas.',
  },
  {
    icon: BarChart3,
    title: 'Status',
    description: 'Acompanhe o andamento de cada processo em tempo real.',
  },
];

export default function ForManager() {
  return (
    <Section id="para-o-gestor">
      <SectionHeader
        label="Para o gestor"
        title="Mais controle para quem precisa enxergar a operação inteira."
        subtitle="Você não deveria precisar perguntar para a equipe para descobrir onde cada processo está."
      />
      <div className="mt-12 grid gap-5 sm:gap-6 md:mt-16 md:grid-cols-2">
        {managerFeatures.map((feature) => (
          <div
            key={feature.title}
            className="group flex items-start gap-4 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="mb-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8 md:mt-16">
        <blockquote className="text-lg font-medium text-foreground sm:text-xl">
          &ldquo;Você não deveria precisar perguntar para a equipe para
          descobrir onde cada processo está.&rdquo;
        </blockquote>
      </div>
    </Section>
  );
}
