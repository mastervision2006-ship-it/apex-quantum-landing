export interface MediaCard {
  id: number
  outlet: string
  outletLogo: string
  headline: string
  excerpt: string
  date: string
  category: string
  color: string
}

export const mediaCards: MediaCard[] = [
  {
    id: 1,
    outlet: 'Valor Econômico',
    outletLogo: 'VE',
    headline: 'Inteligência artificial supera gestores tradicionais em consistência de retorno',
    excerpt:
      'Plataformas baseadas em algoritmos de IA registraram performance acima de 500% do CDI em 2023, enquanto fundos multimercado tradicionais entregaram média de 108% do CDI no mesmo período.',
    date: '14 Nov 2023',
    category: 'Mercados',
    color: '#1a3a5c',
  },
  {
    id: 2,
    outlet: 'Exame Invest',
    outletLogo: 'EX',
    headline: 'A nova era dos investimentos: IA analítica chega ao investidor sofisticado',
    excerpt:
      'Tecnologias como a Aladdin, originalmente desenvolvidas para gestoras institucionais, agora viabilizam operações automatizadas de alta precisão para investidores qualificados no Brasil.',
    date: '3 Fev 2024',
    category: 'Tecnologia',
    color: '#b30000',
  },
  {
    id: 3,
    outlet: 'InfoMoney',
    outletLogo: 'IM',
    headline: 'CDI deixa de ser referência para quem busca multiplicação real de patrimônio',
    excerpt:
      'Especialistas apontam que investidores que limitam sua carteira ao CDI como teto perdem oportunidades de multiplicação que a tecnologia quantitativa já torna acessível no mercado brasileiro.',
    date: '22 Jan 2024',
    category: 'Educação Financeira',
    color: '#1a5c2a',
  },
]
