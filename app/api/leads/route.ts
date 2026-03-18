import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { nome, email, patrimonio, whatsapp, source, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = body

    if (!nome || !email || !patrimonio || !whatsapp) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
    }

    const { error } = await supabase.from('leads').insert([
      {
        nome,
        email,
        patrimonio,
        whatsapp,
        source: source || 'apex-quantum-v2',
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
        utm_content: utm_content || null,
        utm_term: utm_term || null,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error('[leads] Supabase error:', error)
      return NextResponse.json({ error: 'Erro ao salvar lead.' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('[leads] Unexpected error:', err)
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
