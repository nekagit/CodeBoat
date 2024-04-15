import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs'

export default function ChatBotService() {
  async function downloadPdf(pdfUrl, destinationPath) {
    try {
      const response = await axios({
        method: 'get',
        url: pdfUrl,
        responseType: 'stream'
      })

      const writer = fs.createWriteStream(destinationPath)
      response.data.pipe(writer)

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
      })
    } catch (error) {
      console.error('Error downloading PDF:', error.message)
      throw error
    }
  }

  async function extractPDFs(url) {
    try {
      const response = await axios.get(url)
      const $ = cheerio.load(response.data)

      // Extract PDF URLs
      const pdfs = []

      $('a[href$=".pdf"]').each((index, element) => {
        const pdfUrl = $(element).attr('href')
        pdfs.push(pdfUrl)
      })

      return pdfs
    } catch (error) {
      console.error('Error extracting PDFs:', error.message)
      throw error
    }
  }

  async function downloadFromWebsite() {
    try {
      const targetUrl = 'https://www.tu-dortmund.de/studierende/im-studium/antraege-formulare/' // Replace with your target URL
      const pdfs = await extractPDFs(targetUrl)

      await Promise.all(pdfs.map((pdf, index) => downloadPdf(pdf, `./tu-dortmund${index}.pdf`)))

      console.log('PDFs downloaded successfully.')
    } catch (error) {
      console.error('Failed to download PDFs:', error.message)
    }
  }
}
