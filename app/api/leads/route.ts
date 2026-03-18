import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { nome, email, patrimonio, whatsapp, source, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = body

    if (!nome || !email || !whatsapp) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
    }

    // dataCad no mesmo formato do CRM: "DD/MM/YYYY HH:MM"
    const now = new Date()
    const dataCad = now.toLocaleString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: false,
      timeZone: 'America/Sao_Paulo',
    }).replace(',', '')

    const { error } = await supabase.from('leads').insert([{
      nome,
      email,
      tel: whatsapp,          // mapeia whatsapp → tel (campo do CRM)
      fase: 'Novo Lead',      // entra direto no Kanban
      dataCad,                // formato padrão do CRM
      patrimonio,             // coluna extra (precisa existir no Supabase)
      source: source || 'apex-quantum-v2',  // identifica a landing no CRM
      utm_source:   utm_source   || null,
      utm_medium:   utm_medium   || null,
      utm_campaign: utm_campaign || null,
      utm_content:  utm_content  || null,
      utm_term:     utm_term     || null,
    }])

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
