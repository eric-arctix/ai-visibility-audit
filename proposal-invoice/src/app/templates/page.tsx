import { prisma } from '@/lib/prisma'

export default async function TemplatesPage() {
  const templates = await prisma.template.findMany({ orderBy: { updatedAt: 'desc' } })
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-4">Templates</h1>
      <ul className="space-y-2">
        {templates.map((t) => (
          <li key={t.id} className="rounded border bg-white p-3">
            <div className="font-medium">{t.title}</div>
            <div className="text-sm text-gray-600">{t.category}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}