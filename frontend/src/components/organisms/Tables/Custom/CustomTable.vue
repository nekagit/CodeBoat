<script setup lang="ts">
import CreateDialog from '@/components/organisms/Dialgos/CreateDialog.vue'
import DataTablePagination from '@/components/organisms/Tables/DataTablePagination.vue'
import type { ICustomer } from '@/interfaces/atoms/ICustomer'
import type { IInvoice } from '@/interfaces/atoms/IInvoice'
import type { IProduct } from '@/interfaces/atoms/IProduct'
import { AppModule, EntityStatus } from '@/interfaces/enums'
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
import { useCustomerStore } from '@/stores/customerStore'
import { useInvoiceStore } from '@/stores/invoiceStore'
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
import { onBeforeMount, onUpdated, ref } from 'vue'
// Define props
const getItemAppModule = (item: any) => {
  if (Object.keys(item).find((x) => x == 'customer')) {
    return AppModule.Order
  } else if (Object.keys(item).find((x) => x == 'unitPrice')) {
    return AppModule.Product
  } else {
    return AppModule.Customer
  }
}
const { customerColumns, productColumns, invoiceColumns } = ColumnsHelper()

const props = defineProps<ICustomTable>()
const localItems = ref([] as any[])
const localColumns = ref([] as ColumnDef<any>[])
const appMod = getItemAppModule(props.item)
onUpdated(() => {
  console.log('asdf')
})
const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

onBeforeMount(async () => {
  await useAppStore().onInit()
  if (appMod == AppModule.Order) {
    console.log(localItems.value, 'invocie')
    localItems.value = useAppStore().invoices
    // localItems.value.push({id: "", name: "offlineSample"})
    localColumns.value = invoiceColumns
  } else if (appMod == AppModule.Product) {
    console.log(localItems.value, 'prodcuts')
    localItems.value = useAppStore().products
    // localItems.value.push({id: "", name: "offlineSample"})
    localColumns.value = productColumns
  } else if (appMod == AppModule.Customer) {
    console.log(localItems.value, 'customtable')
    localItems.value = useAppStore().customers
    // localItems.value.push({id: "", name: "offlineSample"})
    localColumns.value = customerColumns
  }
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

async function handleOnCreate(values: any) {
  const manipulatedValues = { ...values } // Create a copy of the object to avoid mutating the original
  if (appMod == AppModule.Order) {
    console.log('onchange', manipulatedValues.customer)
    localItems.value =
      (await useInvoiceStore().createInvoice({
        name: manipulatedValues.name,
        number: manipulatedValues.number,
        status: EntityStatus.Created,
        entityKey: AppModule.Order,
        customer: manipulatedValues.customer,
        date: new Date().toISOString(), // This will set the date to the current date and time
        invoiceTotal: manipulatedValues.invoiceTotal
      } as IInvoice)) ?? []
  } else if (appMod == AppModule.Product) {
    localItems.value =
      (await useProductStore().createProduct({
        name: manipulatedValues.name,
        unitPrice: manipulatedValues.unitPrice,
        status: EntityStatus.Created,
        entityKey: AppModule.Product
      } as IProduct)) ?? []
  } else if (appMod == AppModule.Customer) {
    localItems.value =
      (await useCustomerStore().createCustomer({
        name: manipulatedValues.name,
        status: EntityStatus.Created,
        entityKey: AppModule.Customer
      } as ICustomer)) ?? []
  }
}
</script>
<template>
  <div class="space-y-4">
    <CreateDialog
      :editMode="false"
      :onChange="(item: any) => handleOnCreate(item)"
      :item="props.item"
    />
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
