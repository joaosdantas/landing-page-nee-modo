import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-amber-400 text-ink-900 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20',
  outline: 'border border-white/15 text-white hover:border-white/40 hover:bg-white/5',
  ghost: 'text-slate-300 hover:bg-white/5 hover:text-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

type ButtonProps = {
  variant?: Variant
  size?: Size
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  className,
  children,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    const isExternal = /^https?:\/\//i.test(href)
    return (
      <a
        href={href}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
