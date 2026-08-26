import { MessageCircle, Mail } from 'lucide-react';
import { WHATSAPP_URL, EMAIL_URL } from '../lib/constants';

interface CTAProps {
  title: string;
  subtitle?: string;
}

export default function CTA({ title, subtitle }: CTAProps) {
  return (
    <div className="mt-12 md:mt-16">
      <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/10 p-8 shadow-[0_40px_120px_-30px_var(--primary)] sm:rounded-[2.5rem] sm:p-12">
        <h3 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-13 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[0_10px_40px_-10px_var(--primary)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-10px_var(--primary)]"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com especialista
          </a>
          <a
            href={EMAIL_URL}
            className="flex h-13 items-center justify-center gap-2 rounded-full border border-border/60 bg-card/40 px-8 text-base font-medium text-foreground backdrop-blur transition-all hover:bg-card/70"
          >
            <Mail className="h-5 w-5" />
            Enviar e-mail
          </a>
        </div>
      </div>
    </div>
  );
}
