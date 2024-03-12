<script setup lang="ts">
  import type { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { AppModule } from '@/interfaces/enums'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/registry/new-york/ui/table'
import { valueUpdater } from '@/lib/utils'
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'
import {
  FlexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { h, ref } from 'vue'
import DataTablePagination from './DataTablePagination.vue'
import DataTableToolbar from './DataTableToolbar.vue'

  export interface IBaseColumn {
    _id: string
    name: string
    entityKey: AppModule
    status: string
  }

  interface DataTableProps {
    data: IBaseColumn[]
  }
  const selectedRow = ref<IBaseColumn>({} as IBaseColumn)
  const showDialog = ref(false)
  const baseColumns: ColumnDef<IBaseColumn>[] = [
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
    accessorKey: 'actions',
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const handleClick = () => {
        console.log(selectedRow.value.name,row.original.name, showDialog.value)
        selectedRow.value = row.original; // Set the selected row
        showDialog.value = true; // Show the dialog
      };

      return h('DialogTrigger', {props: "as-child", class: 'relative' }, [
        h('button', {
          class: 'p-1 z-99',
          onClick: handleClick
        }, 'Open Dialog')
      ]);
    }
    }
  ]

  const props = defineProps<DataTableProps>()

  const sorting = ref<SortingState>([])
  const columnFilters = ref<ColumnFiltersState>([])
  const columnVisibility = ref<VisibilityState>({})
  const rowSelection = ref({})

  const table = useVueTable({
    get data() { return props.data },
    get columns() { return baseColumns },
    state: {
      get sorting() { return sorting.value },
      get columnFilters() { return columnFilters.value },
      get columnVisibility() { return columnVisibility.value },
      get rowSelection() { return rowSelection.value },
    },
    enableRowSelection: true,
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })



</script>

<template>
  <hr>
  <Dialog v-model="showDialog" >
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input id="name" :value="selectedRow.name" class="col-span-3" />

        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">
            Username
          </Label>
          <Input id="unitPrice" :value="selectedRow.unitPrice" class="col-span-3" />

        </div>
      </div>
      <DialogFooter>
        <Button type="submit">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  <hr>
  <div class="space-y-4">
    <DataTableToolbar :table="table" />
        <div class="flex gap-2 items-center py-4">
    <div class="flex gap-2 items-center py-4">
  <DropdownMenuRoot>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" class="ml-auto">
          Columns <ChevronDown class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem
          v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
          :key="column.id"
          class="capitalize"
          :checked="column.getIsVisible()"
          @update:checked="(value) => {
            column.toggleVisibility(!!value)
          }"
        >
          {{ column.id }}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </DropdownMenuRoot>
</div>
    </div>
    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
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
            <TableCell
              col-span="{columns.length}"
              class="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <DataTablePagination :table="table" />
  </div>
</template>
