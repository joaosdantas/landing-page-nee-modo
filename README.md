# Nee MODO — Landing Page

Landing page comercial do **Nee MODO**, plataforma de gestão para operações imobiliárias — uma solução **Nexabee**.

Projeto **100% frontend e independente**: sem backend, sem banco de dados e sem qualquer dependência do sistema principal.

## Stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev)

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (pasta dist/)
npm run preview  # serve o build localmente
```

## Estrutura

```
nee-modo-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── PricingCard.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── FAQItem.tsx
│   │   ├── Logo.tsx
│   │   ├── HeroMockup.tsx        # mockup compacto do produto (Hero)
│   │   └── DashboardMockup.tsx   # representação completa do painel (ProductPreview)
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx          # pipeline: Cliente → ... → Registro
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── ProductPreview.tsx
│   │   ├── ManagerBenefits.tsx
│   │   ├── WhiteLabel.tsx
│   │   ├── Pricing.tsx           # 4 planos + Implantação + White-label
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── site.ts               # CONTACT_URL e dados da marca
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # tema (cores ink/navy + acento âmbar)
├── index.html                    # SEO + Open Graph
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## CTAs / Conversão

Todos os CTAs usam a configuração central `CONTACT_URL` em `src/lib/site.ts`:

```ts
export const CONTACT_URL = '#'
```

Basta trocar o valor por WhatsApp, formulário ou link de agendamento quando definido.

## Identidade visual

Baseada na identidade Nexabee: fundos escuros (`ink`: `#090C15`, `#0C101D`, `#111522`), azul-marinho (`#0E1D39`) e amarelo da marca **`#FFC93C`**. Tipografia Inter.

Logotipos oficiais em `src/assets/`:

- `logo_nee-modo-preto.svg` — para fundos escuros (usado na Navbar/Footer)
- `logo_nee-modo.svg` — para fundos claros

O favicon (`public/favicon.svg`) foi gerado a partir do "M" do logotipo.

## Integrações futuras (estrutura preparada, ainda não implementadas)

| Integração | Onde conectar |
| --- | --- |
| WhatsApp | Alterar `CONTACT_URL` em `src/lib/site.ts` |
| Formulário de leads | Nova seção em `src/sections/` apontando CTAs para ela |
| Calendário de reunião | Alterar `CONTACT_URL` |
| Analytics | Script no `index.html` |
| Domínio próprio | Deploy estático de `dist/` + DNS |
