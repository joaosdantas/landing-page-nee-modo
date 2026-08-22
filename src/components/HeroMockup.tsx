import {
  Bell,
  Building2,
  ClipboardCheck,
  Files,
  Landmark,
  LayoutDashboard,
  Users,
} from 'lucide-react'
import BrandMark from './BrandMark'
import { cn } from '../lib/utils'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Clientes', active: false },
  { icon: Landmark, label: 'Financiamentos', active: false },
  { icon: Files, label: 'Documentos', active: false },
  { icon: Building2, label: 'Empreendimentos', active: false },
  { icon: ClipboardCheck, label: 'Aprovações', active: false },
]

const kpis = [
  { label: 'Operações ativas', value: '47', width: 'w-[72%]' },
  { label: 'Em análise', value: '12', width: 'w-[42%]' },
  { label: 'Documentos pendentes', value: '23', width: 'w-[58%]' },
  { label: 'Repasses no mês', value: '9', width: 'w-[26%]' },
]

const statusTones: Record<string, string> = {
  'Em análise': 'bg-amber-400/10 text-amber-300',
  Documentação: 'bg-sky-400/10 text-sky-300',
  Validação: 'bg-violet-400/10 text-violet-300',
  Repasse: 'bg-emerald-400/10 text-emerald-300',
  Registro: 'bg-slate-400/10 text-slate-300',
}

const processes = [
  { client: 'Marcos Tavares', operation: 'Financiamento', status: 'Em análise', owner: 'Carlos M.' },
  { client: 'Juliana Prado', operation: 'Financiamento', status: 'Documentação', owner: 'Paula R.' },
  { client: 'Helena Castro', operation: 'Financiamento', status: 'Validação', owner: 'Carlos M.' },
  { client: 'Roberto Lima', operation: 'Repasse', status: 'Repasse', owner: 'Diego A.' },
  { client: 'Aurora Residencial', operation: 'Empreendimento', status: 'Registro', owner: 'Marina L.' },
]

export default function HeroMockup() {
  return (
    <div
      role="img"
      aria-label="Interface ilustrativa do painel do Nee MODO com métricas e processos da operação"
      className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800 text-left shadow-2xl shadow-black/60 ring-1 ring-white/5"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-700/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 hidden max-w-xs flex-1 truncate rounded-md bg-white/[0.06] px-3 py-1 text-[11px] text-slate-400 sm:block">
          app.neemodo.com
        </span>
        <span className="ml-auto">
          <Bell className="h-4 w-4 text-slate-500" aria-hidden="true" />
        </span>
      </div>

      <div className="grid md:grid-cols-[13rem_1fr]">
        <aside className="hidden flex-col border-r border-white/10 p-4 md:flex">
          <div className="mb-4 flex items-center gap-2 px-2">
            <BrandMark className="h-6 w-6" />
            <span className="text-xs font-semibold text-white">Nee MODO</span>
          </div>
          <nav className="mt-2 flex flex-col gap-1" aria-hidden="true">
            {navItems.map((item) => (
              <span
                key={item.label}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium',
                  item.active ? 'bg-amber-400/10 text-amber-300' : 'text-slate-400',
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </span>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-700 text-[10px] font-semibold text-slate-200">GT</span>
            <span>
              <span className="block text-[11px] font-medium text-slate-200">Time de gestão</span>
              <span className="block text-[10px] text-slate-500">Administrador</span>
            </span>
          </div>
        </aside>

        <div className="space-y-5 p-4 sm:p-6" aria-hidden="true">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-white">Dashboard gerencial</p>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">
              Últimos 30 dias
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] text-slate-400">{kpi.label}</p>
                <p className="mt-1 text-2xl font-semibold text-white">{kpi.value}</p>
                <div className="mt-3 h-1 rounded-full bg-white/10">
                  <div className={cn('h-full rounded-full bg-amber-400', kpi.width)} />
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
            <div className="hidden grid-cols-[1.3fr_0.9fr_0.9fr_0.8fr] gap-3 border-b border-white/10 px-4 py-2.5 text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:grid">
              <span>Cliente</span>
              <span>Operação</span>
              <span>Etapa</span>
              <span>Responsável</span>
            </div>
            {processes.map((process) => (
              <div
                key={process.client}
                className="grid grid-cols-[1.2fr_1fr] items-center gap-3 border-b border-white/5 px-4 py-3 last:border-0 sm:grid-cols-[1.3fr_0.9fr_0.9fr_0.8fr]"
              >
                <span className="truncate text-xs font-medium text-white">{process.client}</span>
                <span className="text-xs text-slate-400">{process.operation}</span>
                <span className={cn('inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-medium', statusTones[process.status])}>
                  {process.status}
                </span>
                <span className="hidden text-xs text-slate-400 sm:block">{process.owner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
