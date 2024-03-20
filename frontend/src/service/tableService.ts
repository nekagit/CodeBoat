// export default function TableService() {
//   const {
//     getItemAppModule,
//     editIfRow,
//     handleEdit,
//     handleDelete,
//     handleCreate,
//     handleFormOnChange
//   } = TableHelper()

//   const {
//     baseColumns,
//     customerItem,
//     customerColumns,
//     productItem,
//     productColumns,
//     invoiceItem,
//     invoiceColumns
//   } = TableData()

//   return {
//     getItemAppModule,
//     baseColumns,
//     customerItem,
//     customerColumns,
//     productItem,
//     productColumns,
//     invoiceItem,
//     invoiceColumns,
//     editIfRow,
//     handleEdit,
//     handleDelete,
//     handleCreate,
//     handleFormOnChange
//   }
// }
// function TableHelper() {
//   const getItemAppModule = (item: any) => {
//     if (Object.keys(item).find((x) => x == 'customer')) {
//       return AppModule.Order
//     } else if (Object.keys(item).find((x) => x == 'unitPrice')) {
//       return AppModule.Product
//     } else {
//       return AppModule.Customer
//     }
//   }
//   const editIfRow = (rowSelection: any) => Object.keys(rowSelection).length > 0
//   const handleEdit = (rowSelection: any, items: any[]) => {
//     // const ids = Object.keys(rowSelection.value)
//     // const list = ids.map((x) => items[parseInt(x)])
//     // editMode.value = !editMode.value
//     // editList.value = list
//   }

//   const handleDelete = () => {}

//   const handleCreate = (createMode: Ref<boolean>) => {
//     createMode.value = !createMode.value
//   }

//   const handleFormOnChange = (values: any) => {
//     console.log(values)
//   }
//   return { getItemAppModule, editIfRow, handleEdit, handleDelete, handleCreate, handleFormOnChange }
// }

// /// DATA
// function TableData() {
//   // Define initial values for products and customers
//   const productItem: Ref<IProduct> = ref({
//     name: '',
//     unitPrice: 0,
//     entityKey: AppModule.Product,
//     status: EntityStatus.Created
//   })
//   const invoiceItem: Ref<IInvoice> = ref({
//     name: '',
//     customer: '',
//     date: new Date().toISOString(),
//     invoiceTotal: 0,
//     number: 0,
//     entityKey: AppModule.Order,
//     status: EntityStatus.None
//   })
//   const customerItem: Ref<ICustomer> = ref({
//     name: '',
//     entityKey: AppModule.Customer,
//     status: EntityStatus.Created
//   })

//   // Columns
//   const baseColumns: ColumnDef<IBaseColumn>[] = [
//     {
//       id: 'select',
//       header: ({ table }) =>
//         h(Checkbox, {
//           checked:
//             table.getIsAllPageRowsSelected() ||
//             (table.getIsSomePageRowsSelected() && 'indeterminate'),
//           'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
//           ariaLabel: 'Select all'
//         }),
//       cell: ({ row }) => {
//         return h(Checkbox, {
//           checked: row.getIsSelected(),
//           'onUpdate:checked': (value) => row.toggleSelected(!!value),
//           ariaLabel: 'Select row'
//         })
//       },
//       enableSorting: false,
//       enableHiding: false
//     },
//     {
//       accessorKey: 'name',
//       header: 'Name',
//       cell: ({ row }) => row.original.name
//     },

//     {
//       accessorKey: 'status',
//       header: 'Status',
//       cell: ({ row }) => row.original.status
//     },
//     {
//       accessorKey: 'entityKey',
//       header: 'Type',
//       cell: ({ row }) => row.original.entityKey
//     },
//     {
//       id: 'actions',
//       enableHiding: false,
//       cell: ({ row }) => {
//         const item = row.original
//         console.log(item, "tableSErvice")
//         return h(
//           'div',
//           { class: 'relative' },
//           h(DropdownAction, {
//             item
//           })
//         )
//       }
//     }
//   ]

//   const invoiceColumns: ColumnDef<IInvoice>[] = [
//     {
//       accessorKey: 'id',
//       header: ({ table }) =>
//         h(Checkbox, {
//           checked:
//             table.getIsAllPageRowsSelected() ||
//             (table.getIsSomePageRowsSelected() && 'indeterminate'),
//           'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
//           ariaLabel: 'Select all'
//         }),
//       cell: ({ row }) => {
//         return h(Checkbox, {
//           checked: row.getIsSelected(),
//           'onUpdate:checked': (value) => row.toggleSelected(!!value),
//           ariaLabel: 'Select row'
//         })
//       },
//       enableSorting: false,
//       enableHiding: false
//     },
//     {
//       accessorKey: 'name',
//       header: 'Name',
//       cell: ({ row }) => row.original.name
//     },
//     {
//       accessorKey: 'number',
//       header: 'Number',
//       cell: ({ row }) => row.original.number
//     },
//     {
//       accessorKey: 'status',
//       header: 'Status',
//       cell: ({ row }) => row.original.status
//     },
//     {
//       accessorKey: 'entityKey',
//       header: 'Type',
//       cell: ({ row }) => row.original.entityKey
//     },
//     {
//       accessorKey: 'customer',
//       header: 'Customer',
//       cell: ({ row }) => row.original.customer
//     },
//     {
//       accessorKey: 'date',
//       header: 'Creation',
//       cell: ({ row }) => row.original.date
//     },
//     {
//       accessorKey: 'invoiceTotal',
//       header: 'Total',
//       cell: ({ row }) => row.original.invoiceTotal
//     },
//     {
//       accessorKey: 'actions',
//       enableHiding: false,
//       cell: ({ row }) => {
//         const item = {
//           name: row.original.name ?? '',
//           number: row.original.number ?? 0,
//           customer: row.original.customer ?? '',
//           date: row.original.date ?? new Date(),
//           invoiceTotal: row.original.invoiceTotal ?? 0,
//           status: row.original.status ?? EntityStatus.None,
//           entityKey: row.original.entityKey ?? AppModule.Order
//         } as IInvoice
//         console.log(item, 'edittableinvoice')
//         return h(
//           'div',
//           { class: 'relative' },
//           h(DropdownAction, {
//             item
//           })
//         )
//       }
//     }
//   ]

//   // Define columns for products
//   const productColumns: ColumnDef<IProduct>[] = [
//     {
//       accessorKey: 'id',

//       header: ({ table }) =>
//         h(Checkbox, {
//           checked:
//             table.getIsAllPageRowsSelected() ||
//             (table.getIsSomePageRowsSelected() && 'indeterminate'),
//           'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
//           ariaLabel: 'Select all'
//         }),
//       cell: ({ row }) => {
//         return h(Checkbox, {
//           checked: row.getIsSelected(),
//           'onUpdate:checked': (value) => row.toggleSelected(!!value),
//           ariaLabel: 'Select row'
//         })
//       },
//       enableSorting: false,
//       enableHiding: false
//     },
//     {
//       accessorKey: 'name',
//       header: 'Name',
//       cell: ({ row }) => row.original.name
//     },
//     {
//       accessorKey: 'unitPrice',
//       header: 'Unit Price',
//       cell: ({ row }) => row.original.unitPrice
//     },
//     {
//       accessorKey: 'status',
//       header: 'Status',
//       cell: ({ row }) => row.original.status
//     },
//     {
//       accessorKey: 'entityKey',
//       header: 'Type',
//       cell: ({ row }) => row.original.entityKey
//     },
//     {
//       id: 'actions',
//       enableHiding: false,
//       cell: ({ row }) => {
//         const item = {
//           name: row.original.name,
//           unitPrice: row.original.unitPrice ?? 0,
//           status: row.original.status ?? EntityStatus.None,
//           entityKey: row.original.entityKey ?? AppModule.Order
//         } as IProduct
//         return h(
//           'div',
//           { class: 'relative' },
//           h(DropdownAction, {
//             item
//           })
//         )
//       }
//     }
//   ]

//   // Define columns for customers
//   const customerColumns: ColumnDef<ICustomer>[] = [
//     {
//       accessorKey: 'id',

//       header: ({ table }) =>
//         h(Checkbox, {
//           checked:
//             table.getIsAllPageRowsSelected() ||
//             (table.getIsSomePageRowsSelected() && 'indeterminate'),
//           'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
//           ariaLabel: 'Select all'
//         }),
//       cell: ({ row }) => {
//         return h(Checkbox, {
//           checked: row.getIsSelected(),
//           'onUpdate:checked': (value) => row.toggleSelected(!!value),
//           ariaLabel: 'Select row'
//         })
//       },
//       enableSorting: false,
//       enableHiding: false
//     },
//     {
//       accessorKey: 'name',
//       header: 'Name',
//       cell: ({ row }) => row.original.name
//     },
//     {
//       accessorKey: 'status',
//       header: 'Status',
//       cell: ({ row }) => row.original.status
//     },
//     {
//       accessorKey: 'entityKey',
//       header: 'Type',
//       cell: ({ row }) => row.original.entityKey
//     },
//     {
//       id: 'actions',
//       enableHiding: false,
//       cell: ({ row }) => {
//         const item = {
//           name: row.original.name ?? '',
//           entityKey: row.original.entityKey ?? AppModule.Customer,
//           status: row.original.status ?? EntityStatus.None
//         } as ICustomer
//         console.log(item, 'tableSErvice')
//         return h(
//           'div',
//           { class: 'relative' },
//           h(DropdownAction, {
//             item
//           })
//         )
//       }
//     }
//   ]
//   return {
//     baseColumns,
//     customerItem,
//     customerColumns,
//     productItem,
//     productColumns,
//     invoiceItem,
//     invoiceColumns
//   }
// }

// export interface IBaseColumn {
//   _id?: string
//   name: string
//   entityKey: AppModule
//   status: string
// }

// // export interface IForm {
// //   _id?: string
// //   name?: string
// //   entityKey?: AppModule
// //   status?: string
// //   invoice?: string
// //   product?: string
// //   unitPrice?: number
// //   quantity?: number
// //   lineTotal?: number
// //   number?: number
// //   customer?: string | undefined
// //   date?: Date
// //   invoiceTotal?: number
// // }
// // Define FormData interface
// export interface IForm {
//   [key: string]: string | number | null
// }
// export interface ICustomTable {
//   item: any
// }
// export function mapToForm(item: any): any {
//   let form: any = {}

//   // Define sample values for each type
//   const sampleValues: Record<string, any> = {
//     customer: {
//       name: '',
//       entityKey: AppModule.Customer,
//       status: EntityStatus.Created
//     },
//     product: {
//       name: '',
//       unitPrice: 0,
//       status: EntityStatus.Created,
//       entityKey: AppModule.Product
//     },
//     invoice: {
//       name: '',
//       customer: '',
//       date: new Date().toISOString(),
//       invoiceTotal: 0,
//       number: 0,
//       status: EntityStatus.Created,
//       entityKey: AppModule.Order
//     }
//     // Add more sample values as needed for other types
//   }

//   // Determine the type of item and set form accordingly
//   if (item.customer !== undefined) {
//     form = { ...sampleValues.invoice }
//   } else if (item.unitPrice !== undefined) {
//     form = { ...sampleValues.product }
//   } else if (item.invoiceTotal !== undefined) {
//     form = { ...sampleValues.customer }
//   }

//   // Map each key to the item value or sample value if it's undefined in the item
//   Object.keys(form).forEach((key) => {
//     form[key] = item[key] !== undefined ? item[key] : form[key]
//   })

//   return form
// }
