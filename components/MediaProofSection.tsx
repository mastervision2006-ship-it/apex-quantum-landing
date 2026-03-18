'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const cards = [
  { id: 1, image: '/images/materia1apex.png', alt: 'G1 Economia — Apex Quantum I.A.', outlet: 'G1 · Economia' },
  { id: 2, image: '/images/materia2apex.png', alt: 'InfoMoney — O Efeito Apex', outlet: 'InfoMoney' },
  { id: 3, image: '/images/materia3apex.png', alt: 'Money Times — Apex Quantum', outlet: 'Money Times' },
]

export default function MediaProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 38,
    damping: 20,
    restDelta: 0.0005,
  })

  // Card 1 — recedes slowly
  const c1Scale = useTransform(smooth, [0, 0.6], [1, 0.92])
  const c1Y     = useTransform(smooth, [0, 0.6], ['0%', '-2%'])
  const c1Dim   = useTransform(smooth, [0.3, 0.62], [1, 0.55])

  // Card 2 — gentle rise 10% → 55%
  const c2Y     = useTransform(smooth, [0.1, 0.55], ['90%', '0%'])
  const c2Scale = useTransform(smooth, [0.1, 0.55, 0.78], [0.97, 1, 0.92])

  // Card 3 — gentle rise 50% → 95%
  const c3Y     = useTransform(smooth, [0.5, 0.95], ['90%', '0%'])
  const c3Scale = useTransform(smooth, [0.5, 0.95], [0.97, 1])

  // Header fades out when stack starts
  const headerOp = useTransform(smooth, [0, 0.1], [1, 0])
  const headerY  = useTransform(smooth, [0, 0.1], [0, -16])

  // Dot opacities
  const dot2Op = useTransform(smooth, [0.1, 0.45], [0.25, 1])
  const dot3Op = useTransform(smooth, [0.5, 0.85], [0.25, 1])

  return (
    <section style={{ background: 'var(--bg-section)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div ref={sectionRef} style={{ height: '220vh' }} className="relative">

        {/* Sticky viewport */}
        <div className="sticky top-0 overflow-hidden" style={{ height: '100svh' }}>

          {/* ── Header — positioned at top, fades out ── */}
          <motion.div
            style={{ opacity: headerOp, y: headerY }}
            className="absolute top-0 left-0 right-0 text-center px-6 pt-16 pb-4 pointer-events-none"
          >
            <p className="eyebrow mb-3">Cobertura da Mídia</p>
            <h2
              className="heading-display"
              style={{ color: 'var(--text-base)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', lineHeight: 1.05 }}
            >
              Como a mídia financeira está
              <br />
              <em className="not-italic" style={{ color: 'var(--gold)' }}>repercutindo a Apex Quantum</em>
            </h2>
          </motion.div>

          {/* ── Card stack — absolutely centered in viewport ── */}
          <div
            className="absolute inset-x-0 px-4 sm:px-6"
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            {/*
              Card wrapper: uses aspect-ratio so height is always proportional to width.
              16/9.5 keeps it close to the news screenshot proportions.
              max-height prevents it from getting too tall on desktop.
            */}
            <div
              className="relative w-full"
              style={{ aspectRatio: '16 / 9.5', maxHeight: '440px' }}
            >
              <motion.div style={{ y: c1Y, scale: c1Scale, opacity: c1Dim, zIndex: 1 }} className="absolute inset-0">
                <CardUI card={cards[0]} priority />
              </motion.div>
              <motion.div style={{ y: c2Y, scale: c2Scale, zIndex: 2 }} className="absolute inset-0">
                <CardUI card={cards[1]} />
              </motion.div>
              <motion.div style={{ y: c3Y, scale: c3Scale, zIndex: 3 }} className="absolute inset-0">
                <CardUI card={cards[2]} />
              </motion.div>
            </div>
          </div>

          {/* ── Dots — fixed at bottom ── */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
              <motion.div className="w-2 h-2 rounded-full" style={{ opacity: dot2Op, backgroundColor: 'var(--gold)' }} />
              <motion.div className="w-2 h-2 rounded-full" style={{ opacity: dot3Op, backgroundColor: 'var(--gold)' }} />
            </div>
            <p className="font-sans text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
              Role para ver as matérias
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

function CardUI({ card, priority = false }: { card: (typeof cards)[0]; priority?: boolean }) {
  return (
    <div
      className="w-full h-full overflow-hidden"
      style={{
        borderRadius: '10px',
        boxShadow: '0 28px 70px rgba(0,0,0,0.55), 0 6px 20px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.07)',
        background: 'var(--bg-card)',
      }}
    >
      {/* Outlet badge */}
      <div
        className="px-4 py-2.5 flex items-center justify-between flex-shrink-0"
        style={{ background: 'rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="font-sans font-semibold uppercase tracking-widest" style={{ fontSize: '0.62rem', color: 'var(--gold)' }}>
          {card.outlet}
        </span>
        <span className="font-sans uppercase tracking-wider" style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)' }}>
          Cobertura Apex Quantum
        </span>
      </div>

      {/* Image fills remaining height */}
      <div className="relative w-full" style={{ height: 'calc(100% - 42px)' }}>
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) calc(100vw - 32px), 640px"
          priority={priority}
        />
      </div>
    </div>
  )
}
