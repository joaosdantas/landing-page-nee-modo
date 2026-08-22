import SectionHeading from '../components/SectionHeading'

const steps = [
  { number: '01', title: 'Cadastre', description: 'Clientes e operações.' },
  { number: '02', title: 'Organize', description: 'Documentos, informações e responsáveis.' },
  { number: '03', title: 'Acompanhe', description: 'Cada etapa do processo.' },
  { number: '04', title: 'Gerencie', description: 'Tenha visão completa da operação.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-white/5 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Quatro passos para assumir o controle."
        />

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="group border-t border-white/10 pt-8">
              <span className="text-5xl font-semibold tracking-tight text-white/10 transition-colors duration-300 group-hover:text-amber-400/30">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
