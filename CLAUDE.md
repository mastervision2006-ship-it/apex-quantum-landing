# CLAUDE.md — apex-quantum-landing

## Sobre o Projeto

Landing page A/B para o produto **Apex Quantum** — teste alternativo à `apex-landing`.
Design premium editorial financeiro. Conectada ao **mesmo Supabase do apex-crm**.

## Stack

- **Next.js 14** (App Router)
- **TypeScript 5**
- **Tailwind CSS 3** + CSS custom properties
- **Framer Motion 11** (animações)
- **Recharts 2** (gráfico de performance)
- **Supabase** (mesmo projeto do apex-crm)
- **UTMify** (pixel de tracking — injetado no layout.tsx)

## Estrutura

```
app/
  api/leads/route.ts    # POST endpoint → Supabase
  layout.tsx            # Fontes (Cormorant Garamond + DM Sans) + UTMify pixel
  globals.css           # CSS vars, animações, helpers
  page.tsx              # Monta todas as seções
components/
  Navigation.tsx        # Nav fixa com scroll behavior
  HeroSection.tsx       # Primeira dobra — headline, CTA, stats
  MediaProofSection.tsx # 3 cards estilo press clips
  PromiseSection.tsx    # 600% CDI + 3 benefícios + comparativo visual
  ExclusivitySection.tsx# Dark section — grupo seleto
  TestimonialsSection.tsx # 6 depoimentos com fotos
  PerformanceChartSection.tsx # Gráfico Bar+Line (Recharts)
  TechnologySection.tsx # Seção Aladdin — 4 pilares
  BinaryChoiceSection.tsx # Escolha binária
  LeadFormSection.tsx   # Formulário final com UTM capture + Supabase
  Footer.tsx
data/
  testimonials.ts       # Array de 6 depoimentos
  chartData.ts          # Dados do gráfico + opções de patrimônio
  mediaProof.ts         # 3 cards de mídia
lib/
  supabase.ts           # Cliente Supabase (mesmas credenciais do apex-crm)
```

## Variáveis de Ambiente

Copiar de `apex-crm` — são as mesmas:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_KEY=...
```

## Supabase — Tabela `leads`

A API route `POST /api/leads` insere com `source = 'apex-quantum-v2'`.

Colunas necessárias na tabela:
```sql
nome        text
email       text
patrimonio  text
whatsapp    text
source      text   -- 'apex-quantum-v2' identifica essa landing
utm_source  text
utm_medium  text
utm_campaign text
utm_content  text
utm_term     text
created_at  timestamptz default now()
```

> Quando for criar a tabela, ver contexto em `/apex-crm` para consistência.

## UTMify

Script injetado em `app/layout.tsx` via `next/script` com `strategy="afterInteractive"`.
Os parâmetros UTM são capturados via `URLSearchParams` no `LeadFormSection.tsx` e enviados como campos hidden no POST.

## n8n Webhook (a implementar)

Quando estiver pronto, configurar no **Supabase Dashboard**:
- Database → Webhooks → INSERT na tabela `leads`
- Filtro: `source = 'apex-quantum-v2'` (ou todos os inserts)
- URL: webhook URL do n8n
- Para disparar WhatsApp ao lead.

## Design System

- Fonte headings: `Cormorant Garamond` (serif editorial)
- Fonte body/UI: `DM Sans`
- Cor principal: `#B07D2E` (gold)
- Fundo: `#F8F7F4` (cream)
- Texto: `#0D0D0B` (charcoal)
- Seções escuras: `#0C0C0A`

## Comandos

```bash
npm run dev    # Dev server (porta 3000)
npm run build  # Build de produção
npm start      # Produção local
```
