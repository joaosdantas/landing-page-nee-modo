import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { whatsappUrl, WHATSAPP_MESSAGES } from '../lib/site'

const benefits = [
  'Faça mais processos de financiamento no mesmo tempo — e aumente a renda da operação.',
  'Reduza trabalho braçal de organização: pasta, documento e pendência num só fluxo.',
  'Saiba onde cada processo está (análise, pendência, minuta, registro).',
  'Identifique gargalos antes que eles virem atraso com cliente ou construtora.',
  'Tire a equipe do Excel e do WhatsApp como sistema.',
  'Ganhe segurança com histórico e rastreabilidade (LGPD-friendly).',
  'Libere tempo do gestor para focar em parceria, origem e fechamento.',
]

export default function ManagerBenefits() {
  return (
    <section className="bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                align="left"
                eyebrow="Para o gestor"
                title="Mais processos, menos braçal, mais tempo."
                description="Feito para o gestor de correspondente e assessoria que quer cortar retrabalho — e enxergar a esteira inteira com segurança."
              />
              <Button href={whatsappUrl(WHATSAPP_MESSAGES.demo)} variant="outline" className="mt-10">
                Pedir demo no WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <ul>
            {benefits.map((benefit, index) => (
              <li
                key={benefit}
                className="group flex items-baseline gap-6 border-b border-white/5 py-6 transition-colors duration-300 first:border-t hover:bg-white/[0.02] first:pt-6 last:pb-6"
              >
                <span className="text-sm font-semibold text-amber-400/80 transition-colors duration-300 group-hover:text-amber-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-slate-200">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
