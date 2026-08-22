import { useState } from 'react'
import FAQItem from '../components/FAQItem'
import SectionHeading from '../components/SectionHeading'

const faqs = [
  {
    question: 'O Nee MODO é um CRM?',
    answer:
      'O Nee MODO vai além de um CRM: é uma plataforma de gestão para operações imobiliárias, que centraliza clientes, financiamentos, documentos e aprovações em um fluxo estruturado, com visão completa para o gestor.',
  },
  {
    question: 'Quem pode usar o Nee MODO?',
    answer:
      'Gestores de corretoras, assessorias, correspondentes, construtoras e operações imobiliárias que precisam organizar e acompanhar seus processos em um único ambiente.',
  },
  {
    question: 'Quantos usuários posso cadastrar?',
    answer:
      'Depende do plano: o Essencial inclui até 5 usuários, o Profissional até 15, o Gestão até 30 e o Enterprise atende operações com 30 ou mais usuários.',
  },
  {
    question: 'Posso usar a identidade da minha empresa?',
    answer:
      'Sim. Com o White-label, a plataforma recebe o logo, o nome e as cores da sua empresa, além de tela de login personalizada e identidade visual básica.',
  },
  {
    question: 'O que está incluso na implantação?',
    answer:
      'A implantação inclui configuração inicial, cadastro de usuários, empreendimentos, permissões, treinamento e importação inicial de dados. Atualmente há uma condição especial de lançamento: implantação gratuita para os primeiros clientes selecionados.',
  },
  {
    question: 'Posso mudar de plano?',
    answer:
      'Para entender as opções disponíveis para a sua operação, fale com um especialista pelo nosso canal de contato.',
  },
  {
    question: 'Como funciona o White-label?',
    answer:
      'O White-label é uma taxa única de R$ 2.500 que personaliza a plataforma com a identidade da sua empresa. Existe também a opção de Manutenção White-label por R$ 199/mês.',
  },
  {
    question: 'Existe período de teste?',
    answer:
      'Para conhecer as condições de teste disponíveis, fale com um especialista pelo nosso canal de contato.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="border-y border-white/5 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
