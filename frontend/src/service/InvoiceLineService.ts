import type { IInvoiceLine } from '@/interfaces/atoms/IShopModal' // Adjust the import path as needed
import axios from 'axios'

const API_URL = 'http://localhost:8080/api/invoiceLines' // Adjust the URL as needed

const InvoiceLineService = {
  async createInvoiceLine(newInvoiceLine: IInvoiceLine): Promise<IInvoiceLine> {
    try {
      // Manipulate the data of newInvoiceLine if needed

      const tmp = { ...newInvoiceLine }
      // Make the request with the manipulated invoiceLine data
      const response = await axios.post(API_URL, tmp)
      console.log('createion guud', response.data)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to create invoiceLine')
    }
  },
  async getAllInvoiceLines(): Promise<IInvoiceLine[]> {
    try {
      const response = await axios.get(API_URL)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to fetch invoiceLines')
    }
  },

  async getInvoiceLineById(id: string): Promise<IInvoiceLine> {
    try {
      const response = await axios.get(`${API_URL}/${id}`)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to fetch invoiceLine')
    }
  },

  async updateInvoiceLineById(
    id: string,
    updatedInvoiceLineData: Partial<IInvoiceLine>
  ): Promise<void> {
    try {
      await axios.put(`${API_URL}/${id}`, updatedInvoiceLineData)
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to update invoiceLine')
    }
  },

  async deleteInvoiceLineById(id: string): Promise<void> {
    try {
      await axios.delete(API_URL, {
        data: { id: id }
      })
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to delete invoiceLine')
    }
  },

  async deleteAllInvoiceLines(): Promise<void> {
    try {
      await axios.delete(API_URL)
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to delete all invoiceLines')
    }
  }
}

export default InvoiceLineService
