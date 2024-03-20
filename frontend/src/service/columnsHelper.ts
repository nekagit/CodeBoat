import DropdownAction from '@/components/molekules/DataTableAction.vue'
import { Checkbox } from '@/components/ui/checkbox'
import type { ICustomer } from '@/interfaces/atoms/ICustomer'
import type { IInvoice } from '@/interfaces/atoms/IInvoice'
import type { IProduct } from '@/interfaces/atoms/IProduct'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import type { IBaseColumn, IForm } from '@/interfaces/TableInterfaces'
import type { ColumnDef } from '@tanstack/vue-table'
import { h, ref, type Ref } from 'vue'
export default function ColumnsHelper() {
  const productItem: Ref<IProduct> = ref({
    name: '',
    unitPrice: 0,
    entityKey: AppModule.Product,
    status: EntityStatus.Created
  })
  const invoiceItem: Ref<IInvoice> = ref({
    name: '',
    customer: '',
    date: new Date().toISOString(),
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
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const item = row.original
        return h(
          'div',
          { class: 'relative' },
          h(DropdownAction, {
            item
          })
        )
      }
    }
  ]

  const invoiceColumns: ColumnDef<IInvoice>[] = [
    {
      accessorKey: 'id',
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
    },
    {
      accessorKey: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const item = {
          _id: row.original._id,
          name: row.original.name ?? '',
          number: row.original.number ?? 0,
          customer: row.original.customer ?? '',
          date: row.original.date ?? new Date(),
          invoiceTotal: row.original.invoiceTotal ?? 0,
          status: row.original.status ?? EntityStatus.None,
          entityKey: row.original.entityKey ?? AppModule.Order
        } as IInvoice
        return h(
          'div',
          { class: 'relative' },
          h(DropdownAction, {
            item
          })
        )
      }
    }
  ]

  // Define columns for products
  const productColumns: ColumnDef<IProduct>[] = [
    {
      accessorKey: 'id',

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
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const item = {
          _id: row.original._id,
          name: row.original.name ?? ' ',
          unitPrice: row.original.unitPrice ?? 0,
          status: row.original.status ?? EntityStatus.None,
          entityKey: row.original.entityKey ?? AppModule.Order
        } as IProduct
        return h(
          'div',
          { class: 'relative' },
          h(DropdownAction, {
            item
          })
        )
      }
    }
  ]

  // Define columns for customers
  const customerColumns: ColumnDef<ICustomer>[] = [
    {
      accessorKey: 'id',

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
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const item = {
          _id: row.original._id,
          name: row.original.name ?? '',
          entityKey: row.original.entityKey ?? AppModule.Customer,
          status: row.original.status ?? EntityStatus.None
        } as ICustomer
        return h(
          'div',
          { class: 'relative' },
          h(DropdownAction, {
            item
          })
        )
      }
    }
  ]

  // Function to determine item type
  function getItemType(item: any): string {
    if (item.customer !== undefined) {
      return 'customer'
    } else if (item.unitPrice !== undefined) {
      return 'product'
    } else if (item.invoiceTotal !== undefined) {
      return 'invoice'
    }
    return ''
  }

  // Define method to filter formData keys based on props.item
  const filterFormDataKeys = (formData: Ref<IForm>, item: IForm) => {
    const formDataTmp: IForm = {}
    const itemKeys = Object.keys(item)
    itemKeys.forEach((key) => {
      formDataTmp[key] = formData.value[key]
    })
    formData.value = formDataTmp
  }
function removeUndefinedKeys(obj: any) {
  const newObj: any = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined || obj[key] === '') {
      delete obj[key]
    }
  })
   Object.entries(obj).forEach(([key, value]) => {
     const newKey = key.replace(/^"|"$/g, '') 
     newObj[newKey] = value
   })
 
  return newObj
}
const getItemAppModule = (item: any) => {
  if (item.customer !== undefined) {
    return AppModule.Order
  } else if (item.unitPrice !== undefined) {
    return AppModule.Product
  } else {
    return AppModule.Customer
  }
}
  return {
    getItemAppModule,
    removeUndefinedKeys,
    filterFormDataKeys,
    getItemType,
    baseColumns,
    customerItem,
    customerColumns,
    productItem,
    productColumns,
    invoiceItem,
    invoiceColumns
  }
}
