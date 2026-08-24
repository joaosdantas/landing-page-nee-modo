import Logo from '../components/Logo'
import { site, CONTACTS, mailtoUrl, whatsappUrl, WHATSAPP_MESSAGES } from '../lib/site'

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
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Rodapé" className="grid grid-cols-2 items-start gap-x-8 gap-y-3 sm:flex sm:flex-col">
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

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Fale com a gente
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="block text-slate-500">WhatsApp</span>
                  <a
                    href={whatsappUrl(WHATSAPP_MESSAGES.final_cta)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex min-h-[24px] items-center text-slate-200 transition-colors hover:text-white"
                  >
                    {CONTACTS.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <span className="block text-slate-500">E-mail</span>
                  <a
                    href={mailtoUrl()}
                    className="mt-0.5 inline-flex min-h-[24px] items-center text-slate-200 transition-colors hover:text-white"
                  >
                    {CONTACTS.email}
                  </a>
                </li>
                <li>
                  <a
                    href={mailtoUrl()}
                    className="inline-flex min-h-[32px] items-center font-medium text-amber-400 transition-colors hover:text-amber-300"
                  >
                    Enviar e-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Nexabee. Todos os direitos reservados.</p>
          <p>Nee MODO — Uma solução Nexabee.</p>
        </div>
      </div>
    </footer>
  )
}
