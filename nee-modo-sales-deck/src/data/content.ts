import {
  FileSpreadsheet,
  MessageCircle,
  Mail,
  FolderOpen,
  EyeOff,
  ClipboardList,
  BarChart3,
  Users,
  FileText,
  CheckCircle2,
  LayoutDashboard,
  History,
  Shield,
  TrendingUp,
  TrendingDown,
  Building2,
  UserCheck,
  FileSearch,
  GitBranch,
  Handshake,
  Target,
  Lightbulb,
  Rocket,
  HeartHandshake,
  Headphones,
} from 'lucide-react';

export const PROBLEMS = [
  {
    icon: FileSpreadsheet,
    title: 'Planilhas desatualizadas',
    description: 'Informações que não refletem a realidade da operação.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp como ferramenta',
    description: 'Conversas importantes se perdem entre mensagens.',
  },
  {
    icon: Mail,
    title: 'E-mails desorganizados',
    description: 'Documentos e aprovações ficam perdidos em caixas de entrada.',
  },
  {
    icon: FolderOpen,
    title: 'Documentos espalhados',
    description: 'Pastas compartilhadas, drives pessoais, sem padronização.',
  },
  {
    icon: EyeOff,
    title: 'Sem visibilidade',
    description: 'O gestor não sabe onde cada processo está sem perguntar.',
  },
  {
    icon: ClipboardList,
    title: 'Acompanhamento manual',
    description: 'Equipe gasta tempo repetindo o que já foi feito.',
  },
];

export const BEFORE_ITEMS = [
  'Planilhas',
  'WhatsApp',
  'E-mails',
  'Pastas',
  'Processos paralelos',
];

export const AFTER_ITEMS = [
  'Cliente',
  'Financiamento',
  'Documentos',
  'Aprovação',
  'Repasse',
  'Registro',
];

export const WORKFLOW_STEPS = [
  { number: '01', title: 'Cliente', description: 'Cadastro e acompanhamento' },
  { number: '02', title: 'Financiamento', description: 'Análise e etapas financeiras' },
  { number: '03', title: 'Documentação', description: 'Organização por processo' },
  { number: '04', title: 'Análise', description: 'Revisão e validação interna' },
  { number: '05', title: 'Validação', description: 'Aprovação final do processo' },
  { number: '06', title: 'Repasse', description: 'Transferência e fechamento' },
  { number: '07', title: 'Registro', description: 'Formalização e arquivamento' },
];

export const FEATURES = [
  {
    icon: Users,
    title: 'Gestão de clientes',
    description: 'Centralização das informações e acompanhamento.',
  },
  {
    icon: TrendingUp,
    title: 'Financiamentos',
    description: 'Valores, etapas, informações financeiras e status.',
  },
  {
    icon: FileText,
    title: 'Documentos',
    description: 'Documentação organizada, sigilosa e armazenada em cold storage auditável por 5 anos.',
  },
  {
    icon: CheckCircle2,
    title: 'Fluxo de aprovações',
    description: 'Acompanhamento das etapas e responsáveis.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    description: 'Visão geral da operação em tempo real.',
  },
  {
    icon: History,
    title: 'Histórico',
    description: 'Rastreabilidade das decisões e andamento.',
  },
  {
    icon: Shield,
    title: 'Usuários e permissões',
    description: 'Controle de acesso conforme o papel da equipe.',
  },
];

export const COMPARISON_ROWS = [
  {
    feature: 'Informações centralizadas',
    other: false,
    neeModo: true,
  },
  {
    feature: 'Visibilidade do gestor',
    other: false,
    neeModo: true,
  },
  {
    feature: 'Workflow com responsáveis',
    other: false,
    neeModo: true,
  },
  {
    feature: 'Histórico de ações',
    other: false,
    neeModo: true,
  },
  {
    feature: 'Documentos organizados',
    other: false,
    neeModo: true,
  },
  {
    feature: 'Guarda de documentos (5 anos)',
    other: false,
    neeModo: true,
  },
  {
    feature: 'Controle de permissões',
    other: false,
    neeModo: true,
  },
  {
    feature: 'Dashboards de gestão',
    other: false,
    neeModo: true,
  },
  {
    feature: 'White-label',
    other: false,
    neeModo: true,
  },
];

export const PRICING_PLANS = [
  {
    name: 'Essencial',
    price: '699',
    subtitle: 'por mês',
    users: 'Até 5 usuários',
    description: 'Para operações pequenas.',
    highlighted: false,
  },
  {
    name: 'Profissional',
    price: '1.199',
    subtitle: 'por mês',
    users: 'Até 15 usuários',
    description: 'O mais escolhido.',
    highlighted: true,
    badge: 'MAIS ESCOLHIDO',
  },
  {
    name: 'Gestão',
    price: '1.999',
    subtitle: 'por mês',
    users: 'Até 30 usuários',
    description: 'Para equipes em crescimento.',
    highlighted: false,
  },
  {
    name: 'Enterprise',
    price: '3.499',
    subtitle: 'a partir de',
    users: '30+ usuários',
    description: 'Para operações maiores e necessidades personalizadas.',
    highlighted: false,
  },
];

export const INVESTMENT_ITEMS = [
  {
    title: 'Implantação',
    price: '1.500',
    type: 'taxa única',
    special: false,
  },
  {
    title: 'White-label',
    price: '2.500',
    type: 'taxa única',
    special: false,
  },
  {
    title: 'Manutenção White-label',
    price: '199',
    type: '/mês',
    special: false,
  },
];

export const WHY_PILLARS = [
  {
    title: 'CONTROLE',
    description: 'Tenha visão do que está acontecendo.',
    icon: Target,
    color: 'text-primary',
  },
  {
    title: 'VISIBILIDADE',
    description: 'Saiba onde cada processo está.',
    icon: EyeOff,
    color: 'text-primary',
  },
  {
    title: 'ORGANIZAÇÃO',
    description: 'Centralize informações e documentos.',
    icon: FolderOpen,
    color: 'text-primary',
  },
  {
    title: 'GESTÃO',
    description: 'Acompanhe equipe, etapas e gargalos.',
    icon: BarChart3,
    color: 'text-primary',
  },
];

export const COMMERCIAL_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Entendemos como sua operação funciona hoje.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Demonstração',
    description: 'Mostramos o Nee MODO aplicado à sua realidade.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Configuração',
    description: 'Preparamos a operação e os usuários.',
    icon: Handshake,
  },
  {
    number: '04',
    title: 'Implantação',
    description: 'Colocamos a equipe para operar.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Acompanhamento',
    description: 'Apoiamos a evolução da operação.',
    icon: HeartHandshake,
  },
];

import { Search } from 'lucide-react';

export const FAQ_ITEMS = [
  {
    question: 'O Nee MODO é um CRM?',
    answer:
      'Não. O Nee MODO é uma plataforma de gestão para operações imobiliárias. Ele vai além de um CRM, organizando todo o fluxo operacional: clientes, financiamentos, documentos, aprovações e repasses.',
  },
  {
    question: 'Para quem é o Nee MODO?',
    answer:
      'Para gestores de corretoras, assessorias, correspondentes e construtoras que precisam de visibilidade e controle sobre suas operações.',
  },
  {
    question: 'Quantos usuários posso ter?',
    answer:
      'Depende do plano. O Essencial vai até 5, o Profissional até 15, o Gestão até 30 e o Enterprise suporta mais de 30.',
  },
  {
    question: 'Existe White-label?',
    answer:
      'Sim. É possível personalizar com sua marca: logo, cores, nome e tela de login.',
  },
  {
    question: 'Como funciona a implantação?',
    answer:
      'Após a contratação, realizamos um diagnóstico, configuramos a plataforma, treinamos a equipe e acompanhamos o início da operação.',
  },
  {
    question: 'Posso mudar de plano depois?',
    answer:
      'Sim. Entre em contato com o time comercial para ajustar o plano conforme sua operação cresce.',
  },
  {
    question: 'Existe customização?',
    answer:
      'O plano Enterprise permite personalizações conforme as necessidades da operação.',
  },
  {
    question: 'Como funciona a guarda de documentos?',
    answer:
      'Mantemos os documentos em arquivo, sigilosos conforme exige o órgão regulador. Todo o acervo é preservado por 5 anos em cold storage seguro e auditável, garantindo compliance e rastreabilidade completa.',
  },
];

export const METRICS = [
  { value: '7', label: 'etapas de processo' },
  { value: '100%', label: 'visibilidade' },
  { value: '1', label: 'plataforma' },
];

export const DEMO_TABS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'financiamentos', label: 'Financiamentos' },
  { id: 'processo', label: 'Processo' },
];
