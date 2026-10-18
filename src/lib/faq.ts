export type FaqItem = {
  question: string
  answer: string
}

/** Single source of truth for FAQ UI + JSON-LD */
export const faqs: FaqItem[] = [
  {
    question: 'O Nee MODO é um CRM?',
    answer:
      'O Nee MODO vai além de um CRM genérico: é uma plataforma de gestão para correspondente bancário e assessoria de financiamento imobiliário. Centraliza clientes, documentos e aprovações na esteira corretor → CCA → construtora, com visão completa para o gestor.',
  },
  {
    question: 'Quem pode usar o Nee MODO?',
    answer:
      'Gestores e equipes de correspondentes (CCA), assessorias de crédito imobiliário, redes de corretores parceiros e construtoras que participam da validação de minuta — qualquer operação que hoje depende de planilha ou WhatsApp para acompanhar financiamentos.',
  },
  {
    question: 'Como o Nee MODO aumenta a renda da operação?',
    answer:
      'Ao tirar o time do Excel e de sistemas precários, a equipe conclui mais processos de financiamento no mesmo período, com menos retrabalho e mais previsibilidade. Mais throughput com segurança e agilidade costuma se traduzir em mais receita — e mais tempo para originar novos negócios.',
  },
  {
    question: 'O Nee MODO reduz trabalho braçal?',
    answer:
      'Sim, no sentido de organização: menos caça a documento, menos status perdido e menos redigitar a mesma pasta em planilha e WhatsApp. A esteira, as pendências e o histórico concentram o que a equipe já fazia à mão. Não substituímos o preenchimento automático de portais bancários — o ganho hoje é cortar retrabalho operacional e liberar tempo para fechar mais processos.',
  },
  {
    question: 'Quantos usuários posso cadastrar?',
    answer:
      'Depende do plano: o Essencial inclui até 5 usuários, o Profissional até 15, o Gestão até 30 e o Enterprise atende operações com 30 ou mais usuários.',
  },
  {
    question: 'Posso usar a identidade da minha empresa?',
    answer:
      'Sim. Com o White-label, a plataforma recebe o logo, o nome e as cores da sua empresa, além de tela de login personalizada e identidade visual básica — ideal para o correspondente apresentar a operação com a própria marca.',
  },
  {
    question: 'O que está incluso na implantação?',
    answer:
      'Configuração inicial, cadastro de usuários, empreendimentos, permissões, treinamento e importação inicial de dados. Na condição especial de lançamento, a implantação é gratuita para os primeiros clientes selecionados.',
  },
  {
    question: 'Como funciona o White-label?',
    answer:
      'O White-label é uma taxa única de R$ 2.500 que personaliza a plataforma com a identidade da sua empresa. Existe também a opção de Manutenção White-label por R$ 199/mês.',
  },
  {
    question: 'Como peço uma demonstração?',
    answer:
      'Fale conosco pelo WhatsApp no site. Em uma conversa rápida mostramos a esteira de financiamento, os papéis (corretor, correspondente, construtora) e como migrar da planilha para o Nee MODO.',
  },
]
