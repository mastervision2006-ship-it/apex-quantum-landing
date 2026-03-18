'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-section)' }}>
      <div className="section-container">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-4">Prova Social</p>
          <h2 className="heading-display heading-lg" style={{ color: 'var(--text-base)' }}>
            Quem já opera com
            <br /><em className="not-italic" style={{ color: 'var(--gold)' }}>Apex Quantum</em>
          </h2>
          <p className="font-sans text-sm leading-relaxed mt-5 max-w-xl mx-auto" style={{ color: 'var(--text-soft)' }}>
            Resultados reais de investidores reais — médicos, empresários, engenheiros e executivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {testimonials.map((t, i) => (
            <motion.div key={t.id}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                  style={{ outline: '2px solid var(--border)' }}>
                  <Image src={t.photo} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold leading-tight" style={{ color: 'var(--text-base)' }}>
                    {t.name.split(' ').slice(0, 2).join(' ')}
                  </p>
                  <p className="font-sans text-xs" style={{ color: 'var(--text-dim)' }}>
                    {t.age} anos · {t.profession}
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-soft)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <span className="font-sans font-semibold uppercase tracking-widest"
                  style={{ fontSize: '0.65rem', color: 'var(--gold)' }}>
                  {t.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
        >
          <p className="font-cormorant text-2xl italic mb-6" style={{ color: 'var(--text-soft)' }}>
            &ldquo;O próximo resultado pode ser o seu.&rdquo;
          </p>
          <a href="#form" className="btn-beam">
            <span className="btn-beam-text">Quero os mesmos resultados</span>
            <span className="btn-beam-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
