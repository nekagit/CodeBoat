import type { IInvoiceLine } from '@/interfaces/shop/atoms/IShopModal' // Adjust the import path as needed
import InvoiceLineService from '@/service/InvoiceLineService' // Adjust the import path as needed
import { defineStore } from 'pinia'
import { useAppStore } from './appStore'

export const useInvoiceLineStore = defineStore('invoiceLine', {
  state: () => ({
    appStore: useAppStore(),
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async createInvoiceLine(newInvoiceLine: IInvoiceLine): Promise<IInvoiceLine[] | undefined> {
      try {
        console.log(newInvoiceLine)
        await InvoiceLineService.createInvoiceLine(newInvoiceLine)
        return await this.fetchAllInvoiceLines()
      } catch (error: any) {
        this.setError(error.message)
        throw error
      }
    },

    async fetchAllInvoiceLines(): Promise<IInvoiceLine[]> {
      try {
        this.appStore.invoiceLines = await InvoiceLineService.getAllInvoiceLines()
        return this.appStore.invoiceLines
      } catch (error: any) {
        this.setError(error.message)
        return this.appStore.invoiceLines
      }
    },

    async getInvoiceLineById(id: string): Promise<IInvoiceLine | null> {
      try {
        return await InvoiceLineService.getInvoiceLineById(id)
      } catch (error: any) {
        this.setError(error.message)
        return null
      }
    },

    async updateInvoiceLineById(
      id: string,
      updatedInvoiceLineData: Partial<IInvoiceLine>
    ): Promise<void> {
      try {
        await InvoiceLineService.updateInvoiceLineById(id, updatedInvoiceLineData)
        await this.fetchAllInvoiceLines()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteInvoiceLineById(id: string): Promise<void> {
      try {
        await InvoiceLineService.deleteInvoiceLineById(id)
        await this.fetchAllInvoiceLines()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteAllInvoiceLines(): Promise<void> {
      try {
        await InvoiceLineService.deleteAllInvoiceLines()
        await this.fetchAllInvoiceLines()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    setError(errorMessage: string | null): void {
      this.error = errorMessage
    }
  }
})
