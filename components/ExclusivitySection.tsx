'use client'

import { motion } from 'framer-motion'

export default function ExclusivitySection() {
  return (
    <section className="section-pad bg-[#0A0A09] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 80%, #B07D2E 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4A017 0%, transparent 50%)' }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p className="eyebrow text-[#D4A017] mb-6"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          >
            Acesso Exclusivo
          </motion.p>

          <motion.h2 className="heading-display heading-lg text-white mb-8"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Apenas{' '}
            <em className="not-italic text-[#D4A017]">18% dos brasileiros</em>
            <br />têm o privilégio de multiplicar
            <br />patrimônio com inteligência.
          </motion.h2>

          <motion.p className="font-sans text-[#6B6B60] text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            <em className="not-italic text-[#D4A017]">Torne-se um deles hoje.</em>
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A18] mt-14 mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.2 }}
          >
            {[
              { n: '01', title: 'Grupo Qualificado', desc: 'Acesso restrito para investidores com perfil e patrimônio compatíveis com a tecnologia da Apex Quantum.' },
              { n: '02', title: 'Tecnologia Institucional', desc: 'A mesma base tecnológica utilizada por grandes gestoras agora disponível para o investidor qualificado.' },
              { n: '03', title: 'Oportunidade Real', desc: 'Enquanto 82% permanecem nos mesmos retornos medianos, os 18% escolhem operar com uma matemática diferente.' },
            ].map((item, i) => (
              <motion.div key={item.n} className="bg-[#111110] p-8 text-left"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-cormorant text-4xl font-bold text-[#D4A017] opacity-30 mb-4">{item.n}</div>
                <h3 className="font-cormorant text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-[#5C5C55] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a href="#form" className="btn-pill"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            Quero fazer parte desse grupo
            <span className="arrow" style={{ backgroundColor: '#0D0D0B' }}>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
