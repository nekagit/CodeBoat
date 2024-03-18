<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { valueUpdater } from '@/lib/utils'
import type { ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/vue-table'
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable
} from '@tanstack/vue-table'
import { ref } from 'vue'
import DataTableContent from './DataTableContent.vue'
import DataTablePagination from './DataTablePagination.vue'
import DataTableToolbar from './DataTableToolbar.vue'
import { baseColumns, type DataTableProps } from './tablesFunctions'

import { AppModule, EntityStatus } from '@/interfaces/enums'
import { useProductStore } from '@/stores/productsStore'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

import { FormField } from '@/components/ui/form'

import { Input } from '@/lib/registry/new-york/ui/input'

const props = defineProps<DataTableProps>()

const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return baseColumns
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

const formSchema = toTypedSchema(productSchema)

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: formData.value
})

</script>

<template>
  <div class="space-y-4 mx-auto">
    <Button v-if="editIfRow" @click="handleDelete" class="w-fit">Delete</Button>
    <Button v-if="editIfRow" @click="handleEdit" class="w-fit">Edit</Button>

    <div v-if="editIfRow && editMode" class="space-y-4 mx-auto">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <FormField v-slot="{ componentField }" name="name ">
          <Input class="w-fit" type="text" v-model="formData.name" v-bind="componentField" />
          Name
        </FormField>
        <FormField v-slot="{ componentField }" name="unitPrice">
          <Input class="w-fit" type="number" v-model="formData.unitPrice" v-bind="componentField" />
          UnitPrice
        </FormField>

        <div class="flex gap-2 justify-start">
          <Button type="submit"> Submit </Button>
          <Button type="button" @click="resetForm"> Reset </Button>
        </div>
      </form>
    </div>
    <div v-else>
      <DataTableToolbar :table="table" />
      <DataTableContent :table="table" :columns="baseColumns" />
      <DataTablePagination :table="table" />
    </div>
  </div>
</template>
