<script setup lang="ts">
import DataTablePagination from '@/components/organisms/Tables/DataTablePagination.vue'
import DataTableToolbar from '@/components/organisms/Tables/DataTableToolbar.vue'
import type { IProduct } from '@/interfaces/atoms/IProduct'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/lib/registry/new-york/ui/table'
import { valueUpdater } from '@/lib/utils'
import { useProductStore } from '@/stores/productsStore'
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
import { ref } from 'vue'
import CreateDialog from '../../Dialgos/Custom/CreateDialog.vue'

useProductStore().onInit()
const localProducts = ref(useProductStore().products)
console.log('localProducts: ', localProducts)

const productColumns: ColumnDef<IProduct>[] = [
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
    accessorKey: 'unitPrice',
    header: 'Price',
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

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const table = useVueTable({
  get data() {
    return localProducts.value
  },
  get columns() {
    return productColumns
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
async function handleOnChange(values: IProduct) {
  localProducts.value = await useProductStore().createProduct({
    name: values.name,
    unitPrice: values.unitPrice,
    status: EntityStatus.Created,
    entityKey: AppModule.Product
  } as IProduct)
}

</script>

<template>
  <div class="space-y-4">
    <DataTableToolbar :table="table" />
    <CreateDialog :onChange="(values: IProduct) => handleOnChange(values) "/>
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

