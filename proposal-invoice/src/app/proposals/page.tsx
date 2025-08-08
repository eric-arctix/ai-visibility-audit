import { prisma } from '@/lib/prisma'

export default async function ProposalsListPage() {
  const proposals = await prisma.proposal.findMany({ orderBy: { createdAt: 'desc' }, include: { client: true } })
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Proposals</h1>
      <ul className="space-y-2">
        {proposals.map((p) => (
          <li key={p.id} className="rounded border bg-white p-3">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm text-gray-600">Client: {p.client.name} · {new Date(p.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}