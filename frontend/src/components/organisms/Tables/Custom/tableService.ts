import type { IInvoice } from '@/interfaces/atoms/IInvoice'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import type { ColumnDef } from '@tanstack/vue-table'
import { ref, type Ref } from 'vue'

export const invoiceColumns: ColumnDef<IInvoice>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => row.original._id
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => row.original.name
  },
  {
    accessorKey: 'number',
    header: 'Number',
    cell: ({ row }) => row.original.number
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => row.original.status
  },
  {
    accessorKey: 'entityKey',
    header: 'Type',
    cell: ({ row }) => row.original.entityKey
  },
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => row.original.customer
  },
  {
    accessorKey: 'date',
    header: 'Creation',
    cell: ({ row }) => row.original.date
  },
  {
    accessorKey: 'invoiceTotal',
    header: 'Total',
    cell: ({ row }) => row.original.invoiceTotal
  }
]
export const invoiceItem: Ref<IInvoice> = ref({
  name: '',
  customer: '',
  date: undefined,
  invoiceTotal: 0,
  number: 0,
  entityKey: AppModule.Order,
  status: EntityStatus.None
})


// Define types for products and customers
interface IProduct {
  id: string;
  name: string;
  unitPrice: number;
  status: EntityStatus;
  entityKey: AppModule.Product;
}

interface ICustomer {
  id: string;
  name: string;
  status: EntityStatus;
  entityKey: AppModule.Customer;
}

// Define columns for products
export const productColumns: ColumnDef<IProduct>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => row.original.id
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => row.original.name
  },
  {
    accessorKey: 'unitPrice',
    header: 'Unit Price',
    cell: ({ row }) => row.original.unitPrice
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => row.original.status
  },
  {
    accessorKey: 'entityKey',
    header: 'Type',
    cell: ({ row }) => row.original.entityKey
  }
]

// Define columns for customers
export const customerColumns: ColumnDef<ICustomer>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => row.original.id
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => row.original.name
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => row.original.status
  },
  {
    accessorKey: 'entityKey',
    header: 'Type',
    cell: ({ row }) => row.original.entityKey
  }
]

// Define initial values for products and customers
export const productItem: Ref<IProduct> = ref({
  id: '',
  name: '',
  unitPrice: 0,
  status: EntityStatus.None,
  entityKey: AppModule.Product
})

export const customerItem: Ref<ICustomer> = ref({
  id: '',
  name: '',
  status: EntityStatus.None,
  entityKey: AppModule.Customer
})

// Define instance checks for products and customers
export function instanceOfIProduct(object: any): object is IProduct {
  return 'unitPrice' in object;
}

export function instanceOfICustomer(object: any): object is ICustomer {
  return 'status' in object;
}
export function instanceOfIInvoice(object: any): object is IInvoice {
  return 'customer' in object
}