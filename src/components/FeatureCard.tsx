import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group h-full border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.03]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-amber-400 transition-colors duration-300 group-hover:border-amber-400/40 group-hover:text-amber-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  )
}
