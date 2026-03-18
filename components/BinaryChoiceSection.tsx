'use client'

import { motion } from 'framer-motion'

export default function BinaryChoiceSection() {
  return (
    <section className="section-pad overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="section-container">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4">Você Escolhe</p>
          <h2 className="heading-display heading-lg" style={{ color: 'var(--text-base)' }}>
            Dois caminhos.
            <br /><em className="not-italic" style={{ color: 'var(--gold)' }}>Uma única decisão.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
          {/* Path A */}
          <motion.div className="p-10 md:p-14 rounded-l-2xl"
            style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-gold)' }}
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-3">Grupo Apex Quantum</p>
            <h3 className="font-cormorant text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--text-base)' }}>
              VOCÊ PODE ENTRAR AGORA PARA OS 18% QUE SE LIBERTARAM DA RENTABILIDADE COMUM
            </h3>
            <div className="w-10 h-[1px] mb-6" style={{ background: 'var(--gold)' }} />
            <ul className="space-y-3 mb-10">
              {[
                'Patrimônio crescendo a 600% do CDI',
                'Tecnologia operando 24/7 por você',
                'Performance consistente ano a ano',
                'Acesso ao grupo seleto de investidores',
                'Relatórios transparentes e rastreáveis',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }}>◈</span>
                  <span className="font-sans text-sm leading-snug" style={{ color: 'var(--text-soft)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#form" className="btn-beam">
              <span className="btn-beam-text">Quero entrar agora</span>
              <span className="btn-beam-arrow">→</span>
            </a>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center justify-center px-6 py-8 md:py-0" style={{ background: 'var(--bg-base)' }}>
            <motion.div className="font-cormorant text-5xl font-bold italic" style={{ color: 'var(--gold)' }}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            >ou</motion.div>
          </div>

          {/* Path B */}
          <motion.div className="p-10 md:p-14 rounded-r-2xl"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-3" style={{ color: 'var(--text-dim)' }}>Caminho Convencional</p>
            <h3 className="font-cormorant text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--text-soft)' }}>
              OU SEGUIR ENTRE OS 82% QUE CONTINUAM PRESOS AO DINHEIRO PARADO
            </h3>
            <div className="w-10 h-[1px] mb-6" style={{ background: 'var(--border)' }} />
            <ul className="space-y-3 mb-10">
              {[
                'Rentabilidade limitada ao teto da renda fixa',
                'Acompanhar o mercado diariamente',
                'Resultados abaixo do potencial real',
                'Mesma realidade financeira daqui a 5 anos',
                'Oportunidade de multiplicação desperdiçada',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5 flex-shrink-0" style={{ color: 'var(--text-dim)' }}>—</span>
                  <span className="font-sans text-sm leading-snug line-through" style={{ color: 'var(--text-dim)', textDecorationColor: 'var(--text-dim)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="w-full text-center py-4 px-8 font-sans font-medium uppercase tracking-widest opacity-30 cursor-not-allowed"
              style={{ border: '1px solid var(--border)', borderRadius: '999px', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              Continuar como estou
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
