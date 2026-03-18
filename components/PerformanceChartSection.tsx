'use client'

import { motion } from 'framer-motion'
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'
import { chartData } from '@/data/chartData'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl p-4" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
      <p className="font-cormorant text-lg font-bold mb-2" style={{ color: 'var(--text-base)' }}>{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.name} className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: entry.color || entry.fill }} />
          <span className="font-sans text-xs" style={{ color: 'var(--text-soft)' }}>{entry.name}:</span>
          <span className="font-sans text-xs font-bold" style={{ color: 'var(--text-base)' }}>{entry.value}%</span>
        </div>
      ))}
    </div>
  )
}

export default function PerformanceChartSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-base)' }}>
      <div className="section-container">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-4">Performance Histórica</p>
          <h2 className="heading-display heading-lg" style={{ color: 'var(--text-base)' }}>
            Consistência acima da{' '}
            <em className="not-italic" style={{ color: 'var(--gold)' }}>média do mercado</em>
          </h2>
          <p className="font-sans mt-5 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-soft)', fontSize: '0.95rem' }}>
            A renda fixa tradicional preserva. A Apex Quantum multiplica. Veja a diferença real — ano a ano.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl p-6 md:p-10"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-end gap-6 mb-6">
            {[
              { color: 'var(--gold)', label: 'Apex Quantum', square: true },
              { color: 'rgba(255,255,255,0.2)', label: 'CDI', square: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={item.square ? 'w-4 h-4' : 'w-4 h-0.5'} style={{ backgroundColor: item.color }} />
                <span className="font-sans font-semibold uppercase tracking-wide" style={{ fontSize: '0.65rem', color: 'var(--text-soft)' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="year"
                tick={{ fontFamily: 'var(--font-dm-sans)', fontSize: 11, fill: 'var(--text-dim)' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.06)' }} tickLine={false}
              />
              <YAxis tickFormatter={(v) => `${v}%`}
                tick={{ fontFamily: 'var(--font-dm-sans)', fontSize: 10, fill: 'var(--text-dim)' }}
                axisLine={false} tickLine={false} width={40}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(196,154,56,0.04)' }} />
              <Bar dataKey="apexQuantum" name="Apex Quantum" radius={[3, 3, 0, 0]} maxBarSize={52}>
                {chartData.map((_, i) => <Cell key={i} fill="var(--gold)" />)}
              </Bar>
              <Line dataKey="cdi" name="CDI" type="monotone"
                stroke="rgba(255,255,255,0.25)" strokeWidth={2}
                dot={{ fill: 'rgba(255,255,255,0.25)', r: 4 }}
                activeDot={{ r: 5, fill: 'rgba(255,255,255,0.5)' }}
              />
            </ComposedChart>
          </ResponsiveContainer>

          <p className="font-sans text-center mt-4" style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
            * Performance histórica baseada em dados reais. Resultados passados não garantem retornos futuros.
          </p>
        </motion.div>

        {/* Summary stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-px"
          style={{ background: 'var(--border)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: 'Retorno médio anual', value: '48,3%', sub: 'Apex Quantum' },
            { label: 'CDI médio anual', value: '8,1%', sub: 'Benchmark' },
            { label: 'Acima do CDI', value: '6×', sub: 'Todos os anos' },
            { label: 'Anos consecutivos', value: '6', sub: 'De performance' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center" style={{ background: 'var(--bg-card)' }}>
              <div className="font-cormorant text-3xl font-bold mb-1" style={{ color: 'var(--gold)' }}>{stat.value}</div>
              <div className="font-sans font-semibold uppercase tracking-wide mb-1" style={{ fontSize: '0.65rem', color: 'var(--text-soft)' }}>{stat.label}</div>
              <div className="font-sans" style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
