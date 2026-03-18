'use client'

import Image from 'next/image'

const cards = [
  { id: 1, image: '/images/materia1apex.png', alt: 'G1 Economia — Apex Quantum I.A.', outlet: 'G1 · Economia' },
  { id: 2, image: '/images/materia2apex.png', alt: 'InfoMoney — O Efeito Apex',        outlet: 'InfoMoney'    },
  { id: 3, image: '/images/materia3apex.png', alt: 'Money Times — Apex Quantum',       outlet: 'Money Times'  },
]

export default function MediaProofSection() {
  return (
    <section>
      {/* Header — rola normalmente para fora */}
      <div
        className="text-center px-6 py-16"
        style={{ background: 'var(--bg-section)', borderTop: '1px solid var(--border)' }}
      >
        <p className="eyebrow mb-3">Cobertura da Mídia</p>
        <h2
          className="heading-display"
          style={{ color: 'var(--text-base)', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', lineHeight: 1.05 }}
        >
          Como a mídia financeira está
          <br />
          <em className="not-italic" style={{ color: 'var(--gold)' }}>repercutindo a Apex Quantum</em>
        </h2>
      </div>

      {/* Stack container — 100vh por card */}
      <div style={{ height: '300vh', borderBottom: '1px solid var(--border)' }}>
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="sticky top-0 flex flex-col items-center justify-center px-4 sm:px-6"
            style={{
              height: '100vh',
              zIndex: (i + 1) * 10,
              background: 'var(--bg-section)',
              // sombra superior nos cards 2 e 3 para reforçar profundidade
              boxShadow: i > 0 ? '0 -24px 60px rgba(0,0,0,0.75)' : 'none',
            }}
          >
            {/* Outlet label */}
            <p
              className="font-sans uppercase tracking-widest mb-4"
              style={{ fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '0.2em' }}
            >
              {card.outlet}
            </p>

            {/* Imagem sem moldura, com sombra discreta */}
            <div
              className="relative w-full"
              style={{
                maxWidth: '680px',
                aspectRatio: '16 / 11',
                maxHeight: 'calc(100vh - 140px)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 4px 18px rgba(0,0,0,0.25)',
              }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) calc(100vw - 32px), 680px"
                priority={i === 0}
              />
            </div>

            {/* Indicador de progresso */}
            <div className="flex items-center gap-2 mt-5">
              {cards.map((_, j) => (
                <div
                  key={j}
                  className="rounded-full"
                  style={{
                    width: j === i ? '18px' : '6px',
                    height: '6px',
                    background: j === i ? 'var(--gold)' : 'var(--text-dim)',
                    transition: 'width 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* Hint apenas no primeiro card */}
            {i === 0 && (
              <p
                className="absolute bottom-8 font-sans uppercase tracking-widest"
                style={{ fontSize: '0.58rem', color: 'var(--text-dim)' }}
              >
                Role para ver as matérias
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
