import Button from '../components/Button'
import { CONTACT_URL } from '../lib/site'

export default function FinalCTA() {
  return (
    <section className="bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-700 px-6 py-16 text-center shadow-2xl shadow-black/40 sm:px-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Sua operação merece uma visão completa.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">
              Pare de acompanhar processos espalhados. Tenha uma plataforma criada para organizar,
              acompanhar e gerenciar sua operação imobiliária.
            </p>
            <div className="mt-10">
              <Button href={CONTACT_URL} size="lg">
                Falar com um especialista
              </Button>
            </div>
            <p className="mt-8 text-sm text-slate-400">Nee MODO — uma solução Nexabee.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
