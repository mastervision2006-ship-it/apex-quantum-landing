export interface Testimonial {
  id: number
  name: string
  age: number
  profession: string
  quote: string
  photo: string
  highlight: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Eduardo Moraes',
    age: 47,
    profession: 'Empresário',
    highlight: 'Multiplicou o patrimônio em 14 meses',
    quote:
      'Eu já tinha passado por várias plataformas de investimento antes da Apex Quantum. Nenhuma chegou nem perto dessa consistência. Em 14 meses, meu patrimônio cresceu de um jeito que eu simplesmente não conseguia com renda fixa tradicional.',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Fernanda Lima Carvalho',
    age: 39,
    profession: 'Médica Cardiologista',
    highlight: 'Independência financeira sem abrir mão do tempo',
    quote:
      'Como médica, meu tempo é extremamente limitado. A Apex Quantum me deu o que eu mais precisava: performance real sem precisar acompanhar o mercado. É a única coisa no meu portfólio que trabalha enquanto eu trabalho.',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Roberto Santos Filho',
    age: 54,
    profession: 'Engenheiro Civil',
    highlight: '600% do CDI comprovado por 2 anos consecutivos',
    quote:
      'Sou engenheiro, então preciso de dados. Dois anos acompanhando os relatórios da Apex Quantum e os números são consistentes. 600% do CDI não é promessa de marketing — é resultado auditável mês a mês.',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 4,
    name: 'Juliana Costa Ribeiro',
    age: 42,
    profession: 'Advogada Tributarista',
    highlight: 'Rentabilidade que a renda fixa nunca entregou',
    quote:
      'Passei anos colocando tudo em CDB e Tesouro. Seguro, mas insuficiente. Com a Apex Quantum, pela primeira vez sinto que meu dinheiro está realmente trabalhando. A diferença de retorno é incomparável.',
    photo: 'https://randomuser.me/api/portraits/women/29.jpg',
  },
  {
    id: 5,
    name: 'Marcelo Pereira Duarte',
    age: 49,
    profession: 'Diretor Financeiro',
    highlight: 'Decisão mais inteligente dos últimos 5 anos',
    quote:
      'Trabalho com finanças corporativas há 20 anos. Reconheço quando uma solução é tecnicamente sólida. A Apex Quantum opera num nível que a maioria dos fundos brasileiros não consegue replicar. Recomendo sem reservas.',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    id: 6,
    name: 'Ana Paula Ferreira',
    age: 36,
    profession: 'Dentista e Investidora',
    highlight: 'Do zero ao grupo seleto em 8 meses',
    quote:
      'Quando um colega me apresentou a Apex Quantum, fui cética. Oito meses depois, não consigo imaginar minha carteira sem ela. A plataforma é transparente, o retorno é real e o suporte é de outro nível.',
    photo: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
]
