import { CircleCheck } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { whatsappUrl, WHATSAPP_MESSAGES } from '../lib/site'

const items = [
  'Logotipo da empresa',
  'Nome da empresa',
  'Cores personalizadas',
  'Tela de login personalizada',
  'Identidade visual aplicada',
]

export default function WhiteLabel() {
  return (
    <section id="white-label" className="border-y border-white/5 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="White-label"
              title="A plataforma com a identidade da sua empresa."
              description="O Nee MODO pode ser personalizado para cada empresa. Seu time acessa uma plataforma com a cara do seu negócio — do login à tela inicial."
            />
            <ul className="mt-10 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <Button href={whatsappUrl(WHATSAPP_MESSAGES.whitelabel)} className="mt-10">
              Quero conhecer o White-label
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 rounded-full bg-navy-700/30 blur-3xl"
            />
            <div
              role="img"
              aria-label="Representação de uma tela de login personalizada com a identidade de uma empresa"
              className="relative rounded-2xl border border-white/10 bg-ink-800 p-8 shadow-2xl shadow-black/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400 text-sm font-bold text-ink-900">S</span>
                <span>
                  <span className="block text-sm font-semibold text-white">SUA EMPRESA</span>
                  <span className="block text-[11px] text-slate-500">Área restrita</span>
                </span>
              </div>
              <div className="mt-6 space-y-3" aria-hidden="true">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs text-slate-500">
                  nome@suaempresa.com.br
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs tracking-[0.3em] text-slate-500">
                  ••••••••
                </div>
                <div className="rounded-lg bg-teal-400 py-2.5 text-center text-xs font-semibold text-ink-900">
                  Entrar
                </div>
              </div>
              <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-slate-600">
                Powered by Nee MODO
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-4 -top-5 hidden items-center gap-1.5 rounded-xl border border-white/10 bg-ink-700 p-3 shadow-xl shadow-black/40 sm:flex"
            >
              <span className="h-5 w-5 rounded-md bg-teal-400" />
              <span className="h-5 w-5 rounded-md bg-navy-700" />
              <span className="h-5 w-5 rounded-md bg-white/20" />
              <span className="h-5 w-5 rounded-md bg-amber-400" />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-4 hidden items-center gap-2.5 rounded-xl border border-white/10 bg-ink-700 px-3.5 py-2.5 shadow-xl shadow-black/40 sm:flex"
            >
              <span className="h-6 w-6 rounded-md bg-teal-400/90" />
              <span className="text-[11px] text-slate-400">Favicon personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
