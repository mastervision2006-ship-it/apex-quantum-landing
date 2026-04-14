import type { Metadata } from 'next'
import LivePageClient from '@/components/ao-vivo/LivePageClient'

export const metadata: Metadata = {
  title: 'Apex Quantum — Transmissão ao Vivo',
  description: 'Assista à análise ao vivo da I.A. que entrega 600% do CDI.',
  robots: { index: false, follow: false },
}

export default function AoVivoPage() {
  return <LivePageClient />
}
