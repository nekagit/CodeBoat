import { AppModule } from '@/interfaces/enums'
export interface IBaseColumn {
  _id?: string
  name: string
  entityKey: AppModule
  status: string
}

export interface IForm {
  [key: string]: string | number | undefined
}
export interface ICustomTable {
  entityKey: AppModule
}
