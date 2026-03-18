'use client'

import { motion } from 'framer-motion'

const benefits = [
  { title: 'Independência', description: 'Pare de depender de poupança ou renda fixa. A Apex Quantum opera por você com precisão algorítmica.', icon: '◈' },
  { title: 'Tranquilidade', description: 'Sem acompanhar o mercado diariamente. A IA monitora, analisa e executa — enquanto você vive.', icon: '◉' },
  { title: 'Consistência', description: 'Performance acima da média não é sorte — é tecnologia. 600% do CDI, ano após ano.', icon: '◇' },
]

export default function PromiseSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-base)' }}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p className="eyebrow mb-6"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          >A Matemática do Patrimônio</motion.p>

          <motion.h2 className="heading-display heading-lg mb-8" style={{ color: 'var(--text-base)' }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            600% do CDI equivale a{' '}
            <em className="not-italic" style={{ color: 'var(--gold)' }}>6 VEZES MAIS</em>
            <br />do que o investidor comum pode alcançar
          </motion.h2>

          <motion.div className="gold-rule mx-auto mb-8"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          />

          <motion.p className="font-sans text-lg leading-relaxed" style={{ color: 'var(--text-soft)' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            Em outras palavras, se seu patrimônio levaria 5 anos para dobrar,
            aqui pode alcançar isso em menos de 2 anos de forma automatizada, consistente e segura.
          </motion.p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {benefits.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4">
                <span className="font-cormorant text-4xl" style={{ color: 'var(--gold)' }}>{b.icon}</span>
              </div>
              <div className="w-8 h-[1px] mb-4" style={{ background: 'var(--gold)' }} />
              <h3 className="font-cormorant text-2xl font-bold mb-3" style={{ color: 'var(--text-base)' }}>{b.title}</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          className="rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="eyebrow mb-4">Exemplo Prático</p>
            <h3 className="heading-display text-3xl md:text-4xl mb-6" style={{ color: 'var(--text-base)' }}>
              R$ 100.000 investidos.
              <br /><em className="not-italic" style={{ color: 'var(--gold)' }}>A diferença em 1 ano.</em>
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
              Com CDI a 10,5% ao ano, a renda fixa entrega R$ 10.500. A Apex Quantum,
              operando a 600% do CDI, entrega R$ 63.000 — sobre o mesmo capital.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { label: 'Renda Fixa (CDI)', value: 'R$ 10.500', pct: '10,5%', bar: 15, accent: false },
              { label: 'Apex Quantum (600% CDI)', value: 'R$ 63.000', pct: '63,0%', bar: 95, accent: true },
            ].map((row) => (
              <div key={row.label} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-sans text-xs font-medium" style={{ color: 'var(--text-soft)' }}>{row.label}</span>
                  <span className="font-cormorant text-xl font-bold" style={{ color: row.accent ? 'var(--gold)' : 'var(--text-dim)' }}>{row.value}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: row.accent ? 'var(--gold)' : 'rgba(255,255,255,0.15)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.bar}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="text-right">
                  <span className="font-sans text-xs font-semibold" style={{ color: row.accent ? 'var(--gold)' : 'var(--text-dim)' }}>{row.pct} ao ano</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="text-center mt-16"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
        >
          <a href="#form" className="btn-pill">
            Quero multiplicar meu patrimônio
            <span className="arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
