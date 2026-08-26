import { Check, X } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/content';

export default function ComparisonTable() {
  return (
    <>
      {/* Mobile: cards */}
      <div className="grid gap-4 md:hidden">
        {COMPARISON_ROWS.map((row) => (
          <div
            key={row.feature}
            className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-foreground">
              {row.feature}
            </span>
            <div className="flex items-center gap-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-danger/10">
                <X className="h-4 w-4 text-danger" />
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-success/10">
                <Check className="h-4 w-4 text-success" />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-2 flex justify-center gap-4 text-xs text-muted-foreground">
          <span>Ferramentas isoladas</span>
          <span className="text-primary">Nee MODO</span>
        </div>
      </div>

      {/* Desktop: table */}
      <div className="hidden md:block">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/60">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Recurso
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Ferramentas isoladas
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-primary">
                  Nee MODO
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-border/30 transition-colors hover:bg-muted/30 last:border-0"
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-danger/10">
                      <X className="h-4 w-4 text-danger" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-success/10">
                      <Check className="h-4 w-4 text-success" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
