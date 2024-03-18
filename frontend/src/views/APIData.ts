import { AppModule, EntityStatus } from '@/interfaces/enums'
import { ref, type Ref } from 'vue'
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
import type { ICustomer } from '@/interfaces/atoms/ICustomer'
import { z } from 'zod'
import type { IForm } from '@/components/organisms/Tables/tablesFunctions'

export default function APIData() {
  //DataTable Component
  const sorting = ref<SortingState>([])
  const columnFilters = ref<ColumnFiltersState>([])
  const columnVisibility = ref<VisibilityState>({})
  const rowSelection = ref()


  //Schemas
  const customerSchema = z.object({
    id: z.string().nullable(),
    name: z.string()
  })

const productSchema = z.object({
  name: z.string(),
  unitPrice: z.number()
})


  // Initialize formData
  const customerFormData = ref<ICustomer>({
    name: 'Initial Name',
    entityKey: AppModule.Customer,
    status: EntityStatus.None
  })

const formData = ref<IForm>({
  name: 'Initial Name',
  unitPrice: 0,
  entityKey: AppModule.Product,
  status: EntityStatus.None
})



  return { customerSchema, customerFormData, handleCreate }
}


export function APIDataService() {


  const editIfRow = Object.keys(rowSelection).length > 0
  console.log(Object.keys(rowSelection).length)
const onSubmit = handleSubmit(async (values) => {
  ;(await useProductStore().createProduct({
    name: values.name,
    unitPrice: values.unitPrice,
    status: EntityStatus.Created,
    entityKey: AppModule.Product
  })) ?? []
})

const editMode = ref(false)
const editList = ref()
const handleEdit = () => {
  const ids = Object.keys(rowSelection.value)
  console.log(ids)
  const list = ids.map((x) => props.data[parseInt(x)])
  console.log(list)
  editMode.value = !editMode.value
  editList.value = list
}

const handleDelete = () => {}


}

export function APIDataHelper() {
      const handleCreate = (createMode: Ref<boolean>) => {
        createMode.value = !createMode.value
      }

const handleFormOnChange = (values: any) => {
  console.log(values)
}
}