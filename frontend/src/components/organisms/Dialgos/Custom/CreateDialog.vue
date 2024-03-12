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
  onChange:(items: IProduct) => void
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
            <FormField v-slot="{ componentField }" name="name">
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="shadcn" v-bind="componentField" />
                </FormControl>
                <FormDescription> Products name. </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="unitPrice">
              <FormItem>
                <FormLabel>UnitPrice</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" v-bind="componentField" />
                </FormControl>
                <FormDescription> Products price per unit. </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button  type="submit"> Submit </Button>
          </form>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter> Save changes </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
