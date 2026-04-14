'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import LiveChatPanel from './LiveChatPanel'

const WistiaPlayer = dynamic(() => import('./WistiaPlayer'), { ssr: false })

const CHECKOUT_URL = 'http://payment.apexquantum.site/'

function formatViewers(n: number) {
  return n.toLocaleString('pt-BR')
}

export default function LivePageClient() {
  const [showCTA, setShowCTA] = useState(false)
  const [likeCount] = useState(34291)
  const [elapsed, setElapsed] = useState(0)

  // Elapsed "live" time counter (cosmetic)
  useEffect(() => {
    const interval = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  const elapsedStr = (() => {
    const h = Math.floor(elapsed / 3600)
    const m = Math.floor((elapsed % 3600) / 60)
    const s = elapsed % 60
    if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  })()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-base)' }}>
      {/* ── Top bar ── */}
      <header
        className="flex items-center justify-between px-4 md:px-8 py-3 sticky top-0 z-30"
        style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="34" height="24" viewBox="0 0 34 24" fill="none" className="flex-shrink-0">
            <rect width="34" height="24" rx="6" fill="#FF0000"/>
            <path d="M14 8L23 12L14 16V8Z" fill="white"/>
          </svg>
          <span className="font-sans font-bold text-sm tracking-wide" style={{ color: 'var(--text-base)' }}>
            Apex Quantum
          </span>
        </div>

        {/* Live badge + timer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded" style={{ background: '#ef4444' }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-sans font-bold text-xs text-white tracking-widest">AO VIVO</span>
          </div>
          <span className="font-sans text-xs hidden sm:block" style={{ color: 'var(--text-soft)' }}>
            {elapsedStr}
          </span>
        </div>
      </header>

      {/* ── Main grid ── */}
      <div className="w-full max-w-screen-xl mx-auto px-3 md:px-6 py-4">
        <div className="flex flex-col lg:flex-row gap-4">

          {/* ── Left: Player + info ── */}
          <div className="flex-1 min-w-0">
            {/* Player */}
            <div className="w-full rounded-xl overflow-hidden" style={{ background: '#000' }}>
              <WistiaPlayer onCTAReveal={() => setShowCTA(true)} />
            </div>

            {/* CTA Banner */}
            <AnimatePresence>
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-3 rounded-xl px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold-dim) 0%, rgba(196,154,56,0.15) 100%)',
                    border: '1px solid var(--border-gold)',
                  }}
                >
                  <div>
                    <p className="font-sans font-bold text-sm" style={{ color: 'var(--gold-bright)' }}>
                      🔓 Acesso Liberado
                    </p>
                    <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--text-soft)' }}>
                      Oferta exclusiva por tempo limitado · Garantia de 7 dias
                    </p>
                  </div>
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-6 py-2.5 rounded-lg font-sans font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
                      color: '#0D0D0B',
                    }}
                  >
                    Quero começar agora →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Channel info */}
            <div className="mt-4 pb-6">
              <h1 className="font-sans font-bold text-base md:text-lg leading-snug" style={{ color: 'var(--text-base)' }}>
                Apex Quantum — Análise ao vivo: I.A. que entrega 600% do CDI
              </h1>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
                {/* Channel avatar + name */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))' }}
                  >
                    <span className="font-sans font-bold text-xs" style={{ color: '#0D0D0B' }}>AQ</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-sans font-semibold text-sm" style={{ color: 'var(--text-base)' }}>
                        Apex Quantum
                      </span>
                      {/* Verified badge */}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill="#C49A38" />
                        <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-sans text-xs" style={{ color: 'var(--text-dim)' }}>
                      {formatViewers(847293)} inscritos
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-6 w-px" style={{ background: 'var(--border)' }} />

                {/* Likes */}
                <div className="flex items-center gap-3 rounded-full px-4 py-1.5" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-1.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--text-soft)' }}>
                      <path d="M2 9.5V14h2.5M2 9.5h2.5M2 9.5l2-5.5h3l-.5 3H10l-.5 2.5H4.5M4.5 9.5V14M13 9.5V14h-3V9.5M13 9.5h1V7h-4.5L10 5l3 .5V9.5H13z"
                        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    </svg>
                    <span className="font-sans text-xs font-semibold" style={{ color: 'var(--text-soft)' }}>
                      {likeCount.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div className="w-px h-4" style={{ background: 'var(--border)' }} />
                  <span className="font-sans text-xs" style={{ color: 'var(--text-dim)' }}>👎</span>
                </div>

                {/* Share */}
                <button
                  className="flex items-center gap-1.5 rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-colors"
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', color: 'var(--text-soft)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M10 1l3 3-3 3M2 7v1a3 3 0 003 3h8M5 4H3a2 2 0 00-2 2v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Compartilhar
                </button>

                {/* Save */}
                <button
                  className="flex items-center gap-1.5 rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-colors"
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', color: 'var(--text-soft)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2h10v11L7 10l-5 3V2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                  Salvar
                </button>
              </div>

              {/* Description */}
              <div
                className="mt-4 rounded-xl px-4 py-3"
                style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-sans font-bold text-xs" style={{ color: 'var(--text-base)' }}>
                    Transmissão ao vivo
                  </span>
                  <span className="font-sans text-xs" style={{ color: 'var(--text-dim)' }}>
                    Iniciada hoje
                  </span>
                </div>
                <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  Nesta transmissão ao vivo apresentamos uma análise completa da tecnologia por trás da Apex Quantum —
                  a I.A. baseada na plataforma Aladdin que entrega consistentemente 600% do CDI.
                  Acompanhe os dados reais de performance de 2019 a 2024 e descubra como você pode
                  fazer parte desse grupo seleto de investidores.
                </p>
                <p className="font-sans text-xs mt-2" style={{ color: 'var(--text-dim)' }}>
                  #ApexQuantum #InvestimentoIA #600CDI #TradingAutomatico
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Chat ── */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-16" style={{ height: 'calc(100vh - 80px)' }}>
              <LiveChatPanel />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA on mobile (bottom bar) */}
      <AnimatePresence>
        {showCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-4 pt-3"
            style={{ background: 'linear-gradient(to top, var(--bg-base) 70%, transparent)' }}
          >
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-beam w-full flex items-center justify-center gap-2"
            >
              <span className="btn-beam-text flex-1 text-center text-sm">
                🔓 Quero começar agora
              </span>
              <span className="btn-beam-arrow">→</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
