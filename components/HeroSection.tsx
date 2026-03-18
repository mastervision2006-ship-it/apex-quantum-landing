'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}>

      {/* Radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(196,154,56,0.12) 0%, transparent 65%)' }} />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-base))' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p className="eyebrow mb-8"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Inteligência Artificial · Mercado Financeiro · Operações Automatizadas
        </motion.p>

        <motion.h1
          className="heading-display heading-xl mb-8 leading-[0.93]"
          style={{ color: 'var(--text-base)' }}
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Invista com a I.A.
          <br />que entrega
          <br /><em className="not-italic" style={{ color: 'var(--gold)' }}>600% do CDI</em>
        </motion.h1>

        <motion.p
          className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-soft)' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          A Apex Quantum analisa, identifica e executa operações automatizadas
          com alta precisão — gerando performance superior enquanto você preserva
          o que tem de mais valioso: o seu tempo.
        </motion.p>

        <motion.div className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#form" className="btn-beam">
            <span className="btn-beam-text">Quero conhecer a Apex Quantum</span>
            <span className="btn-beam-arrow">→</span>
          </a>
          <p className="font-sans text-sm flex items-center gap-2" style={{ color: 'var(--text-dim)' }}>
            <span className="w-4 h-[1px] inline-block" style={{ background: 'var(--text-dim)' }} />
            Tecnologia supervisionada por especialistas certificados.
            <span className="w-4 h-[1px] inline-block" style={{ background: 'var(--text-dim)' }} />
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 pt-12"
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { value: '600%', label: 'do CDI entregue' },
            { value: '6×', label: 'mais que renda fixa' },
            { value: '100%', label: 'baseado em IA' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cormorant text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--gold)' }}>
                {stat.value}
              </div>
              <div className="font-sans text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="font-sans text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>Role</span>
        <div className="w-[1px] h-8" style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </motion.div>
    </section>
  )
}
