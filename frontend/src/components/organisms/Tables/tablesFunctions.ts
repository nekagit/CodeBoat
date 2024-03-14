import type { AppModule } from '@/interfaces/enums'
import type { ColumnDef } from '@tanstack/vue-table'

export interface IBaseColumn {
  _id?: string
  name: string
  entityKey: AppModule
  status: string
}

export interface IForm {
  _id?: string
  name: string
  entityKey?: AppModule
  status?: string
  invoice: string
  product: string
  unitPrice: number
  quantity: number
  lineTotal: number
  number: number
  customer: string | undefined
  date?: Date
  invoiceTotal: number
}

export interface DataTableProps {
  data: IBaseColumn[]
}
export const baseColumns: ColumnDef<IBaseColumn>[] = [
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
  }
]
