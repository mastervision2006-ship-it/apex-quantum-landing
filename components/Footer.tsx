'use client'

export default function Footer() {
  return (
    <footer className="py-12" style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-sm"
              style={{ background: 'linear-gradient(135deg,#C49A38,#E0B84A)' }}>
              <span className="font-cormorant font-bold text-xs" style={{ color: '#07111E' }}>AQ</span>
            </div>
            <span className="font-cormorant text-base font-bold tracking-tight" style={{ color: 'var(--text-base)' }}>
              APEX <span style={{ color: 'var(--gold)' }}>QUANTUM</span>
            </span>
          </div>

          <p className="font-sans text-center md:text-right max-w-xl leading-relaxed" style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
            Investimentos envolvem riscos. Performance passada não garante resultados futuros.
            A Apex Quantum não oferece garantia de retorno. Consulte um especialista certificado antes de investir.
          </p>
        </div>

        <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid var(--border-soft)' }}>
          <p className="font-sans" style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} Apex Quantum. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            {['Política de Privacidade', 'Termos de Uso'].map(item => (
              <a key={item} href="#" className="font-sans transition-colors duration-200"
                style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
