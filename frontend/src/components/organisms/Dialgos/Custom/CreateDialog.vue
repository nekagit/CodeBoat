<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import type { IProduct } from '@/interfaces/atoms/IProduct'
import type { ICustomer } from "@/interfaces/atoms/ICustomer"
import type { IInvoice } from "@/interfaces/atoms/IInvoice"
import { AppModule, EntityStatus } from '@/interfaces/enums'
import { useProductStore } from '@/stores/productsStore'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

interface CreateDialogProps {
  onChange: (item: IProduct | ICustomer | IInvoice) => Promise<void>
  item: IProduct | ICustomer | IInvoice
}

const props = defineProps<CreateDialogProps>()

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    unitPrice: z.number()
  })
)
const { handleSubmit } = useForm({
  validationSchema: formSchema
})
const onSubmit = handleSubmit(async (values) => {
   props.onChange(values)
})
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button>
        Create
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogDescription>
          <form class="w-2/3 space-y-6" @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="name" v-if="props.item instanceof IProduct">
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Product Name" v-bind="componentField" />
                </FormControl>
                <FormDescription>Product's name.</FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="unitPrice" v-if="props.item instanceof IProduct">
              <FormItem>
                <FormLabel>Unit Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" v-bind="componentField" />
                </FormControl>
                <FormDescription>Product's price per unit.</FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <!-- Add similar blocks for other types (ICustomer, IInvoice) if needed -->

            <Button type="submit">Submit</Button>
          </form>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>Save changes</DialogFooter>
    </DialogContent>
  </Dialog>
</template>
