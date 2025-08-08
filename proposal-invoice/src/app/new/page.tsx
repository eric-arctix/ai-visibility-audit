'use client'

import { useState } from 'react'
import dayjs from 'dayjs'

const initial = {
  client: { name: '', email: '', company: '' },
  scope: '',
  pricing: [{ description: 'Service fee', quantity: 1, unitPrice: 1000 }],
  terms: 'Payment due upon receipt.',
  title: 'Project Proposal',
  intro: 'Thank you for the opportunity. Below is our proposal.',
}

export default function NewWizardPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initial)
  const [tone, setTone] = useState<'professional' | 'friendly'>('professional')

  const subtotal = form.pricing.reduce((s, li) => s + li.quantity * li.unitPrice, 0)
  const tax = Math.round(subtotal * 0.1 * 100) / 100
  const total = subtotal + tax

  async function polish(field: 'intro' | 'scope' | 'terms') {
    const res = await fetch('/api/ai/polish', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sectionText: (form as any)[field] || '', tone }) })
    const data = await res.json()
    if (data.text) setForm((f) => ({ ...f, [field]: data.text }))
  }

  function next() { setStep((s) => Math.min(s + 1, 5)) }
  function prev() { setStep((s) => Math.max(s - 1, 0)) }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">New Proposal & Invoice</h1>
        <div className="flex items-center gap-2">
          <div className="text-sm">Tone:</div>
          <select value={tone} onChange={(e) => setTone(e.target.value as any)} className="rounded border">
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
          </select>
        </div>
        {step === 0 && (
          <div className="space-y-2">
            <div className="font-medium">Client</div>
            <input className="w-full rounded border" placeholder="Name" value={form.client.name} onChange={(e) => setForm({ ...form, client: { ...form.client, name: e.target.value } })} />
            <input className="w-full rounded border" placeholder="Email" value={form.client.email} onChange={(e) => setForm({ ...form, client: { ...form.client, email: e.target.value } })} />
            <input className="w-full rounded border" placeholder="Company" value={form.client.company} onChange={(e) => setForm({ ...form, client: { ...form.client, company: e.target.value } })} />
          </div>
        )}
        {step === 1 && (
          <div className="space-y-2">
            <div className="font-medium">Scope</div>
            <textarea className="w-full rounded border h-40" value={form.scope} onChange={(e) => setForm({ ...form, scope: e.target.value })} />
            <button onClick={() => polish('scope')} className="rounded bg-primary text-white px-3 py-1">AI Polish</button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-2">
            <div className="font-medium">Pricing</div>
            {form.pricing.map((li, i) => (
              <div key={i} className="grid grid-cols-2 gap-2">
                <input className="rounded border" value={li.description} onChange={(e) => setForm({ ...form, pricing: form.pricing.map((x, idx) => idx === i ? { ...x, description: e.target.value } : x) })} />
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" className="rounded border" value={li.quantity} onChange={(e) => setForm({ ...form, pricing: form.pricing.map((x, idx) => idx === i ? { ...x, quantity: Number(e.target.value) } : x) })} />
                  <input type="number" className="rounded border" value={li.unitPrice} onChange={(e) => setForm({ ...form, pricing: form.pricing.map((x, idx) => idx === i ? { ...x, unitPrice: Number(e.target.value) } : x) })} />
                </div>
              </div>
            ))}
            <button className="rounded border px-2 py-1" onClick={() => setForm({ ...form, pricing: [...form.pricing, { description: '', quantity: 1, unitPrice: 0 }] })}>Add line</button>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-2">
            <div className="font-medium">Terms</div>
            <textarea className="w-full rounded border h-40" value={form.terms} onChange={(e) => setForm({ ...form, terms: e.target.value })} />
            <button onClick={() => polish('terms')} className="rounded bg-primary text-white px-3 py-1">AI Polish</button>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-2">
            <div className="font-medium">Review</div>
            <input className="w-full rounded border" placeholder="Proposal Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <textarea className="w-full rounded border h-24" value={form.intro} onChange={(e) => setForm({ ...form, intro: e.target.value })} />
            <button onClick={() => polish('intro')} className="rounded bg-primary text-white px-3 py-1">AI Polish</button>
          </div>
        )}
        <div className="flex items-center gap-2">
          <button onClick={prev} className="rounded border px-3 py-1" disabled={step===0}>Back</button>
          <button onClick={next} className="rounded bg-primary text-white px-3 py-1" disabled={step===5}>{step<5?'Next':'Done'}</button>
        </div>
        {step === 5 && (
          <GenerateActions form={form} totals={{ subtotal, tax, total }} />
        )}
      </div>
      <div className="space-y-4">
        <div className="rounded border bg-white p-4">
          <div className="font-medium mb-2">Proposal Preview</div>
          <div className="text-sm">{form.title}</div>
          <div className="text-sm">Client: {form.client.name}</div>
          <div className="mt-2 text-sm whitespace-pre-wrap">{form.intro}</div>
          <div className="mt-2 text-sm whitespace-pre-wrap">{form.scope}</div>
          <div className="mt-2 text-sm whitespace-pre-wrap">{form.terms}</div>
        </div>
        <div className="rounded border bg-white p-4">
          <div className="font-medium mb-2">Invoice Preview</div>
          <div className="text-sm">Due: {dayjs().add(14,'day').format('YYYY-MM-DD')}</div>
          <div className="mt-2 grid grid-cols-4 text-sm font-medium">
            <div>Description</div><div>Qty</div><div>Unit</div><div>Total</div>
          </div>
          {form.pricing.map((li, idx) => (
            <div key={idx} className="mt-1 grid grid-cols-4 text-sm">
              <div>{li.description}</div>
              <div>{li.quantity}</div>
              <div>${li.unitPrice.toFixed(2)}</div>
              <div>${(li.quantity*li.unitPrice).toFixed(2)}</div>
            </div>
          ))}
          <div className="mt-2 text-right text-sm">Subtotal ${subtotal.toFixed(2)}</div>
          <div className="text-right text-sm">Tax ${tax.toFixed(2)}</div>
          <div className="text-right font-semibold">Total ${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

function GenerateActions({ form, totals }: any) {
  const brand = { companyName: 'Acme Solutions LLC', logoUrl: '/storage/uploads/logo.png', colors: { primary: '#2563EB', secondary: '#0EA5E9', accent: '#F59E0B', neutral: '#111827' } }
  async function handleGenerate() {
    const proposalPayload = { brand, client: { name: form.client.name, company: form.client.company }, proposal: { title: form.title, intro: form.intro, scope: form.scope, timeline: '2 weeks from start', deliverables: 'As listed in scope', terms: form.terms, total: totals.total, currency: 'USD' } }
    const invoicePayload = { brand, client: { name: form.client.name, company: form.client.company, email: form.client.email }, invoice: { lineItems: form.pricing.map((li: any) => ({ ...li, total: li.quantity*li.unitPrice })), subtotal: totals.subtotal, tax: totals.tax, total: totals.total, currency: 'USD', dueDate: dayjs().add(14,'day').format('YYYY-MM-DD') } }

    const [propRes, invRes] = await Promise.all([
      fetch('/api/pdf/proposal', { method: 'POST', body: JSON.stringify(proposalPayload) }),
      fetch('/api/pdf/invoice', { method: 'POST', body: JSON.stringify(invoicePayload) })
    ])

    const [propBuf, invBuf] = await Promise.all([propRes.arrayBuffer(), invRes.arrayBuffer()])

    const toBase64 = (buf: ArrayBuffer) =>
      btoa(String.fromCharCode(...Array.from(new Uint8Array(buf))))

    // Save to storage
    await fetch('/api/storage/save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ proposal: toBase64(propBuf), invoice: toBase64(invBuf) }) })
    alert('Generated and saved! Navigate to Proposals/Invoices to view.')
  }
  return (
    <div className="flex items-center gap-2">
      <button onClick={handleGenerate} className="rounded bg-accent px-3 py-1">Generate PDFs</button>
    </div>
  )
}