import DropdownAction from '@/components/molekules/DataTableAction.vue'
import { Checkbox } from '@/components/ui/checkbox'
import type { ICustomer, IInvoice, IInvoiceLine, IProduct } from '@/interfaces/atoms/IShopModal'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import type { IBaseColumn, IForm } from '@/interfaces/TableInterfaces'
import type { ColumnDef } from '@tanstack/vue-table'
import { h, ref, type Ref } from 'vue'
export default function ColumnsHelper() {
  const productItem: Ref<IProduct> = ref({
    name: '',
    unitPrice: 0,
    date: new Date().toISOString(),
    invoiceTotal: 0,
    number: 0,
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
  const invoiceLineItem: Ref<IInvoiceLine> = ref({
    name: '',
    invoice: '',
    product: '',
    date: new Date().toISOString(),
    lineTotal: 0,
    unitPrice: 0,
    quantity: 0,
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
          date: row.original.date ?? new Date().toISOString(),
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

  const invoiceLineColumns: ColumnDef<IInvoiceLine>[] = [
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
      header: 'Price',
      cell: ({ row }) => row.original.unitPrice
    },
    {
      accessorKey: 'quantity',
      header: 'Quantity',
      cell: ({ row }) => row.original.quantity
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
      accessorKey: 'invoice',
      header: 'invoice',
      cell: ({ row }) => row.original.invoice
    },
    {
      accessorKey: 'product',
      header: 'Product',
      cell: ({ row }) => row.original.product
    },
    {
      accessorKey: 'lineTotal',
      header: 'Total',
      cell: ({ row }) => row.original.lineTotal
    },
    {
      accessorKey: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const item = {
          _id: row.original._id,
          name: row.original.name ?? '',
          unitPrice: row.original.unitPrice ?? 0,
          quantity: row.original.unitPrice ?? 0,
          invoice: row.original.invoice ?? '',
          product: row.original.product ?? '',
          lineTotal: row.original.lineTotal ?? 0,
          status: row.original.status ?? EntityStatus.None,
          entityKey: row.original.entityKey ?? AppModule.Order
        } as IInvoiceLine
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
    invoiceColumns,
    invoiceLineItem,
    invoiceLineColumns
  }
}
