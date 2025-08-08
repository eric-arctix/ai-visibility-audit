import { prisma } from '@/lib/prisma'

export default async function InvoicesListPage() {
  const invoices = await prisma.invoice.findMany({ orderBy: { createdAt: 'desc' }, include: { client: true } })
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Invoices</h1>
      <ul className="space-y-2">
        {invoices.map((i) => (
          <li key={i.id} className="rounded border bg-white p-3">
            <div className="font-medium">{i.client.name}</div>
            <div className="text-sm text-gray-600">Total: {i.total.toString()} {i.currency} · {new Date(i.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}