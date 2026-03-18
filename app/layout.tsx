import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Apex Quantum — I.A. que entrega 600% do CDI',
  description:
    'A Apex Quantum analisa, identifica e executa operações automatizadas com alta precisão — gerando performance consistentemente superior enquanto você preserva seu tempo.',
  openGraph: {
    title: 'Apex Quantum — I.A. que entrega 600% do CDI',
    description:
      'Tecnologia de inteligência artificial aplicada ao mercado financeiro. Acesso exclusivo para investidores qualificados.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* UTMify Pixel */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod=""
          strategy="afterInteractive"
          async
        />
      </head>
      <body className="bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  )
}
