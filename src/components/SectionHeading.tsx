import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}
