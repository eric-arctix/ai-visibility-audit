export const runtime = 'nodejs'
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { htmlToPdf } from '@/lib/pdf'
import { renderInvoiceHtml } from '@/templates/invoice-html'

const schema = z.object({
  brand: z.object({ companyName: z.string(), logoUrl: z.string().optional(), colors: z.object({ primary: z.string(), secondary: z.string(), accent: z.string(), neutral: z.string() }) }),
  client: z.object({ name: z.string(), company: z.string().optional(), email: z.string().email().optional() }),
  invoice: z.object({
    lineItems: z.array(z.object({ description: z.string(), quantity: z.number(), unitPrice: z.number(), total: z.number() })),
    subtotal: z.number(), tax: z.number(), total: z.number(),
    currency: z.string().default('USD'),
    dueDate: z.string(),
    paymentLink: z.string().optional()
  })
})

export async function POST(req: NextRequest) {
  const json = await req.json()
  const data = schema.parse(json)
  const html = renderInvoiceHtml(data)
  const pdf = await htmlToPdf(html)
  return new Response(pdf, { headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': 'inline; filename="invoice.pdf"' } })
}