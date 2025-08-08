export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail } from '@/lib/email'

const schema = z.object({ to: z.string().email(), proposalUrl: z.string().url(), invoiceUrl: z.string().url(), company: z.string() })

export async function POST(req: NextRequest) {
  try {
    const { to, proposalUrl, invoiceUrl, company } = schema.parse(await req.json())
    const html = `<!doctype html><html><body><h2>${company} sent you documents</h2><p>Hi ${to},</p><p>Your proposal and invoice are ready.</p><p><a href="${proposalUrl}">View Proposal</a> · <a href="${invoiceUrl}">View Invoice</a></p></body></html>`
    await sendEmail({ to, subject: `Documents from ${company}`, html })
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}