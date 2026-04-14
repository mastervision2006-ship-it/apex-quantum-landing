'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { chatMessages, type ChatMessage } from '@/data/chatMessages'

interface LiveMessage extends ChatMessage {
  id: number
  ts: string
}

function getTime(): string {
  const now = new Date()
  return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const VIEWER_BASE = 2847

export default function LiveChatPanel() {
  const [messages, setMessages] = useState<LiveMessage[]>([])
  const [viewers, setViewers] = useState(VIEWER_BASE)
  const containerRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)
  const idRef = useRef(0)

  const addMessage = useCallback(() => {
    const raw = chatMessages[indexRef.current % chatMessages.length]
    indexRef.current += 1
    const msg: LiveMessage = { ...raw, id: idRef.current++, ts: getTime() }
    setMessages(prev => {
      const next = [...prev, msg]
      return next.length > 60 ? next.slice(next.length - 60) : next
    })
  }, [])

  // Seed with initial messages
  useEffect(() => {
    const initial: LiveMessage[] = []
    for (let i = 0; i < 8; i++) {
      const raw = chatMessages[i % chatMessages.length]
      initial.push({ ...raw, id: idRef.current++, ts: getTime() })
      indexRef.current = i + 1
    }
    setMessages(initial)
  }, [])

  // Auto-add messages
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const schedule = () => {
      const delay = randomBetween(2500, 6000)
      timeout = setTimeout(() => {
        addMessage()
        schedule()
      }, delay)
    }
    schedule()
    return () => clearTimeout(timeout)
  }, [addMessage])

  // Viewer count drift
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(v => {
        const delta = randomBetween(-12, 18)
        return Math.max(VIEWER_BASE - 100, v + delta)
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll somente dentro do container do chat
  useEffect(() => {
    const el = containerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  return (
    <aside
      className="flex flex-col"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        height: '100%',
        minHeight: 480,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-2">
          <span className="font-sans font-semibold text-sm" style={{ color: 'var(--text-base)' }}>
            Chat ao vivo
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#ef4444' }}
          />
          <span className="font-sans text-xs" style={{ color: 'var(--text-soft)' }}>
            {viewers.toLocaleString('pt-BR')}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border) transparent' }}
      >
        {messages.map(msg => (
          <div key={msg.id} className="flex flex-col gap-0.5">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span
                className="font-sans font-semibold text-xs flex-shrink-0"
                style={{
                  color: msg.type === 'highlight'
                    ? 'var(--gold-bright)'
                    : msg.type === 'question'
                    ? '#60a5fa'
                    : 'var(--text-soft)',
                }}
              >
                {msg.name}
              </span>
              <span className="font-sans text-xs" style={{ color: 'var(--text-dim)' }}>
                {msg.ts}
              </span>
            </div>
            <p
              className="font-sans text-sm leading-snug"
              style={{
                color: msg.type === 'highlight'
                  ? 'var(--text-base)'
                  : 'var(--text-soft)',
                fontWeight: msg.type === 'highlight' ? 500 : 400,
              }}
            >
              {msg.message}
            </p>
          </div>
        ))}
      </div>

      {/* Input (decorativo) */}
      <div className="px-3 py-3 flex-shrink-0" style={{ borderTop: '1px solid var(--border)' }}>
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2.5 cursor-text"
          style={{ background: 'var(--bg-input)', border: '1px solid var(--border)' }}
        >
          <span className="font-sans text-sm flex-1" style={{ color: 'var(--text-dim)' }}>
            Digite uma mensagem...
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--text-dim)', flexShrink: 0 }}>
            <path d="M14 8L2 2l2.5 6L2 14l12-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="font-sans text-center mt-2" style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>
          Faça login para participar do chat
        </p>
      </div>
    </aside>
  )
}
