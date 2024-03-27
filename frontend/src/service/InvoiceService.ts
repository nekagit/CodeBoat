import type { IInvoice } from '@/interfaces/atoms/IShopModal' // Adjust the import path as needed
import axios from 'axios'

const API_URL = 'http://codeboatbackend.netlify.app/api/invoices' // Adjust the URL as needed

const InvoiceService = {
  async createInvoice(newInvoice: IInvoice): Promise<IInvoice> {
    try {
      // Manipulate the data of newInvoice if needed

      const tmp = { ...newInvoice }
      // Make the request with the manipulated invoice data
      const response = await axios.post(API_URL, tmp)
      console.log('createion guud', response.data)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to create invoice')
    }
  },
  async getAllInvoices(): Promise<IInvoice[]> {
    try {
      const response = await axios.get(API_URL)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to fetch invoices')
    }
  },

  async getInvoiceById(id: string): Promise<IInvoice> {
    try {
      const response = await axios.get(`${API_URL}/${id}`)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to fetch invoice')
    }
  },

  async updateInvoiceById(id: string, updatedInvoiceData: Partial<IInvoice>): Promise<void> {
    try {
      await axios.put(`${API_URL}/${id}`, updatedInvoiceData)
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to update invoice')
    }
  },

  async deleteInvoiceById(id: string): Promise<void> {
    try {
      await axios.delete(`${API_URL}/${id}`)
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to delete invoice')
    }
  },

  async deleteAllInvoices(): Promise<void> {
    try {
      await axios.delete(API_URL)
    } catch (error: any) {
      throw new Error(error.response.data.message || 'Failed to delete all invoices')
    }
  }
}

export default InvoiceService
