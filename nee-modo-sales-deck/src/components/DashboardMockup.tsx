import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  FileText,
  ChevronRight,
  Search,
  Bell,
  Menu,
} from 'lucide-react';
import { DEMO_TABS } from '../data/content';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:rounded-3xl">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border/60 bg-secondary/50 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-danger/60" />
            <div className="h-3 w-3 rounded-full bg-warning/60" />
            <div className="h-3 w-3 rounded-full bg-success/60" />
          </div>
          <span className="ml-2 text-xs text-muted-foreground sm:text-sm">
            app.neemodo.com.br
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Search className="hidden h-4 w-4 text-muted-foreground sm:block" />
          <Bell className="hidden h-4 w-4 text-muted-foreground sm:block" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-56 border-r border-border/60 bg-secondary/30 p-4 sm:block">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
              <span className="text-sm font-bold text-primary">N</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              Nee MODO
            </span>
          </div>
          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: activeTab === 'dashboard' },
              { icon: Users, label: 'Clientes', active: activeTab === 'clientes' },
              { icon: TrendingUp, label: 'Financiamentos', active: activeTab === 'financiamentos' },
              { icon: FileText, label: 'Documentos', active: false },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label.toLowerCase() === 'documentos' ? 'dashboard' : item.label.toLowerCase())}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  item.active
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Tabs */}
          <div className="mb-4 flex gap-2 overflow-x-auto sm:mb-6">
            {DEMO_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all sm:text-sm ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content based on tab */}
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'clientes' && <ClientsView />}
          {activeTab === 'financiamentos' && <FinancingView />}
          {activeTab === 'processo' && <ProcessView />}
        </div>
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {[
          { label: 'Processos ativos', value: '47', change: '+12%' },
          { label: 'Pendentes', value: '18', change: '' },
          { label: 'Aprovados', value: '23', change: '' },
          { label: 'Concluídos', value: '156', change: '' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border/60 bg-card/60 p-3 sm:p-4"
          >
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
              {stat.value}
            </p>
            {stat.change && (
              <p className="mt-1 text-xs text-success">{stat.change}</p>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border/60 bg-card/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">
            Processos recentes
          </h4>
          <button className="text-xs text-primary">Ver todos</button>
        </div>
        <div className="space-y-2">
          {[
            { name: 'João Silva', status: 'Análise', color: 'warning' },
            { name: 'Maria Santos', status: 'Aprovado', color: 'success' },
            { name: 'Pedro Costa', status: 'Documentação', color: 'primary' },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg border border-border/30 px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <span className="text-xs font-medium text-foreground">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-foreground">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    item.color === 'success'
                      ? 'bg-success/10 text-success'
                      : item.color === 'warning'
                      ? 'bg-warning/10 text-warning'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {item.status}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientsView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">Clientes</h4>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-2">
            <Search className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Buscar...</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { name: 'João Silva', email: 'joao@email.com', status: 'Ativo' },
          { name: 'Maria Santos', email: 'maria@email.com', status: 'Ativo' },
          { name: 'Pedro Costa', email: 'pedro@email.com', status: 'Pendente' },
          { name: 'Ana Oliveira', email: 'ana@email.com', status: 'Ativo' },
          { name: 'Lucas Ferreira', email: 'lucas@email.com', status: 'Ativo' },
        ].map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-between rounded-xl border border-border/60 bg-card/60 p-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-medium text-primary">
                  {client.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {client.name}
                </p>
                <p className="text-xs text-muted-foreground">{client.email}</p>
              </div>
            </div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                client.status === 'Ativo'
                  ? 'bg-success/10 text-success'
                  : 'bg-warning/10 text-warning'
              }`}
            >
              {client.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinancingView() {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-foreground">Financiamentos</h4>
      <div className="space-y-2">
        {[
          {
            client: 'João Silva',
            value: 'R$ 450.000',
            status: 'Em análise',
            bank: 'Banco do Brasil',
          },
          {
            client: 'Maria Santos',
            value: 'R$ 320.000',
            status: 'Aprovado',
            bank: 'Caixa Econômica',
          },
          {
            client: 'Pedro Costa',
            value: 'R$ 580.000',
            status: 'Pendente doc.',
            bank: 'Itaú',
          },
        ].map((item) => (
          <div
            key={item.client}
            className="rounded-xl border border-border/60 bg-card/60 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {item.client}
                </p>
                <p className="text-xs text-muted-foreground">{item.bank}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{item.value}</p>
                <span
                  className={`text-xs ${
                    item.status === 'Aprovado'
                      ? 'text-success'
                      : item.status === 'Em análise'
                      ? 'text-warning'
                      : 'text-primary'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessView() {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-foreground">
        Fluxo do processo
      </h4>
      <div className="flex flex-col gap-2">
        {[
          { step: 'Cliente', status: 'Concluído', color: 'success' },
          { step: 'Financiamento', status: 'Concluído', color: 'success' },
          { step: 'Documentação', status: 'Em andamento', color: 'primary' },
          { step: 'Análise', status: 'Pendente', color: 'muted' },
          { step: 'Validação', status: 'Pendente', color: 'muted' },
          { step: 'Repasse', status: 'Pendente', color: 'muted' },
          { step: 'Registro', status: 'Pendente', color: 'muted' },
        ].map((item, i) => (
          <div key={item.step} className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                item.color === 'success'
                  ? 'bg-success/20 text-success'
                  : item.color === 'primary'
                  ? 'bg-primary/20 text-primary'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {i + 1}
            </div>
            <div className="flex flex-1 items-center justify-between rounded-lg border border-border/40 bg-card/40 px-3 py-2">
              <span className="text-sm text-foreground">{item.step}</span>
              <span
                className={`text-xs ${
                  item.color === 'success'
                    ? 'text-success'
                    : item.color === 'primary'
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
