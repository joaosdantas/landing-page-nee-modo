import { Users } from 'lucide-react'
import Button from './Button'
import { cn } from '../lib/utils'

type PricingCardProps = {
  name: string
  price: string
  pricePrefix?: string
  period?: string
  users: string
  description: string
  badge?: string
  highlighted?: boolean
  ctaHref: string
  ctaLabel?: string
}

export default function PricingCard({
  name,
  price,
  pricePrefix,
  period = '/mês',
  users,
  description,
  badge,
  highlighted = false,
  ctaHref,
  ctaLabel = 'Falar com especialista',
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-2xl p-8 transition-colors duration-300',
        highlighted
          ? 'border border-amber-400/50 bg-ink-700 shadow-2xl shadow-black/40 xl:-my-4 xl:py-12'
          : 'border border-white/10 bg-white/[0.02] hover:border-white/20',
      )}
    >
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-900">
          {badge}
        </span>
      )}
      <h3
        className={cn(
          'text-sm font-semibold uppercase tracking-wider',
          highlighted ? 'text-amber-300' : 'text-slate-300',
        )}
      >
        {name}
      </h3>
      <div className="mt-5 flex items-baseline gap-1.5">
        {pricePrefix && (
          <span className="text-sm text-slate-400">{pricePrefix}</span>
        )}
        <span className="text-4xl font-bold tracking-tight text-white">{price}</span>
        <span className="text-sm text-slate-400">{period}</span>
      </div>
      <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300">
        <Users className="h-4 w-4 text-amber-400" aria-hidden="true" />
        {users}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{description}</p>
      <div className="flex-1" />
      <Button href={ctaHref} variant={highlighted ? 'primary' : 'outline'} className="mt-8 w-full">
        {ctaLabel}
      </Button>
    </div>
  )
}
