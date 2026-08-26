import { Check } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

interface PricingCardProps {
  name: string;
  price: string;
  subtitle: string;
  users: string;
  description: string;
  highlighted?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  subtitle,
  users,
  description,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
        highlighted
          ? 'border-primary/50 bg-gradient-to-b from-primary/10 via-card to-card shadow-[0_20px_80px_-20px_var(--primary)] ring-1 ring-primary/30'
          : 'border-border/60 bg-card/60 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm hover:border-border'
      }`}
    >
      {badge && (
        <div className="mb-4 inline-flex self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {badge}
        </div>
      )}

      <h3 className="text-lg font-semibold text-foreground">{name}</h3>

      <div className="mt-4 flex items-baseline gap-1">
        {subtitle === 'a partir de' && (
          <span className="text-sm text-muted-foreground">a partir de </span>
        )}
        <span
          className={`text-4xl font-bold ${
            highlighted
              ? 'bg-gradient-to-br from-primary to-yellow-300 bg-clip-text text-transparent'
              : 'text-foreground'
          }`}
        >
          R$ {price}
        </span>
        <span className="text-sm text-muted-foreground">
          /{subtitle === 'a partir de' ? 'mês' : 'mês'}
        </span>
      </div>

      <p className="mt-1 text-sm font-medium text-primary">{users}</p>

      <p className="mt-3 text-sm text-muted-foreground">{description}</p>

      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Check className="h-4 w-4 text-success" />
        <span>Suporte dedicado</span>
      </div>
      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <Check className="h-4 w-4 text-success" />
        <span>Todas as funcionalidades</span>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 flex h-12 items-center justify-center rounded-full text-sm font-medium transition-all ${
          highlighted
            ? 'bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] hover:bg-primary/90 hover:-translate-y-0.5'
            : 'border border-border/60 bg-card/40 text-foreground hover:bg-card/70'
        }`}
      >
        Falar com especialista
      </a>
    </div>
  );
}
