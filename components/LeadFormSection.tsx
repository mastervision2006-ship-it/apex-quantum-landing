'use client'

import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { patrimonyOptions } from '@/data/chartData'

interface FormData {
  nome: string; email: string; patrimonio: string; whatsapp: string; consentimento: boolean
  utm_source: string; utm_medium: string; utm_campaign: string; utm_content: string; utm_term: string
}
const initialForm: FormData = {
  nome: '', email: '', patrimonio: '', whatsapp: '', consentimento: false,
  utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '',
}
function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0,2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`
}

interface LeadFormSectionProps {
  source?: string
}

export default function LeadFormSection({ source = 'apex-quantum-v2' }: LeadFormSectionProps) {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const p = new URLSearchParams(window.location.search)
    setForm(prev => ({ ...prev,
      utm_source: p.get('utm_source')||'', utm_medium: p.get('utm_medium')||'',
      utm_campaign: p.get('utm_campaign')||'', utm_content: p.get('utm_content')||'',
      utm_term: p.get('utm_term')||'',
    }))
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') setForm(p => ({ ...p, [name]: (e.target as HTMLInputElement).checked }))
    else if (name === 'whatsapp') setForm(p => ({ ...p, whatsapp: maskPhone(value) }))
    else setForm(p => ({ ...p, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.consentimento) { setErrorMsg('Aceite os termos para continuar.'); return }
    setStatus('loading'); setErrorMsg('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })
      if (!res.ok) throw new Error()
      // Meta Pixel — Lead event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead')
      }
      // Dispara conversão UTMify (aguarda script carregar se necessário)
      if (typeof window !== 'undefined') {
        const fire = () => { (window as any).utmify?.('conversion', 'lead') }
        if ((window as any).utmify) {
          fire()
        } else {
          let fired = false
          const once = () => { if (!fired) { fired = true; fire() } }
          window.addEventListener('utmify:ready', once, { once: true })
          setTimeout(once, 3000)
        }
      }
      setStatus('success')
    } catch {
      setStatus('error'); setErrorMsg('Ocorreu um erro. Tente novamente.')
    }
  }

  if (status === 'success') {
    return (
      <section id="form" className="section-pad" style={{ background: 'var(--bg-section)' }}>
        <div className="section-container max-w-xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))' }}>
              <span className="text-white text-xl">✓</span>
            </div>
            <h2 className="heading-display heading-md mb-4" style={{ color: 'var(--text-base)' }}>Solicitação recebida.</h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: 'var(--text-soft)' }}>
              Nossa equipe entrará em contato em breve via WhatsApp para validar sua elegibilidade.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="form" className="py-24" style={{ background: 'var(--bg-section)' }}>
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4">Último Passo</p>
            <h2 className="heading-display heading-md mb-4" style={{ color: 'var(--text-base)' }}>
              Habilite sua conta
              <br /><em className="not-italic" style={{ color: 'var(--gold)' }}>Apex Quantum</em>
            </h2>
            <p className="font-sans text-sm leading-relaxed max-w-md mx-auto" style={{ color: 'var(--text-soft)' }}>
              Preencha com suas informações reais. Nossa equipe validará sua elegibilidade
              e entrará em contato via WhatsApp.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nome */}
              <div className="form-field">
                <label htmlFor="nome" className="form-label">Nome Completo</label>
                <input id="nome" name="nome" type="text" className="form-input"
                  placeholder="Seu nome completo" value={form.nome} onChange={handleChange} required autoComplete="name" />
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="email" className="form-label">E-mail Principal</label>
                <input id="email" name="email" type="email" className="form-input"
                  placeholder="seu@email.com.br" value={form.email} onChange={handleChange} required autoComplete="email" />
              </div>

              {/* Patrimônio */}
              <div className="form-field">
                <label htmlFor="patrimonio" className="form-label">Faixa de Patrimônio Líquido</label>
                <div className="relative">
                  <select id="patrimonio" name="patrimonio" className="form-input pr-10 cursor-pointer"
                    value={form.patrimonio} onChange={handleChange} required>
                    {patrimonyOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--text-dim)' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="form-field">
                <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                <div className="flex overflow-hidden transition-all duration-200"
                  style={{ borderRadius: '10px', border: '1.5px solid var(--border)' }}
                  onFocus={() => {}} // handled by child input
                >
                  <div className="flex items-center px-4 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.04)', borderRight: '1.5px solid var(--border)' }}>
                    <span className="font-sans text-sm font-semibold" style={{ color: 'var(--text-soft)' }}>+55</span>
                  </div>
                  <input id="whatsapp" name="whatsapp" type="tel"
                    className="flex-1 px-4 outline-none font-sans"
                    style={{ background: 'var(--bg-input)', fontSize: '0.95rem', color: 'var(--text-base)', padding: '0.95rem 1rem' }}
                    placeholder="(11) 99999-9999"
                    value={form.whatsapp} onChange={handleChange} required autoComplete="tel" />
                </div>
              </div>

              {/* Hidden UTMs */}
              <input type="hidden" name="utm_source"   value={form.utm_source} />
              <input type="hidden" name="utm_medium"   value={form.utm_medium} />
              <input type="hidden" name="utm_campaign" value={form.utm_campaign} />
              <input type="hidden" name="utm_content"  value={form.utm_content} />
              <input type="hidden" name="utm_term"     value={form.utm_term} />

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer pt-1">
                <input type="checkbox" name="consentimento" checked={form.consentimento}
                  onChange={handleChange} required
                  className="mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer"
                  style={{ accentColor: 'var(--gold)' }} />
                <span className="font-sans text-xs leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  Concordo em receber comunicações da Apex Quantum por e-mail e WhatsApp,
                  conforme a{' '}
                  <span style={{ color: 'var(--gold)', textDecoration: 'underline', cursor: 'pointer' }}>
                    Política de Privacidade
                  </span>. Posso cancelar a qualquer momento.
                </span>
              </label>

              {errorMsg && (
                <p className="font-sans text-sm rounded-lg p-3"
                  style={{ color: '#f87171', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}>
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button type="submit" disabled={status === 'loading'}
                className="btn-beam w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="btn-beam-text flex-1 text-center text-sm">
                  {status === 'loading' ? 'Validando...' : 'Habilitar minha conta agora'}
                </span>
                {status !== 'loading' && <span className="btn-beam-arrow">→</span>}
              </button>

              {/* Security */}
              <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center justify-center gap-5 flex-wrap mb-2">
                  {['🔒 SSL', '🛡️ LGPD', '✓ Criptografado'].map(item => (
                    <span key={item} className="font-sans" style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>{item}</span>
                  ))}
                </div>
                <p className="font-sans text-center leading-relaxed" style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
                  Apex Quantum — Plataforma de investimento baseada em I.A. Seus dados são tratados com total sigilo.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
