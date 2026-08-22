import {
  Banknote,
  CircleCheck,
  Files,
  Landmark,
  Search,
  Stamp,
  User,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const stages = [
  { icon: User, name: 'Cliente', hint: 'Cadastro e informações' },
  { icon: Landmark, name: 'Financiamento', hint: 'Dados da operação' },
  { icon: Files, name: 'Documentação', hint: 'Arquivos e pendências' },
  { icon: Search, name: 'Análise', hint: 'Status da etapa' },
  { icon: CircleCheck, name: 'Validação', hint: 'Conferências e aprovações' },
  { icon: Banknote, name: 'Repasse', hint: 'Acompanhamento do repasse' },
  { icon: Stamp, name: 'Registro', hint: 'Etapa final do processo' },
]

export default function Solution() {
  return (
    <section id="solucao" className="bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solução"
          title="Uma única visão de toda a operação."
          description="O Nee MODO organiza o fluxo completo da sua operação imobiliária. Cada etapa fica registrada, visível e sob controle — do cadastro ao registro."
        />

        <ol className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
          <span
            aria-hidden="true"
            className="absolute left-[7%] right-[7%] top-5 hidden h-px bg-white/10 lg:block"
          />
          {stages.map((stage) => (
            <li key={stage.name} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-800 text-amber-400 transition-colors duration-300 hover:border-amber-400/50">
                <stage.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="mt-4 text-sm font-semibold text-white">{stage.name}</span>
              <span className="mt-1 max-w-[11rem] text-xs leading-relaxed text-slate-500">
                {stage.hint}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
