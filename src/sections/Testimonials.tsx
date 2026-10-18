import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { whatsappUrl, WHATSAPP_MESSAGES } from '../lib/site'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Com o Nee MODO saímos do Excel e do WhatsApp. Em poucas semanas passamos de 60 processos de financiamento habitacional sem a burocracia exagerada de antes — a esteira do correspondente ficou clara para o time e para as construtoras.',
    role: 'Gestão de correspondente / assessoria',
    highlight: '60+ processos · menos burocracia',
  },
  {
    quote:
      'Ganhamos agilidade no crédito imobiliário e mais confiança com as construtoras parceiras. Cada etapa tem dono, documento e status — sobra tempo para prospectar e fechar mais operações, com segurança e rastreabilidade.',
    role: 'Operação CCA com rede de corretores',
    highlight: 'Mais confiança com construtoras · mais agilidade',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="border-y border-white/5 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prova social"
          title="O que clientes reais falam"
          description="Correspondentes e assessorias que trocaram planilha e sistemas precários por uma esteira de financiamento imobiliário com controle de ponta a ponta."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.highlight}
              className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900/80 p-8 shadow-xl shadow-black/20"
            >
              <Quote className="h-8 w-8 text-amber-400/80" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-amber-400">{item.highlight}</p>
                <p className="mt-1 text-sm text-slate-400">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={whatsappUrl(WHATSAPP_MESSAGES.testimonials)} size="lg">
            Quero resultados assim — falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
