<script setup lang="ts">
import DataTablePagination from '@/components/organisms/Tables/DataTablePagination.vue'
import { AppModule } from '@/interfaces/enums'
import type { ICustomTable } from '@/interfaces/TableInterfaces'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/lib/registry/new-york/ui/table'
import { valueUpdater } from '@/lib/utils'
import ColumnsHelper from '@/service/columnsHelper'
import { useAppStore } from '@/stores/appStore'
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
import { onBeforeMount, ref, watch } from 'vue'
// Define props

const { customerColumns, productColumns, invoiceColumns,invoiceLineColumns } = ColumnsHelper()

const props = defineProps<ICustomTable>()
const localItems = ref([] as any[])
const localColumns = ref([] as ColumnDef<any>[])
const appMod = props.entityKey
const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

const setLocalItems = () => {
  if (appMod == AppModule.Order) {
    localItems.value = useAppStore().invoices
    // localItems.value.push({id: "", name: "offlineSample"})
    localColumns.value = invoiceColumns
  } else if (appMod == AppModule.Product) {
    localItems.value = useAppStore().products
    // localItems.value.push({id: "", name: "offlineSample"})
    localColumns.value = productColumns
  } else if (appMod == AppModule.Customer) {
    localItems.value = useAppStore().customers
    // localItems.value.push({id: "", name: "offlineSample"})
    localColumns.value = customerColumns
  }else if (appMod == AppModule.Line) {
    localItems.value = useAppStore().invoiceLines
    // localItems.value.push({id: "", name: "offlineSample"})
    localColumns.value = invoiceLineColumns
  }
}

onBeforeMount(async () => {
  await useAppStore().onInit()
  setLocalItems()
})

const table = useVueTable({
  get data() {
    return localItems.value
  },
  get columns() {
    return localColumns.value
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
const appStore = useAppStore()

watch(
  () => ({ freshFetch: appStore.freshFetch }),
  async (newValue) => {
    if (newValue.freshFetch) {
      await appStore.onInit()
      setLocalItems()
      appStore.freshFetch = false
    }
  },
  { deep: true }
)
</script>
<template>
  <div class="space-y-4">
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
                aria-Row-Index="row.id"
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
