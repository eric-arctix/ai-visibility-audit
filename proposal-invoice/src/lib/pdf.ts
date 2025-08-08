import puppeteer, { PDFOptions } from 'puppeteer'

export async function htmlToPdf(html: string, pdfOptions: PDFOptions = {}) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-extensions',
      '--disable-gpu',
      '--single-process'
    ]
  })
  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '20mm', bottom: '20mm', left: '16mm', right: '16mm' },
      ...pdfOptions,
    })
    return pdf
  } finally {
    await browser.close()
  }
}