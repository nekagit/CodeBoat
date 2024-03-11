import { defineStore } from 'pinia'
import InvoiceService from '@/service/InvoiceService' // Adjust the import path as needed
import type { IInvoice } from '@/interfaces/atoms/IInvoice' // Adjust the import path as needed

export const useInvoiceStore = defineStore('invoice', {
  state: () => ({
    invoices: [] as IInvoice[],
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async onInit() {
      await this.fetchAllInvoices() // Fetch invoices when the store is initialized
    },

    async createInvoice(newInvoice: IInvoice): Promise<IInvoice> {
      try {
        const createdInvoice = await InvoiceService.createInvoice(newInvoice)
        await this.fetchAllInvoices()
        return createdInvoice
      } catch (error: any) {
        this.setError(error.message)
        throw error
      }
    },

    async fetchAllInvoices(): Promise<void> {
      try {
        this.isLoading = true
        this.invoices = await InvoiceService.getAllInvoices()
        this.isLoading = false
      } catch (error: any) {
        this.setError(error.message)
        this.isLoading = false
      }
    },

    async getInvoiceById(id: string): Promise<IInvoice | null> {
      try {
        return await InvoiceService.getInvoiceById(id)
      } catch (error: any) {
        this.setError(error.message)
        return null
      }
    },

    async updateInvoiceById(id: string, updatedInvoiceData: Partial<IInvoice>): Promise<void> {
      try {
        await InvoiceService.updateInvoiceById(id, updatedInvoiceData)
        await this.fetchAllInvoices()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteInvoiceById(id: string): Promise<void> {
      try {
        await InvoiceService.deleteInvoiceById(id)
        await this.fetchAllInvoices()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteAllInvoices(): Promise<void> {
      try {
        await InvoiceService.deleteAllInvoices()
        await this.fetchAllInvoices()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    setError(errorMessage: string | null): void {
      this.error = errorMessage
    }
  }
})
