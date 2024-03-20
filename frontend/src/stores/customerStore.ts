import CustomerService from '@/service/CustomerService' // Adjust the import path as needed
import { defineStore } from 'pinia'
import { useAppStore } from './appStore'
import type { ICustomer } from '@/interfaces/atoms/IShopModal'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    appStore: useAppStore(),
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async createCustomer(newCustomer: ICustomer): Promise<ICustomer[]> {
      try {
        await CustomerService.createCustomer(newCustomer)
        return await this.fetchAllCustomers()
      } catch (error: any) {
        this.setError(error.message)
        throw error
      }
    },

    async fetchAllCustomers(): Promise<ICustomer[]> {
      try {
        this.appStore.customers = await CustomerService.getAllCustomers()
        return this.appStore.customers
      } catch (error: any) {
        this.setError(error.message)
        return this.appStore.customers
      }
    },

    async getCustomerById(id: string): Promise<ICustomer | null> {
      try {
        return await CustomerService.getCustomerById(id)
      } catch (error: any) {
        this.setError(error.message)
        return null
      }
    },

    async updateCustomerById(id: string, updatedCustomerData: Partial<ICustomer>): Promise<void> {
      try {
        await CustomerService.updateCustomerById(id, updatedCustomerData)
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteCustomerById(id: string): Promise<void> {
      try {
        await CustomerService.deleteCustomerById(id)
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteAllCustomers(): Promise<void> {
      try {
        await CustomerService.deleteAllCustomers()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    setError(errorMessage: string | null): void {
      this.error = errorMessage
    }
  }
})
