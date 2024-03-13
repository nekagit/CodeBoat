<script setup lang="ts">
import DataTablePagination from '@/components/organisms/Tables/DataTablePagination.vue'
import DataTableToolbar from '@/components/organisms/Tables/DataTableToolbar.vue'
import type { IInvoice } from '@/interfaces/atoms/IInvoice'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/lib/registry/new-york/ui/table'
import { valueUpdater } from '@/lib/utils'
import { useInvoiceStore } from '@/stores/invoiceStore'
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState
} from '@tanstack/vue-table'
import {
  FlexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable
} from '@tanstack/vue-table'
import { onBeforeMount, ref } from 'vue'
import CreateDialog from '../../Dialgos/Custom/CreateDialog.vue'

onBeforeMount(async () => {
  await useInvoiceStore().onInit()
  localInvoices.value = useInvoiceStore().invoices
})
const storeInvoices =  useInvoiceStore().invoices
const localInvoices = ref(storeInvoices)
console.log(localInvoices.value)
const invoiceColumns: ColumnDef<IInvoice>[] = [
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
    cell: ({row}) => row.original.customer.name
  },
  {
    accessorKey: 'date',
    header: 'Creation',
    cell: ({row}) => row.original.date
  },
  {
    accessorKey: 'invoiceTotal',
    header: 'Total',
    cell: ({row}) => row.original.invoiceTotal
  }
]

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const table = useVueTable({
  get data() {
    return localInvoices.value
  },
  get columns() {
    return invoiceColumns
  },
  state: {
    get sorting() {
      return sorting.value
    },
    get columnFilters() {
      return columnFilters.value
    },
    get columnVisibility() {
      return columnVisibility.value
    },
    get rowSelection() {
      return rowSelection.value
    }
  },
  enableRowSelection: true,
  onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues()
})

async function handleOnChange(values: IInvoice) {
  localInvoices.value = await useInvoiceStore().createInvoice({
    name: values.name,
    number: values.number,
    status: EntityStatus.Created,
    entityKey: AppModule.Order,
    customer: values.customer,
    date: values.date,
    invoiceTotal: values.invoiceTotal
  } as IInvoice) ?? []
}
</script>

<template>
  <div class="space-y-4">
    <DataTableToolbar :table="table" />
    <CreateDialog :onChange="(item: IInvoice) => handleOnChange(item)" :item="{} as IInvoice"/>

    <CreateDialog :onChange="(values: IInvoice) => handleOnChange(values)" :item="{} as IInvoice"/>
    <div>
      <div class="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
              <TableHead v-for="header in headerGroup.headers" :key="header.id">
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <template v-if="table.getRowModel().rows?.length">
              <TableRow
                v-for="row in table.getRowModel().rows"
                :key="row.id"
                :data-state="row.getIsSelected() && 'selected'"
              >
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </TableCell>
              </TableRow>
            </template>

            <TableRow v-else>
              <TableCell class="h-24 text-center"> No results. </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    <DataTablePagination :table="table" />
  </div>
</template>

