import type { IBaseColumn } from '../TableInterfaces'

// Interface for the customer document
export interface ICustomer extends IBaseColumn {
  // Add any additional properties specific to the customer interface here
}

// Interface for the product document
export interface IProduct extends IBaseColumn {
  unitPrice: number
  // Add any additional properties specific to the product interface here
}

// Interface for the invoice document
export interface IInvoice extends IBaseColumn {
  number: number
  customer: string // Reference to Customer ObjectId
  date: string
  invoiceTotal: number
  // Add any additional properties specific to the invoice interface here
}

// Interface for the invoice line document
export interface IInvoiceLine extends IBaseColumn {
  invoice: string // Reference to Invoice ObjectId
  product: string // Reference to Product ObjectId
  unitPrice: number
  quantity: number
  lineTotal: number
}
