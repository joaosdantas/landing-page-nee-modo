import Section from '../components/Section';
import { LOGO_WHITE, WHATSAPP_URL, LANDING_URL } from '../lib/constants';
import { METRICS } from '../data/content';

export default function Hero() {
  return (
    <Section id="visao-geral">
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
          Uma solução Nexabee
        </div>

        <img
          src={LOGO_WHITE}
          alt="Nee MODO"
          className="mx-auto mb-8 h-12 sm:h-16 md:h-20"
        />

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
          Tenha o controle de toda a sua{' '}
          <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
            operação imobiliária
          </span>
          .
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
          Centralize clientes, financiamentos, documentos e aprovações em uma
          única plataforma.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={LANDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-13 w-full items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_var(--primary)] sm:w-auto"
          >
            Conhecer a plataforma
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-13 w-full items-center justify-center rounded-full border border-border/60 bg-card/40 px-8 text-base font-medium text-foreground backdrop-blur transition-all hover:bg-card/70 sm:w-auto"
          >
            Falar com especialista
          </a>
        </div>

        {/* Dashboard preview */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:rounded-3xl">
          <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/50 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-danger/60" />
              <div className="h-3 w-3 rounded-full bg-warning/60" />
              <div className="h-3 w-3 rounded-full bg-success/60" />
            </div>
            <span className="ml-2 text-xs text-muted-foreground">
              app.neemodo.com.br
            </span>
          </div>
          <div className="grid grid-cols-4 gap-3 p-4 sm:p-6">
            {[
              { label: 'Processos', value: '47', color: 'text-primary' },
              { label: 'Pendentes', value: '18', color: 'text-warning' },
              { label: 'Aprovados', value: '23', color: 'text-success' },
              { label: 'Concluídos', value: '156', color: 'text-foreground' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/40 bg-card/40 p-3 text-center sm:p-4"
              >
                <p className={`text-2xl font-bold ${stat.color} sm:text-3xl`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-border/60 pt-8">
          {METRICS.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
