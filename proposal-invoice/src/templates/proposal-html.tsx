export function renderProposalHtml(data: any) {
  const { brand, client, proposal } = data
  const nf = new Intl.NumberFormat('en', { style: 'currency', currency: proposal.currency })
  const styles = `:root{--p:${brand.colors.primary};--s:${brand.colors.secondary};--a:${brand.colors.accent};--n:${brand.colors.neutral}}`
  return `<!doctype html><html><head><meta charSet="utf-8"/><style>${styles}</style>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"/>
  <style>body{font-family:Inter,Arial,sans-serif;color:#111827}.muted{color:#6B7280}.chip{background:var(--p);color:#fff;padding:2px 8px;border-radius:9999px;font-size:12px}</style>
  </head><body>
  <header style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
    <div>
      <div style="font-size:24px;font-weight:700">${brand.companyName}</div>
      <div class="muted">Proposal</div>
    </div>
    ${brand.logoUrl ? `<img src="${brand.logoUrl}" alt="logo" style="height:48px"/>` : ''}
  </header>
  <section style="margin-bottom:16px">
    <div class="chip">${escapeHtml(proposal.title)}</div>
    <div class="muted" style="margin-top:8px">Prepared for ${escapeHtml(client.name)}${client.company ? ` · ${escapeHtml(client.company)}` : ''}</div>
  </section>
  <hr/>
  <section>
    <h2>Introduction</h2>
    <p>${escapeHtml(proposal.intro)}</p>
    <h2>Scope</h2>
    <p style="white-space:pre-wrap">${escapeHtml(proposal.scope)}</p>
    <h2>Timeline</h2>
    <p>${escapeHtml(proposal.timeline)}</p>
    <h2>Deliverables</h2>
    <p style="white-space:pre-wrap">${escapeHtml(proposal.deliverables)}</p>
    <h2>Terms</h2>
    <p style="white-space:pre-wrap">${escapeHtml(proposal.terms)}</p>
    <h2>Investment</h2>
    <p style="font-size:20px;font-weight:700">${nf.format(proposal.total)}</p>
    <div style="margin-top:24px">
      <div class="muted">Signature</div>
      <div style="height:48px;border-bottom:1px solid #E5E7EB;width:320px"></div>
    </div>
  </section>
  </body></html>`
}

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}