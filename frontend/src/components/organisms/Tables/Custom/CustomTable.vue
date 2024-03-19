<script setup lang="ts">
import CreateDialog from '@/components/organisms/Dialgos/CreateDialog.vue'
import DataTablePagination from '@/components/organisms/Tables/DataTablePagination.vue'
import DataTableToolbar from '@/components/organisms/Tables/DataTableToolbar.vue'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/lib/registry/new-york/ui/table'
import { valueUpdater } from '@/lib/utils'
import TableService, { type ICustomTable } from '@/service/tableService'
import { useAppStore } from '@/stores/appStore'
import { useCustomerStore } from '@/stores/customerStore'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { useProductStore } from '@/stores/productsStore'
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/vue-table'
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
import { onBeforeMount, onUpdated, ref } from 'vue'
// Define props

const {
  getItemAppModule,
  baseColumns,
  customerItem,
  customerColumns,
  productItem,
  productColumns,
  invoiceItem,
  invoiceColumns,
  customerSchema,
  productSchema,
  editIfRow,
  handleEdit,
  handleDelete,
  handleCreate,
  handleFormOnChange
} = TableService()

const props = defineProps<ICustomTable>()
const localItems = ref([] as any[])
const localColumns = ref([]as ColumnDef<any>[])
const appMod = getItemAppModule(props.item)
onUpdated(() => {
  console.log("asdf")
})
const refItem = ref(props.item)
onBeforeMount(async () => {
  refItem.value.date = new Date()
  await useAppStore().onInit()
  if (appMod == AppModule.Order) {
    console.log(localItems.value, 'invocie')
    localItems.value = useAppStore().invoices
    // localItems.value.push({id: " ", name: "offlineSample"})
    localColumns.value = invoiceColumns
  } else if (appMod == AppModule.Product) {
    console.log(localItems.value, 'prodcuts')
    localItems.value = useAppStore().products
    // localItems.value.push({id: " ", name: "offlineSample"})
    localColumns.value = productColumns
  } else if (appMod == AppModule.Customer) {
    console.log(localItems.value, 'customtable')
    localItems.value = useAppStore().customers
    // localItems.value.push({id: " ", name: "offlineSample"})
    localColumns.value = customerColumns
  }
})

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

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

async function handleOnCreate(values: any) {
  if (appMod == AppModule.Order) {
    console.log('onchange')
    localItems.value =
      (await useInvoiceStore().createInvoice({
        name: values.name,
        number: values.number,
        status: EntityStatus.Created,
        entityKey: AppModule.Order,
        customer: values.customer,
        date: new Date(), // This will set the date to the current date and time
        invoiceTotal: values.invoiceTotal
      })) ?? []
  } else if (appMod == AppModule.Product) {
    localItems.value =
      (await useProductStore().createProduct({
        name: values.name,
        unitPrice: values.unitPrice,
        status: EntityStatus.Created,
        entityKey: AppModule.Product
      })) ?? []
  } else if (appMod == AppModule.Customer) {
    localItems.value =
      (await useCustomerStore().createCustomer({
        name: values.name,
        status: EntityStatus.Created,
        entityKey: AppModule.Customer
      })) ?? []
  }
}
const editMode = ref(false)

console.log(editMode.value)
</script>
<template>
  <div class="space-y-4">
    <DataTableToolbar :table="table" />
    <CreateDialog :editMode="false" :onChange="(item: any) => handleOnCreate(item)" :item="refItem" />
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
                aria-Row-Index = "row.id"
                :data-state="row.getIsSelected() && 'selected'"
              >
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id" >
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
