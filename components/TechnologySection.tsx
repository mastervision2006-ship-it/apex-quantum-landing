'use client'

import { motion } from 'framer-motion'

const pillars = [
  { icon: '⬡', title: 'Análise de risco em tempo real', description: 'Monitoramento contínuo das condições de mercado com resposta algorítmica em milissegundos.' },
  { icon: '⬢', title: 'Integração avançada de dados', description: 'Múltiplas fontes de dados integradas para uma visão completa do comportamento dos ativos.' },
  { icon: '◈', title: 'Leitura de carteira em múltiplos cenários', description: 'Simulação e análise de performance em diferentes condições macroeconômicas simultaneamente.' },
  { icon: '◉', title: 'Precisão operacional com inteligência quantitativa', description: 'Decisões baseadas em modelos matemáticos rigorosos — sem ruído emocional, sem viés humano.' },
]

export default function TechnologySection() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ background: 'var(--bg-section)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(196,154,56,0.07) 0%, transparent 70%)' }} />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p className="eyebrow mb-6"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
            >Infraestrutura Tecnológica</motion.p>

            <motion.h2 className="heading-display heading-lg mb-8" style={{ color: 'var(--text-base)' }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              A tecnologia por trás da{' '}
              <em className="not-italic" style={{ color: 'var(--gold)' }}>Apex Quantum</em>
            </motion.h2>

            <motion.div className="w-16 h-[2px] mb-8" style={{ background: 'var(--gold)' }}
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            />

            <motion.p className="font-sans text-base leading-relaxed mb-6" style={{ color: 'var(--text-soft)' }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.15 }}
            >
              A tecnologia da Apex Quantum é 100% baseada na{' '}
              <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>Aladdin</strong>,
              construída ao longo de anos de estudos, engenharia estratégica e
              desenvolvimento contínuo para interpretar risco, integrar dados e
              analisar operações em múltiplos cenários de mercado com alta precisão.
            </motion.p>

            <motion.p className="font-sans text-sm leading-relaxed mb-10" style={{ color: 'var(--text-dim)' }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              Essa base tecnológica permite uma visão ampla e precisa das operações,
              conectando leitura de risco, comportamento de ativos e resposta
              estratégica com velocidade, consistência e inteligência quantitativa.
            </motion.p>

            <motion.div className="pl-5" style={{ borderLeft: '2px solid var(--gold)' }}
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p className="font-cormorant text-xl italic leading-relaxed" style={{ color: 'var(--gold)' }}>
                &ldquo;Anos de estudo e desenvolvimento aplicados a uma infraestrutura
                pensada para operar com mais controle, profundidade analítica e
                capacidade de adaptação ao mercado.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right — pillars */}
          <div className="space-y-5">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} className="flex gap-4 group"
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-colors duration-300"
                  style={{ border: '1px solid var(--border-gold)' }}
                >
                  <span className="text-lg" style={{ color: 'var(--gold)' }}>{pillar.icon}</span>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold mb-1.5 leading-tight" style={{ color: 'var(--text-base)' }}>
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border)' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-3"
                style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-gold)', borderRadius: '8px' }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="font-sans uppercase tracking-widest" style={{ fontSize: '0.65rem', color: 'var(--text-soft)' }}>
                  Powered by{' '}
                  <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>Aladdin Technology</strong>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
