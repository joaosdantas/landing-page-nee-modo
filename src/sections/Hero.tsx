import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import HeroMockup from '../components/HeroMockup'
import { CONTACT_URL } from '../lib/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-20 pt-36 sm:pt-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-navy-700/40 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-64 w-[30rem] -translate-x-1/2 rounded-full bg-amber-400/[0.07] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
          Uma solução Nexabee
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Tenha o <span className="text-amber-400">controle</span> de toda a sua operação
          imobiliária.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl">
          Centralize clientes, financiamentos, documentos e aprovações em uma única plataforma.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={CONTACT_URL} size="lg">
            Conhecer o Nee MODO
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button href={CONTACT_URL} variant="outline" size="lg">
            Falar com especialista
          </Button>
        </div>

        <div className="mt-16 sm:mt-20">
          <HeroMockup />
        </div>
      </div>
    </section>
  )
}
