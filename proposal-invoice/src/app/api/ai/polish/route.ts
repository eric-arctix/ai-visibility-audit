export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { polishCopy } from '@/lib/ai'

const schema = z.object({
  sectionText: z.string().min(1),
  tone: z.enum(['professional', 'friendly']).default('professional'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { sectionText, tone } = schema.parse(body)
    const improved = await polishCopy(sectionText, tone)
    return NextResponse.json({ text: improved })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Bad Request' }, { status: 400 })
  }
}