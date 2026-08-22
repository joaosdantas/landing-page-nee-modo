import Logo from '../components/Logo'
import { site } from '../lib/site'

const links = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'White-label', href: '#white-label' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
          </div>
          <nav aria-label="Rodapé" className="flex flex-wrap items-start gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Nexabee. Todos os direitos reservados.</p>
          <p>Nee MODO — Uma solução Nexabee.</p>
        </div>
      </div>
    </footer>
  )
}
