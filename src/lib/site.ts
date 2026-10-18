export const CONTACTS = {
  whatsappNumber: '5511958128056',
  whatsappDisplay: '(11) 95812-8056',
  email: 'comercial@nexabee.com.br',
  linkedin: 'https://www.linkedin.com/company/nexabee/',
} as const

export const EMAIL_SUBJECT = 'Interesse no Nee MODO — correspondente / assessoria'

const WHATSAPP_BASE_URL = `https://wa.me/${CONTACTS.whatsappNumber}`

export function whatsappUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(): string {
  return `mailto:${CONTACTS.email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`
}

export const WHATSAPP_MESSAGES = {
  hero: 'Olá! Vim pelo site do Nee MODO e quero uma demonstração da plataforma para correspondente / assessoria de financiamento imobiliário.',
  navbar:
    'Olá! Vim pelo site do Nee MODO e gostaria de falar com um especialista sobre a plataforma.',
  demo: 'Olá! Quero agendar uma demo do Nee MODO no WhatsApp — somos correspondente/assessoria e hoje usamos planilha/WhatsApp.',
  features:
    'Olá! Conheci o Nee MODO pelo site e gostaria de entender como aumentar o volume de processos de financiamento com mais controle.',
  whitelabel:
    'Olá! Vim pelo site do Nee MODO e gostaria de conhecer a solução White-label para minha empresa.',
  pricing: {
    essencial:
      'Olá! Vim pelo site do Nee MODO e gostaria de conhecer o plano Essencial.',
    profissional:
      'Olá! Vim pelo site do Nee MODO e gostaria de conhecer o plano Profissional.',
    gestao:
      'Olá! Vim pelo site do Nee MODO e gostaria de conhecer o plano Gestão.',
    enterprise:
      'Olá! Vim pelo site do Nee MODO e gostaria de conversar sobre uma solução Enterprise.',
  },
  implementation:
    'Olá! Gostaria de saber mais sobre a implantação do Nee MODO e a condição especial para novos clientes.',
  final_cta:
    'Olá! Vim pelo site do Nee MODO e quero conversar sobre tirar a operação de financiamento do Excel/WhatsApp.',
  testimonials:
    'Olá! Vi os depoimentos no site do Nee MODO e quero uma demo para nossa operação de correspondente.',
} as const

export const site = {
  name: 'Nee MODO',
  company: 'Nexabee',
  signature: 'Uma solução Nexabee',
  url: 'https://modo.nexabee.com.br',
  description:
    'Sistema para correspondente bancário e assessoria de crédito imobiliário: clientes, documentos, aprovações e esteira corretor–CCA–construtora em um só lugar.',
  tagline:
    'Mais processos de financiamento em menos tempo — sem planilha e sem WhatsApp como sistema.',
  pillarPath: '/sistema-correspondente-bancario/',
} as const
