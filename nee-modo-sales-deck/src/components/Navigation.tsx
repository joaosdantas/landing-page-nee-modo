import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Menu, X } from 'lucide-react';
import { NAV_ITEMS, LOGO_WHITE, WHATSAPP_URL } from '../lib/constants';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

export default function Navigation({
  currentSection,
  totalSections,
  onNavigate,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-40 w-full px-4 pt-4 sm:px-6 md:px-10 md:pt-6">
        <div className="pointer-events-none flex items-center justify-between">
          <a
            href="#visao-geral"
            className="pointer-events-auto transition-opacity hover:opacity-80"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(0);
            }}
          >
            <img
              src={LOGO_WHITE}
              alt="Nee MODO"
              className="h-7 sm:h-8 md:h-9"
            />
          </a>

          <div className="pointer-events-auto hidden items-center gap-6 md:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_var(--primary)]"
            >
              Falar com especialista
            </a>
          </div>

          <button
            className="pointer-events-auto rounded-lg border border-border bg-card/60 p-2 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Desktop dot navigation */}
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.index)}
            className="group flex items-center gap-3"
            aria-label={item.label}
          >
            <span className="text-xs font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSection === item.index
                  ? 'w-8 bg-primary shadow-[0_0_16px_-2px_var(--primary)]'
                  : 'w-2 bg-border hover:bg-muted-foreground'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Desktop up/down arrows */}
      <div className="fixed bottom-8 right-6 z-40 hidden flex-col gap-2 md:flex">
        <button
          onClick={() => onNavigate(Math.max(0, currentSection - 1))}
          disabled={currentSection === 0}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-card/60 backdrop-blur transition-all hover:bg-card disabled:opacity-30 disabled:hover:bg-card"
          aria-label="Anterior"
        >
          <ChevronUp className="h-4 w-4 text-foreground" />
        </button>
        <button
          onClick={() =>
            onNavigate(Math.min(totalSections - 1, currentSection + 1))
          }
          disabled={currentSection === totalSections - 1}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-card/60 backdrop-blur transition-all hover:bg-card disabled:opacity-30 disabled:hover:bg-card"
          aria-label="Próximo"
        >
          <ChevronDown className="h-4 w-4 text-foreground" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between px-4 pt-4">
            <img
              src={LOGO_WHITE}
              alt="Nee MODO"
              className="h-7"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-lg border border-border bg-card/60 p-2"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.index);
                  setMobileOpen(false);
                }}
                className={`text-lg font-medium transition-colors ${
                  currentSection === item.index
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)]"
            >
              Falar com especialista
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
