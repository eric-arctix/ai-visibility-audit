export function renderInvoiceHtml(data: any) {
  const { brand, client, invoice } = data
  const styles = `:root{--p:${brand.colors.primary};--s:${brand.colors.secondary};--a:${brand.colors.accent};--n:${brand.colors.neutral}}`
  const nf = new Intl.NumberFormat('en', { style: 'currency', currency: invoice.currency })
  const items = invoice.lineItems.map((li: any) => `
    <tr>
      <td>${escapeHtml(li.description)}</td>
      <td>${li.quantity}</td>
      <td>${nf.format(li.unitPrice)}</td>
      <td>${nf.format(li.total)}</td>
    </tr>`).join('')

  return `<!doctype html><html><head><meta charSet="utf-8"/><style>${styles}</style>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"/>
  <style>body{font-family:Inter,Arial,sans-serif;color:#111827}table{width:100%;border-collapse:collapse}th,td{border-bottom:1px solid #E5E7EB;padding:8px;text-align:left}.total{font-weight:700}</style>
  </head><body>
  <header style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
    <div>
      <div style="font-size:24px;font-weight:700">Invoice</div>
      <div style="color:var(--n)">${brand.companyName}</div>
    </div>
    ${brand.logoUrl ? `<img src="${brand.logoUrl}" alt="logo" style="height:48px"/>` : ''}
  </header>
  <section style="display:flex;justify-content:space-between;margin-bottom:16px">
    <div>
      <div style="font-weight:600">Bill To</div>
      <div>${escapeHtml(client.name)}${client.company ? ` · ${escapeHtml(client.company)}` : ''}</div>
    </div>
    <div>
      <div>Due Date: ${escapeHtml(invoice.dueDate)}</div>
    </div>
  </section>
  <table>
    <thead>
      <tr><th>Description</th><th>Qty</th><th>Unit</th><th>Total</th></tr>
    </thead>
    <tbody>${items}</tbody>
    <tfoot>
      <tr><td colSpan="3" style="text-align:right">Subtotal</td><td>${nf.format(invoice.subtotal)}</td></tr>
      <tr><td colSpan="3" style="text-align:right">Tax</td><td>${nf.format(invoice.tax)}</td></tr>
      <tr class="total"><td colSpan="3" style="text-align:right">Total</td><td>${nf.format(invoice.total)}</td></tr>
    </tfoot>
  </table>
  <section style="display:flex;justify-content:space-between;margin-top:24px;align-items:center">
    <div>
      <div style="font-weight:600">Payment Terms</div>
      <div>Payment due by the due date. Thank you for your business.</div>
    </div>
    <div style="text-align:center">
      <div style="font-size:12px;margin-bottom:4px">Scan to pay</div>
      <div style="width:100px;height:100px;background:#E5E7EB;display:inline-block"></div>
    </div>
  </section>
  ${invoice.paymentLink ? `<div style="margin-top:8px;font-size:12px">Payment Link: ${escapeHtml(invoice.paymentLink)}</div>` : ''}
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