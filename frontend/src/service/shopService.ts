import { useCustomerStore } from '@/stores/customerStore'
import { useInvoiceLineStore } from '@/stores/invoiceLineStore'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { useProductStore } from '@/stores/productsStore'

// Rename the interface to avoid naming conflict
export interface IAppStoreService {
  customerStore: typeof useCustomerStore
  invoiceLineStore: typeof useInvoiceLineStore
  invoiceStore: typeof useInvoiceStore
  productStore: typeof useProductStore
}

const ShopService: IAppStoreService = {
  customerStore: useCustomerStore,
  invoiceLineStore: useInvoiceLineStore,
  invoiceStore: useInvoiceStore,
  productStore: useProductStore
}

export default ShopService
