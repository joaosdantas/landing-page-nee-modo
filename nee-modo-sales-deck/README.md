# Nee MODO - Apresentacao Comercial

Apresentacao comercial web interativa para o **Nee MODO**, plataforma de gestao para operacoes imobiliarias da Nexabee.

## Objetivo

Material de apoio para o time comercial apresentar o Nee MODO a potenciais clientes. Funciona como um sales deck navegavel, nao como um PDF tradicional.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Como rodar

```bash
cd nee-modo-sales-deck
npm install
npm run dev
```

## Como fazer build

```bash
npm run build
```

O build e gerado na pasta `dist/`.

## Estrutura de componentes

```
src/
  components/
    Navigation.tsx        # Navegacao superior + dot nav lateral
    Section.tsx           # Wrapper de secao com IntersectionObserver
    SectionHeader.tsx     # Cabecalho padrao (label + titulo + subtitulo)
    ProblemCard.tsx       # Card de problema/dor
    FeatureCard.tsx       # Card de funcionalidade
    PricingCard.tsx       # Card de plano
    ComparisonTable.tsx   # Tabela comparativa responsiva
    CTA.tsx               # Chamada para acao
    Footer.tsx            # Rodape
    DashboardMockup.tsx   # Mockup interativo do produto
    ProgressIndicator.tsx # Barra de progresso
  sections/
    Hero.tsx              # Capa / Abertura
    Problem.tsx           # O Problema
    Change.tsx            # A Mudanca (Antes/Depois)
    ForManager.tsx        # Para o Gestor
    HowItWorks.tsx        # Como Funciona (Pipeline)
    Features.tsx          # Funcionalidades
    Demo.tsx              # Demonstracao do Produto
    Differential.tsx      # Diferencial (Comparacao)
    WhiteLabel.tsx        # White-label
    Pricing.tsx           # Planos
    InitialInvestment.tsx # Investimento Inicial
    WhyNeeModo.tsx        # Por que Nee MODO
    CommercialProcess.tsx # Processo Comercial
    Faq.tsx               # Perguntas Frequentes
    FinalCTA.tsx          # CTA Final / Contato
  data/
    content.ts            # Todo o conteudo textual e dados
  lib/
    constants.ts          # URLs, logos, contatos, nav items
```

## Onde alterar contatos

Arquivo: `src/lib/constants.ts`

```typescript
export const CONTACT_WHATSAPP = '5511958128056';
export const CONTACT_EMAIL = 'comercial@nexabee.com.br';
export const LANDING_URL = 'https://modo.nexabee.com.br';
```

## Onde alterar precos

Arquivo: `src/data/content.ts`

Procure por `PRICING_PLANS` e `INVESTMENT_ITEMS`.

## Onde alterar conteudo textual

Arquivo: `src/data/content.ts`

Conteudo textual de todas as secoes: problemas, funcionalidades, comparacoes, FAQ, etc.

## Onde alterar copy das secoes

Arquivos em `src/sections/`. Cada secao e um componente independente.

## URLs utilizadas

| URL | Uso |
|-----|-----|
| https://wa.me/5511958128056 | WhatsApp comercial |
| comercial@nexabee.com.br | E-mail comercial |
| https://modo.nexabee.com.br | Landing page Nee MODO |

## Regras de branding

- Logo branco: usar em fundos escuros
- Logo preto: usar apenas quando o fundo exigir
- Nao recriar o logo
- Nao gerar outro simbolo
- Paleta: dark premium, amarelo (#FFC700) como destaque
- Identidade: tecnologica, sofisticada, minimalista

## Regras para futuras alteracoes

1. Nao inventar clientes, cases, depoimentos ou metricas
2. Nao adicionar dependencias desnecessarias
3. Manter a narrativa: problema -> solucao -> produto -> investimento -> contato
4. Manter copy curto e escaneavel (sales deck, nao manual)
5. Qualquer novo dado comercial deve ser validado com o time
