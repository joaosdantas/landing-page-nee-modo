export const CONTACTS = {
  whatsappNumber: '5511958128056',
  whatsappDisplay: '(11) 95812-8056',
  email: 'comercial@nexabee.com.br',
} as const

export const EMAIL_SUBJECT = 'Interesse no Nee MODO'

const WHATSAPP_BASE_URL = `https://wa.me/${CONTACTS.whatsappNumber}`

export function whatsappUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(): string {
  return `mailto:${CONTACTS.email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`
}

export const WHATSAPP_MESSAGES = {
  hero: 'Olá! Vim pelo site do Nee MODO e gostaria de conhecer a plataforma.',
  navbar:
    'Olá! Vim pelo site do Nee MODO e gostaria de falar com um especialista sobre a plataforma.',
  features:
    'Olá! Conheci o Nee MODO pelo site e gostaria de entender como ele pode ajudar na gestão da minha operação.',
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
    'Olá! Vim pelo site do Nee MODO e gostaria de conversar sobre a plataforma para minha operação.',
} as const

export const site = {
  name: 'Nee MODO',
  company: 'Nexabee',
  signature: 'Uma solução Nexabee',
  description: 'Uma solução Nexabee para gestão de operações imobiliárias.',
} as const
