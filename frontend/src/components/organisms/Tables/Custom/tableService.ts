import { Checkbox } from '@/components/ui/checkbox'
import type { ICustomer } from '@/interfaces/atoms/ICustomer'
import type { IInvoice } from '@/interfaces/atoms/IInvoice'
import type { IProduct } from '@/interfaces/atoms/IProduct'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import type { ColumnDef } from '@tanstack/vue-table'
import { h, ref, type Ref } from 'vue'
import { z } from 'zod'

export default function TableService() {
  const { customerSchema, productSchema } = TableModel()
  const {
    baseColumns,
    customerItem,
    customerColumns,
    productItem,
    productColumns,
    invoiceItem,
    invoiceColumns
  } = TableData()

  return {
    baseColumns,
    customerItem,
    customerColumns,
    productItem,
    productColumns,
    invoiceItem,
    invoiceColumns,
    customerSchema,
    productSchema
  }
}
function TableHelper() {}

/// MODEL
function TableModel() {
  //Schemas
  const customerSchema = z.object({
    id: z.string().nullable(),
    name: z.string()
  })

  const productSchema = z.object({
    name: z.string(),
    unitPrice: z.number()
  })
  return { customerSchema, productSchema }
}

/// DATA
function TableData() {
  // Define initial values for products and customers
  const productItem: Ref<IProduct> = ref({
    name: '',
    unitPrice: 0,
    entityKey: AppModule.Product,
    status: EntityStatus.Created
  })
  const invoiceItem: Ref<IInvoice> = ref({
    name: '',
    customer: '',
    date: undefined,
    invoiceTotal: 0,
    number: 0,
    entityKey: AppModule.Order,
    status: EntityStatus.None
  })
  const customerItem: Ref<ICustomer> = ref({
    name: '',
    entityKey: AppModule.Customer,
    status: EntityStatus.Created
  })

  // Columns
  const baseColumns: ColumnDef<IBaseColumn>[] = [
    {
      id: 'select',
      header: ({ table }) =>
        h(Checkbox, {
          checked:
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate'),
          'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
          ariaLabel: 'Select all'
        }),
      cell: ({ row }) => {
        return h(Checkbox, {
          checked: row.getIsSelected(),
          'onUpdate:checked': (value) => row.toggleSelected(!!value),
          ariaLabel: 'Select row'
        })
      },
      enableSorting: false,
      enableHiding: false
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

  const invoiceColumns: ColumnDef<IInvoice>[] = [
    {
      id: 'select',
      header: ({ table }) =>
        h(Checkbox, {
          checked:
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate'),
          'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
          ariaLabel: 'Select all'
        }),
      cell: ({ row }) => {
        return h(Checkbox, {
          checked: row.getIsSelected(),
          'onUpdate:checked': (value) => row.toggleSelected(!!value),
          ariaLabel: 'Select row'
        })
      },
      enableSorting: false,
      enableHiding: false
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

  // Define columns for products
  const productColumns: ColumnDef<IProduct>[] = [
    {
      id: 'select',
      header: ({ table }) =>
        h(Checkbox, {
          checked:
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate'),
          'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
          ariaLabel: 'Select all'
        }),
      cell: ({ row }) => {
        return h(Checkbox, {
          checked: row.getIsSelected(),
          'onUpdate:checked': (value) => row.toggleSelected(!!value),
          ariaLabel: 'Select row'
        })
      },
      enableSorting: false,
      enableHiding: false
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
  const customerColumns: ColumnDef<ICustomer>[] = [
    {
      id: 'select',
      header: ({ table }) =>
        h(Checkbox, {
          checked:
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate'),
          'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
          ariaLabel: 'Select all'
        }),
      cell: ({ row }) => {
        return h(Checkbox, {
          checked: row.getIsSelected(),
          'onUpdate:checked': (value) => row.toggleSelected(!!value),
          ariaLabel: 'Select row'
        })
      },
      enableSorting: false,
      enableHiding: false
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
  return {
    baseColumns,
    customerItem,
    customerColumns,
    productItem,
    productColumns,
    invoiceItem,
    invoiceColumns
  }
}

export interface IBaseColumn {
  _id?: string
  name: string
  entityKey: AppModule
  status: string
}

export interface IForm {
  _id?: string
  name?: string
  entityKey?: AppModule
  status?: string
  invoice?: string
  product?: string
  unitPrice?: number
  quantity?: number
  lineTotal?: number
  number?: number
  customer?: string | undefined
  date?: Date
  invoiceTotal?: number
}

export interface DataTableProps {
  data: IBaseColumn[]
}
