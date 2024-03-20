import type { ICustomer } from '@/interfaces/atoms/ICustomer'
import type { IInvoice } from '@/interfaces/atoms/IInvoice' // Adjust the import path as needed
import type { IProduct } from '@/interfaces/atoms/IProduct'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import type { IForm } from '@/interfaces/TableInterfaces'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { useCustomerStore } from './customerStore'
import { useInvoiceStore } from './invoiceStore'
import { useProductStore } from './productsStore'
export const useAppStore = defineStore('app', {
  state: () => ({
    invoices: ref([]) as Ref<IInvoice[]>,
    products: ref([]) as Ref<IProduct[]>,
    customers: ref([]) as Ref<ICustomer[]>,
    freshFetch: ref(false),
    error: null as string | null
  }),

  actions: {
    async onInit() {
      console.log('init start')
      await this.fetchData()
      this.freshFetch = true
      console.log('init over', this.freshFetch)

    },

    async createEdit(values: IForm, editMode: boolean, appMod: string): Promise<any[] | undefined> {
      const manipulatedValues = { ...values }
      if (editMode) {
        if (appMod == AppModule.Order) {
          await useInvoiceStore().updateInvoiceById(
            manipulatedValues._id as string,
            {
              name: manipulatedValues.name,
              number: manipulatedValues.number,
              status: EntityStatus.Created,
              entityKey: AppModule.Order,
              customer: manipulatedValues.customer,
              date: new Date().toISOString(), // This will set the date to the current date and time
              invoiceTotal: manipulatedValues.invoiceTotal
            } as IInvoice
          )
          await useInvoiceStore().fetchAllInvoices()
        } else if (appMod == AppModule.Product) {
          await useProductStore().updateProductById(
            manipulatedValues._id as string,
            {
              name: manipulatedValues.name,
              unitPrice: manipulatedValues.unitPrice,
              status: EntityStatus.Created,
              entityKey: AppModule.Product
            } as IProduct
          )
          await useProductStore().fetchAllProducts()
        } else if (appMod == AppModule.Customer) {
          await useCustomerStore().updateCustomerById(
            manipulatedValues._id as string,
            {
              name: manipulatedValues.name,
              status: EntityStatus.Created,
              entityKey: AppModule.Customer
            } as ICustomer
          )
        }
        await useCustomerStore().fetchAllCustomers()
      } else {
        if (appMod == AppModule.Order) {
          return (
            (await useInvoiceStore().createInvoice({
              name: manipulatedValues.name,
              number: manipulatedValues.number,
              status: EntityStatus.Created,
              entityKey: AppModule.Order,
              customer: manipulatedValues.customer,
              date: new Date().toISOString(), // This will set the date to the current date and time
              invoiceTotal: manipulatedValues.invoiceTotal
            } as IInvoice)) ?? []
          )
        } else if (appMod == AppModule.Product) {
          return (
            (await useProductStore().createProduct({
              name: manipulatedValues.name,
              unitPrice: manipulatedValues.unitPrice,
              status: EntityStatus.Created,
              entityKey: AppModule.Product
            } as IProduct)) ?? []
          )
        } else if (appMod == AppModule.Customer) {
          return (
            (await useCustomerStore().createCustomer({
              name: manipulatedValues.name,
              status: EntityStatus.Created,
              entityKey: AppModule.Customer
            } as ICustomer)) ?? []
          )
        }
      }
      this.freshFetch = true
      console.log("create edit over" ,this.freshFetch)
    },
    async initCustomerTable(): Promise<ICustomer[]> {
      const customerStore = useCustomerStore()
      const sampleCustomer = {
        name: 'sampleCustomer',
        entityKey: AppModule.Customer,
        status: EntityStatus.Created
      } as ICustomer
      await customerStore.createCustomer(sampleCustomer)
      const response = await customerStore.fetchAllCustomers()
      return response
    },
    async initProductTable(): Promise<IProduct[]> {
      const productStore = useProductStore()
      const sampleProduct = {
        name: 'sampleProduct',
        unitPrice: 0,
        entityKey: AppModule.Product,
        status: EntityStatus.Created
      } as IProduct
      const response = await productStore.createProduct(sampleProduct)
      return response ?? []
    },

    async initInvoiceTable(id: string): Promise<IInvoice[]> {
      const invoiceStore = useInvoiceStore()
      const sampleInvoice = {
        name: 'sampleInvoice',
        number: 1001,
        customer: id,
        date: new Date('2024-03-13').toISOString(),
        invoiceTotal: 150.75,
        status: EntityStatus.Created,
        entityKey: AppModule.Order
      } as IInvoice
      const response = await invoiceStore.createInvoice(sampleInvoice)
      return response ?? []
    },
    async fetchData() {
      const responseProducts = await useProductStore().fetchAllProducts()
      const responseInvoices = await useInvoiceStore().fetchAllInvoices()
      const responseCustomers = await useCustomerStore().fetchAllCustomers()
      console.log('fetched Data', responseProducts)
      if (responseCustomers?.length < 1) {
        console.log('offline init')
        this.customers = await this.initCustomerTable()
      } else if (responseProducts?.length < 1) {
        this.products = await this.initProductTable()
      } else if (responseInvoices?.length < 1 && this.customers[0]._id != undefined) {
        this.invoices = await this.initInvoiceTable(this.customers[0]._id)
      } else {
        this.customers = responseCustomers
        this.products = responseProducts
        console.log('store available', this.products)
        this.invoices = responseInvoices
      }
    }
  }
})
