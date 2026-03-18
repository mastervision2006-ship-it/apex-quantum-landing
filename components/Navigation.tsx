'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(7,14,26,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="section-container flex items-center justify-between">
        <span className="font-cormorant text-lg font-bold tracking-tight text-[#EDF0F5]">
          APEX <span style={{ color: '#C49A38' }}>QUANTUM</span>
        </span>

        <a href="#form" className="btn-beam hidden sm:inline-flex" style={{ padding: '3px 3px 3px 1.1rem' }}>
          <span className="btn-beam-text" style={{ fontSize: '0.72rem' }}>Habilitar Conta</span>
          <span className="btn-beam-arrow" style={{ width: '32px', height: '32px', fontSize: '0.85rem' }}>→</span>
        </a>
      </div>
    </nav>
  )
}
