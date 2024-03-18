import { AppModule, EntityStatus } from '@/interfaces/enums'
import { ref, type Ref } from 'vue'

import type { ICustomer } from '@/interfaces/atoms/ICustomer'
import { z } from 'zod'

export default function APIData() {
  const customerSchema = z.object({
    id: z.string().nullable(),
    name: z.string()
  })

  // Initialize formData
  const customerFormData = ref<ICustomer>({
    name: 'Initial Name',
    entityKey: AppModule.Customer,
    status: EntityStatus.None
  })

  const handleCreate = (createMode: Ref<boolean>) => {
    createMode.value = !createMode.value
  }

  return { customerSchema, customerFormData, handleCreate }
}
