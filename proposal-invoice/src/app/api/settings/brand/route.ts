import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const schema = z.object({ companyName: z.string(), emailFrom: z.string().email().optional(), primary: z.string(), secondary: z.string(), accent: z.string(), neutral: z.string() })

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)
    const brand = await prisma.brand.upsert({ where: { id: 'seed-brand' }, update: { companyName: data.companyName, emailFrom: data.emailFrom, colorPrimary: data.primary, colorSecondary: data.secondary, colorAccent: data.accent, colorNeutral: data.neutral }, create: { id: 'seed-brand', companyName: data.companyName, emailFrom: data.emailFrom ?? null, colorPrimary: data.primary, colorSecondary: data.secondary, colorAccent: data.accent, colorNeutral: data.neutral } })
    return NextResponse.json({ ok: true, brand })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}