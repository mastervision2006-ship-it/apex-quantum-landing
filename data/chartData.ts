export interface ChartEntry {
  year: string
  apexQuantum: number
  cdi: number
}

// Apex Quantum opera a 600% do CDI
// CDI histórico Brasil (taxa acumulada anual)
export const chartData: ChartEntry[] = [
  { year: '2019', apexQuantum: 35.8, cdi: 5.97 },
  { year: '2020', apexQuantum: 16.6, cdi: 2.76 },
  { year: '2021', apexQuantum: 26.5, cdi: 4.42 },
  { year: '2022', apexQuantum: 74.5, cdi: 12.41 },
  { year: '2023', apexQuantum: 73.5, cdi: 12.25 },
  { year: '2024', apexQuantum: 63.0, cdi: 10.50 },
]

export const patrimonyOptions = [
  { value: '', label: 'Selecione sua faixa de patrimônio' },
  { value: 'ate_50k', label: 'Até R$ 50 mil' },
  { value: '50k_100k', label: 'R$ 50 mil a R$ 100 mil' },
  { value: '100k_300k', label: 'R$ 100 mil a R$ 300 mil' },
  { value: '300k_500k', label: 'R$ 300 mil a R$ 500 mil' },
  { value: '500k_1m', label: 'R$ 500 mil a R$ 1 milhão' },
  { value: 'acima_1m', label: 'Acima de R$ 1 milhão' },
]
