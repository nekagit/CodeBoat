import type { IInvoice } from '@/interfaces/shop/atoms/IShopModal' // Adjust the import path as needed
import InvoiceService from '@/service/InvoiceService' // Adjust the import path as needed
import { defineStore } from 'pinia'
import { useAppStore } from './appStore'

export const useInvoiceStore = defineStore('invoice', {
  state: () => ({
    appStore: useAppStore(),
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async createInvoice(newInvoice: IInvoice): Promise<IInvoice[] | undefined> {
      try {
        await InvoiceService.createInvoice(newInvoice)
        return await this.fetchAllInvoices()
      } catch (error: any) {
        this.setError(error.message)
        throw error
      }
    },

    async fetchAllInvoices(): Promise<IInvoice[]> {
      try {
        this.appStore.invoices = await InvoiceService.getAllInvoices()
        return this.appStore.invoices
      } catch (error: any) {
        this.setError(error.message)
        return this.appStore.invoices
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
