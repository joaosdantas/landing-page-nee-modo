import { LOGO_WHITE, LANDING_URL } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-8 sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO_WHITE} alt="Nee MODO" className="h-6" />
          <span className="text-sm text-muted-foreground">
            Uma solução Nexabee
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href={LANDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Plataforma
          </a>
          <a
            href="https://www.nexabee.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Nexabee
          </a>
        </div>
      </div>
    </footer>
  );
}
