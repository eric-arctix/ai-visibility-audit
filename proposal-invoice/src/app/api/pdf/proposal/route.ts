export const runtime = 'nodejs'
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { htmlToPdf } from '@/lib/pdf'
import { renderProposalHtml } from '@/templates/proposal-html'

const schema = z.object({
  brand: z.object({ companyName: z.string(), logoUrl: z.string().optional(), colors: z.object({ primary: z.string(), secondary: z.string(), accent: z.string(), neutral: z.string() }) }),
  client: z.object({ name: z.string(), company: z.string().optional() }),
  proposal: z.object({ title: z.string(), intro: z.string(), scope: z.string(), timeline: z.string(), deliverables: z.string(), terms: z.string(), total: z.number(), currency: z.string().default('USD') }),
})

export async function POST(req: NextRequest) {
  const json = await req.json()
  const data = schema.parse(json)
  const html = renderProposalHtml(data)
  const pdf = await htmlToPdf(html)
  return new Response(pdf, { headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': 'inline; filename="proposal.pdf"' } })
}