import { ClipboardList, EyeOff, FileSearch, Gauge, Network, Split } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const pains = [
  {
    icon: Split,
    title: 'Processos espalhados',
    description: 'Informações e etapas vivem em ferramentas, planilhas e conversas diferentes.',
  },
  {
    icon: FileSearch,
    title: 'Documentos difíceis de encontrar',
    description: 'Tempo perdido buscando arquivos importantes no meio da operação.',
  },
  {
    icon: EyeOff,
    title: 'Falta de visibilidade',
    description: 'Sem uma visão clara, é difícil saber onde cada processo realmente está.',
  },
  {
    icon: ClipboardList,
    title: 'Acompanhamento manual',
    description: 'Cobranças e atualizações dependem de esforço manual constante.',
  },
  {
    icon: Network,
    title: 'Informações descentralizadas',
    description: 'Cada área guarda seus dados de um jeito, sem padrão nem histórico.',
  },
  {
    icon: Gauge,
    title: 'Gestores sem visão da operação',
    description: 'Decisões tomadas sem enxergar o todo da operação.',
  },
]

export default function Problem() {
  return (
    <section className="border-y border-white/5 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                align="left"
                eyebrow="O problema"
                title="Sua operação não deveria depender de planilhas e mensagens."
                description="Quando cliente, financiamento e documentos ficam em lugares diferentes, quem perde o controle é o gestor."
              />
            </div>
          </div>

          <ul className="divide-y divide-white/5">
            {pains.map((pain) => (
              <li key={pain.title} className="group flex gap-5 py-6 first:pt-0 last:pb-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors duration-300 group-hover:border-amber-400/30 group-hover:text-amber-400">
                  <pain.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium text-white">{pain.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{pain.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
