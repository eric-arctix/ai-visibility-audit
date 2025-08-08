export const runtime = 'nodejs'
import { NextResponse } from 'next/server'

export async function GET() {
  const html = `<!doctype html><html><body><h2>Acme Solutions LLC sent you documents</h2><p>Hi Jane Client,</p><p>Your proposal and invoice are ready.</p><p><a href="#">View Proposal</a> · <a href="#">View Invoice</a></p></body></html>`
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } })
}