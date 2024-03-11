import type { ICustomer } from '@/interfaces/atoms/ICustomer' // Adjust the import path as needed
import CustomerService from '@/service/CustomerService' // Adjust the import path as needed
import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    customers: [] as ICustomer[],
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async onInit() {
      await this.fetchAllCustomers() // Fetch customers when the store is initialized
    },

    async createCustomer(newCustomer: ICustomer): Promise<ICustomer> {
      try {
        const createdCustomer = await CustomerService.createCustomer(newCustomer)
        await this.fetchAllCustomers()
        return createdCustomer
      } catch (error: any) {
        this.setError(error.message)
        throw error
      }
    },

    async fetchAllCustomers(): Promise<void> {
      try {
        this.isLoading = true
        this.customers = await CustomerService.getAllCustomers()
        this.isLoading = false
      } catch (error: any) {
        this.setError(error.message)
        this.isLoading = false
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
        await this.fetchAllCustomers()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteCustomerById(id: string): Promise<void> {
      try {
        await CustomerService.deleteCustomerById(id)
        await this.fetchAllCustomers()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteAllCustomers(): Promise<void> {
      try {
        await CustomerService.deleteAllCustomers()
        await this.fetchAllCustomers()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    setError(errorMessage: string | null): void {
      this.error = errorMessage
    }
  }
})
