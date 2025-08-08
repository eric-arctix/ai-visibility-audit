export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail } from '@/lib/email'

const attachmentSchema = z.object({ filename: z.string(), content: z.string(), contentType: z.string().optional() })
const schema = z.object({ to: z.string().email(), subject: z.string().min(1), html: z.string().min(1), attachments: z.array(attachmentSchema).optional() })

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { to, subject, html, attachments } = schema.parse(body)
    await sendEmail({ to, subject, html, attachments })
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Bad Request' }, { status: 400 })
  }
}