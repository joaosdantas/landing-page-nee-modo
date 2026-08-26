import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import { ArrowDown, Palette, Type, Monitor, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

export default function WhiteLabel() {
  return (
    <Section id="white-label">
      <SectionHeader
        label="White-label"
        title="A plataforma é sua. A tecnologia é nossa."
        subtitle="Personalize o Nee MODO para que sua equipe e seus clientes tenham uma experiência alinhada à sua marca."
      />
      <div className="mt-12 md:mt-16">
        {/* Visual flow */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card/60 px-6 py-4 backdrop-blur-sm">
              <span className="text-sm font-semibold text-foreground">
                Nee MODO
              </span>
              <span className="text-xs text-muted-foreground">
                Plataforma
              </span>
            </div>
            <ArrowDown className="h-6 w-6 rotate-[-90deg] text-primary sm:rotate-0" />
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-4">
              <span className="text-sm font-semibold text-primary">
                Sua empresa
              </span>
              <span className="text-xs text-muted-foreground">Identidade</span>
            </div>
          </div>

          <div className="mt-4 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Sparkles, label: 'Logo' },
              { icon: Type, label: 'Nome' },
              { icon: Palette, label: 'Cores' },
              { icon: Monitor, label: 'Tela de login' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40"
              >
                <item.icon className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
          <blockquote className="text-lg font-medium text-foreground sm:text-xl">
            &ldquo;Personalize o Nee MODO para que sua equipe e seus clientes
            tenham uma experiência alinhada à sua marca.&rdquo;
          </blockquote>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-13 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_var(--primary)]"
          >
            Conhecer White-label
          </a>
        </div>
      </div>
    </Section>
  );
}
