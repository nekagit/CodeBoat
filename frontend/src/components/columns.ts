import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'

import type { ICustomer } from '@/interfaces/atoms/ICustomer'
import type { IInvoice } from '@/interfaces/atoms/IInvoice'
import type { IProduct } from '@/interfaces/atoms/IProduct'
import { Badge } from '@/lib/registry/new-york/ui/badge'
import { Checkbox } from '@/lib/registry/new-york/ui/checkbox'
import { useCustomerStore } from '@/stores/customerStore'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { useProductStore } from '@/stores/productsStore'
import DataTableColumnHeader from './organisms/DataTableColumnHeader.vue'
import DataTableRowActions from './organisms/DataTableRowActions.vue'
const products = useProductStore().products
const customers = useCustomerStore().customers
const invoices = useInvoiceStore().invoices

const productNames = products.map((x) => x.name)
const customerNames = customers.map((x) => x.name)
const invoiceNames = invoices.map((x) => x.name)

export interface IBaseColumn {
  id: string
  name: string
}

export const productColumns: ColumnDef<IProduct>[] = [
  {
    id: 'select',
    header: ({ table }) =>
      h(Checkbox, {
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
        arianame: 'Select all',
        class: 'translate-y-0.5'
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        checked: row.getIsSelected(),
        'onUpdate:checked': (value) => row.toggleSelected(!!value),
        arianame: 'Select row',
        class: 'translate-y-0.5'
      }),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Customer' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'name' }),

    cell: ({ row }) => {
      const name = productNames.find((name) => name === row.original.name)
      return h('div', { class: 'flex space-x-2' }, [
        name ? h(Badge, { variant: 'outline' }, () => name) : null,
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('name'))
      ])
    }
  }
]

export const customerColumns: ColumnDef<ICustomer>[] = [
  {
    id: 'select',
    header: ({ table }) =>
      h(Checkbox, {
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
        arianame: 'Select all',
        class: 'translate-y-0.5'
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        checked: row.getIsSelected(),
        'onUpdate:checked': (value) => row.toggleSelected(!!value),
        arianame: 'Select row',
        class: 'translate-y-0.5'
      }),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Customer' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'name' }),

    cell: ({ row }) => {
      const name = customerNames.find((name) => name === row.original.name)
      return h('div', { class: 'flex space-x-2' }, [
        name ? h(Badge, { variant: 'outline' }, () => name) : null,
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('name'))
      ])
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row })
  }
]

export const invoiceColumns: ColumnDef<IInvoice>[] = [
  {
    id: 'select',
    header: ({ table }) =>
      h(Checkbox, {
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
        arianame: 'Select all',
        class: 'translate-y-0.5'
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        checked: row.getIsSelected(),
        'onUpdate:checked': (value) => row.toggleSelected(!!value),
        arianame: 'Select row',
        class: 'translate-y-0.5'
      }),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Invoice' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'name' }),

    cell: ({ row }) => {
      const name = invoiceNames.find((name) => name === row.original.name)
      return h('div', { class: 'flex space-x-2' }, [
        name ? h(Badge, { variant: 'outline' }, () => name) : null,
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('name'))
      ])
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row })
  }
]

// {
//   accessorKey: 'status',
//   header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Status' }),

//   cell: ({ row }) => {
//     const status = statuses.find((status) => status.value === row.getValue('status'))

//     if (!status) return null

//     return h('div', { class: 'flex w-[100px] items-center' }, [
//       status.icon && h(status.icon, { class: 'mr-2 h-4 w-4 text-muted-foreground' }),
//       h('span', status.label)
//     ])
//   },
//   filterFn: (row, id, value) => {
//     return value.includes(row.getValue(id))
//   }
// },
// {
//   accessorKey: 'priority',
//   header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Priority' }),
//   cell: ({ row }) => {
//     const priority = priorities.find((priority) => priority.value === row.getValue('priority'))

//     if (!priority) return null

//     return h('div', { class: 'flex items-center' }, [
//       priority.icon && h(priority.icon, { class: 'mr-2 h-4 w-4 text-muted-foreground' }),
//       h('span', {}, priority.name)
//     ])
//   },
//   filterFn: (row, id, value) => {
//     return value.includes(row.getValue(id))
//   }
// },
