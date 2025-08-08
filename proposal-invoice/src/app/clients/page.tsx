import { prisma } from '@/lib/prisma'

export default async function ClientsPage() {
  const clients = await prisma.client.findMany({ orderBy: { name: 'asc' } })
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Clients</h1>
      <ul className="space-y-2">
        {clients.map((c) => (
          <li key={c.id} className="rounded border bg-white p-3">
            <div className="font-medium">{c.name}</div>
            <div className="text-sm text-gray-600">{c.email}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}