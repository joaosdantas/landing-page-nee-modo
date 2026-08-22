import {
  Building2,
  ClipboardCheck,
  Files,
  History,
  Landmark,
  LayoutDashboard,
  LockKeyhole,
  Users,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'

const features = [
  {
    icon: Users,
    title: 'Gestão de clientes',
    description: 'Centralize as informações de cada cliente da sua operação.',
  },
  {
    icon: Landmark,
    title: 'Financiamentos',
    description: 'Organize os financiamentos por cliente, etapa e responsável.',
  },
  {
    icon: Files,
    title: 'Gestão documental',
    description: 'Todos os documentos da operação em um só lugar, fáceis de encontrar.',
  },
  {
    icon: ClipboardCheck,
    title: 'Fluxo de aprovações',
    description: 'Acompanhe aprovações e validações em cada etapa do processo.',
  },
  {
    icon: Building2,
    title: 'Empreendimentos',
    description: 'Gerencie os empreendimentos vinculados às suas operações.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard gerencial',
    description: 'Visão geral da operação para apoiar as decisões do gestor.',
  },
  {
    icon: History,
    title: 'Histórico',
    description: 'Cada movimentação registrada para garantir rastreabilidade.',
  },
  {
    icon: LockKeyhole,
    title: 'Permissões',
    description: 'Controle o que cada usuário pode ver e fazer na plataforma.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Funcionalidades"
          title="Tudo o que a sua operação precisa em um só lugar."
          description="Módulos criados para a rotina de quem gerencia operações imobiliárias."
        />

        <div className="mt-16 grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
