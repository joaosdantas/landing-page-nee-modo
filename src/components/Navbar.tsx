import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import Logo from './Logo'
import { cn } from '../lib/utils'
import { CONTACT_URL } from '../lib/site'

const links = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-ink-900/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button href={CONTACT_URL} size="sm">
            Falar com especialista
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="rounded-lg p-2 text-slate-200 hover:bg-white/5 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-ink-900/95 px-4 pb-6 pt-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button href={CONTACT_URL} className="mt-3 w-full">
              Falar com especialista
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
