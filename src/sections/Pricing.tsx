import { CircleCheck } from 'lucide-react'
import PricingCard from '../components/PricingCard'
import SectionHeading from '../components/SectionHeading'
import { whatsappUrl, WHATSAPP_MESSAGES } from '../lib/site'

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 699',
    users: 'Até 5 usuários',
    description: 'Para operações pequenas que precisam organizar e centralizar sua gestão.',
    badge: undefined,
    highlighted: false,
    ctaHref: whatsappUrl(WHATSAPP_MESSAGES.pricing.essencial),
  },
  {
    name: 'Profissional',
    price: 'R$ 1.199',
    users: 'Até 15 usuários',
    description: 'Para operações em crescimento que precisam de mais controle no dia a dia.',
    badge: 'Mais escolhido',
    highlighted: true,
    ctaHref: whatsappUrl(WHATSAPP_MESSAGES.pricing.profissional),
  },
  {
    name: 'Gestão',
    price: 'R$ 1.999',
    users: 'Até 30 usuários',
    description: 'Para equipes maiores que gerenciam múltiplas frentes ao mesmo tempo.',
    badge: undefined,
    highlighted: false,
    ctaHref: whatsappUrl(WHATSAPP_MESSAGES.pricing.gestao),
  },
  {
    name: 'Enterprise',
    price: 'R$ 3.499',
    pricePrefix: 'A partir de',
    users: '30+ usuários',
    description: 'Para operações maiores e necessidades personalizadas.',
    badge: undefined,
    highlighted: false,
    ctaHref: whatsappUrl(WHATSAPP_MESSAGES.pricing.enterprise),
  },
]

const implementationIncludes = [
  'Configuração inicial',
  'Cadastro de usuários',
  'Empreendimentos',
  'Permissões',
  'Treinamento',
  'Importação inicial de dados',
]

const whiteLabelIncludes = [
  'Logo da empresa',
  'Nome da empresa',
  'Cores',
  'Favicon',
  'Tela de login personalizada',
  'Identidade visual básica',
]

export default function Pricing() {
  return (
    <section id="planos" className="bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o plano ideal para sua operação."
          description="Planos definidos pelo tamanho da sua equipe e da sua operação."
        />

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-2 xl:mt-20 xl:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              pricePrefix={plan.pricePrefix}
              users={plan.users}
              description={plan.description}
              badge={plan.badge}
              highlighted={plan.highlighted}
              ctaHref={plan.ctaHref}
            />
          ))}
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">Implantação</h3>
              <p className="text-2xl font-bold text-white">R$ 1.500</p>
            </div>
            <div className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/[0.07] p-4">
              <p className="text-sm font-semibold text-amber-300">
                Condição especial de lançamento
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Implantação gratuita para os primeiros clientes selecionados.
              </p>
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Inclui
            </p>
            <ul className="mt-4 space-y-2.5">
              {implementationIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <CircleCheck className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">White-label</h3>
              <p className="text-right">
                <span className="block text-2xl font-bold text-white">R$ 2.500</span>
                <span className="text-xs text-slate-500">Taxa única</span>
              </p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Personalize a plataforma com a identidade da sua empresa e ofereça uma experiência
              própria para o seu time.
            </p>
            <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Inclui
            </p>
            <ul className="mt-4 space-y-2.5">
              {whiteLabelIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <CircleCheck className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-dashed border-white/10 pt-5 text-sm text-slate-400">
              Opcional:{' '}
              <span className="font-medium text-slate-200">Manutenção White-label</span> — R$ 199/mês
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
