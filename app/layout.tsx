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
        {/* UTMify UTM capture — carrega antes para capturar UTMs da URL */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          strategy="beforeInteractive"
        />
        {/* UTMify Pixel de conversão */}
        <Script
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          data-pixelid="69b1b9b861c18d68ef858bd0"
          strategy="afterInteractive"
        />
        {/* Meta Pixel — init */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','727111249948239');
          fbq('track','PageView');
        `}</Script>
      </head>
      <body className="bg-cream text-charcoal antialiased">
        {children}
        {/* Meta Pixel — noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=727111249948239&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
