import type { LucideIcon } from 'lucide-react';

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProblemCard({
  icon: Icon,
  title,
  description,
}: ProblemCardProps) {
  return (
    <div className="group rounded-3xl border border-border/60 bg-card/60 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-danger/40">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-danger/10">
        <Icon className="h-6 w-6 text-danger" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
