'use client'

import { useEffect, useRef } from 'react'

const MEDIA_ID = 'rf4widnaxp'
const CTA_TRIGGER_SECONDS = 18 * 60

interface WistiaPlayerProps {
  onCTAReveal: () => void
}

export default function WistiaPlayer({ onCTAReveal }: WistiaPlayerProps) {
  const revealedRef = useRef(false)
  const onCTARevealRef = useRef(onCTAReveal)
  onCTARevealRef.current = onCTAReveal

  useEffect(() => {
    const injectScript = (src: string, type?: string) => {
      if (document.querySelector(`script[src="${src}"]`)) return
      const s = document.createElement('script')
      s.src = src
      s.async = true
      if (type) s.type = type
      document.head.appendChild(s)
    }

    injectScript('https://fast.wistia.com/player.js')
    injectScript(`https://fast.wistia.com/embed/${MEDIA_ID}.js`, 'module')

    const checkCTA = (seconds: number) => {
      if (!revealedRef.current && seconds >= CTA_TRIGGER_SECONDS) {
        revealedRef.current = true
        onCTARevealRef.current()
      }
    }

    const bindEvents = (el: Element) => {
      // Evento nativo do wistia-player web component
      el.addEventListener('timechange', (e: Event) => {
        const detail = (e as CustomEvent).detail
        const seconds = detail?.seconds ?? detail?.currentTime ?? 0
        checkCTA(seconds)
      })

      // Fallback via _wq para versões híbridas
      ;(window as any)._wq = (window as any)._wq || []
      ;(window as any)._wq.push({
        id: MEDIA_ID,
        onReady: (video: { bind: (ev: string, cb: (t: number) => void) => void }) => {
          video.bind('timechange', (t: number) => checkCTA(t))
        },
      })
    }

    // Aguarda o custom element ser definido, depois aguarda estar no DOM
    const tryBind = () => {
      const el = document.querySelector(`wistia-player[media-id="${MEDIA_ID}"]`)
      if (el) {
        bindEvents(el)
      } else {
        setTimeout(tryBind, 300)
      }
    }

    if (typeof customElements !== 'undefined') {
      customElements.whenDefined('wistia-player').then(tryBind)
    }
    // Fallback caso o elemento já exista
    setTimeout(tryBind, 1000)

    // Expõe função de teste no console: testCTA()
    ;(window as any).testCTA = () => {
      revealedRef.current = false // reseta para poder testar mais de uma vez
      checkCTA(CTA_TRIGGER_SECONDS + 1)
      console.log('✅ CTA disparado manualmente')
    }

    return () => {
      delete (window as any).testCTA
    }
  }, [])

  return (
    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
      <style>{`
        wistia-player[media-id='${MEDIA_ID}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${MEDIA_ID}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>

      {/* @ts-expect-error — wistia-player é um custom element externo */}
      <wistia-player
        media-id={MEDIA_ID}
        aspect="1.7777777777777777"
        playbar="false"
        settings-control="false"
        fullscreen-button="false"
        volume-control="false"
        style={{ width: '100%', height: '100%', display: 'block', borderRadius: '8px' }}
      />
    </div>
  )
}
