'use client'

import { useState } from 'react'

export default function SettingsPage() {
  const [brand, setBrand] = useState({ companyName: 'Acme Solutions LLC', emailFrom: 'acme@yourdomain.com', primary: '#2563EB', secondary: '#0EA5E9', accent: '#F59E0B', neutral: '#111827' })

  async function save() {
    const res = await fetch('/api/settings/brand', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(brand) })
    if (!res.ok) alert('Failed')
    else alert('Saved')
  }

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Branding</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="rounded border" placeholder="Company Name" value={brand.companyName} onChange={(e) => setBrand({ ...brand, companyName: e.target.value })} />
        <input className="rounded border" placeholder="Email From" value={brand.emailFrom} onChange={(e) => setBrand({ ...brand, emailFrom: e.target.value })} />
        <input type="color" value={brand.primary} onChange={(e) => setBrand({ ...brand, primary: e.target.value })} />
        <input type="color" value={brand.secondary} onChange={(e) => setBrand({ ...brand, secondary: e.target.value })} />
        <input type="color" value={brand.accent} onChange={(e) => setBrand({ ...brand, accent: e.target.value })} />
        <input type="color" value={brand.neutral} onChange={(e) => setBrand({ ...brand, neutral: e.target.value })} />
      </div>
      <button onClick={save} className="rounded bg-primary text-white px-3 py-1">Save</button>
    </main>
  )
}