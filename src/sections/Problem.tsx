import { ClipboardList, EyeOff, FileSearch, Gauge, Network, Split } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const pains = [
  {
    icon: Split,
    title: 'Excel e WhatsApp como “sistema”',
    description:
      'Correspondentes e assessorias perdem tempo com planilha, print e mensagem — e o processo de financiamento some no meio.',
  },
  {
    icon: FileSearch,
    title: 'Documentos difíceis de encontrar',
    description: 'Arquivos espalhados atrasam análise, pendência e registro — e travam o fluxo com a construtora.',
  },
  {
    icon: EyeOff,
    title: 'Sem visão da esteira',
    description: 'Ninguém sabe em qual etapa está cada operação: cadastro, análise CCA, CCV, minuta ou cartório.',
  },
  {
    icon: ClipboardList,
    title: 'Retrabalho braçal no dia a dia',
    description:
      'Reabrir pasta, reenviar print, recontar status e redigitar o que já existe — a equipe gasta horas em operação, não em origem.',
  },
  {
    icon: Network,
    title: 'Corretor, CCA e construtora desconectados',
    description: 'Cada um trabalha num canal diferente; falta padrão, histórico e responsabilidade por etapa.',
  },
  {
    icon: Gauge,
    title: 'Volume limitado = renda limitada',
    description:
      'Sistemas precários seguram quantos financiamentos o time consegue concluir. Menos agilidade, menos receita.',
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
                title="Por que correspondente e assessoria não deveriam viver no Excel?"
                description="Quando o correspondente bancário depende de planilha e WhatsApp, o gestor perde controle — e a equipe deixa de fechar mais processos de financiamento com segurança e agilidade."
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
