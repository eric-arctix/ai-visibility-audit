import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function polishCopy(sectionText: string, tone: 'professional' | 'friendly') {
  const system = `You are a precise copy editor. Only improve clarity, grammar, and tone (${tone}). Do not invent facts, prices, dates, names, or scope. Keep meaning intact. Return only the improved text.`
  const user = `Text to improve:\n\n${sectionText}`
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
    temperature: 0.2,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ]
  })
  return completion.choices[0]?.message?.content?.trim() ?? sectionText
}