<script setup lang="ts">
import DataTable from '@/components/organisms/Tables/DataTable.vue'
import Button from '@/components/ui/button/Button.vue'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import Input from '@/components/ui/input/Input.vue'
import type { IProduct } from '@/interfaces/atoms/IProduct'
import { AppModule, EntityStatus } from '@/interfaces/enums'
import { useProductStore } from '@/stores/productsStore'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import * as z from 'zod'

useProductStore().onInit()
const localProducts = ref(useProductStore().products)

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50)
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit(async (values) => {
  localProducts.value = await useProductStore().createProduct({
    name: values.name,
    unitPrice: values.unitPrice,
    status: EntityStatus.Created,
    entityKey: AppModule.Product
  } as IProduct)
  console.log(localProducts.value.map((x) => x._id))
})
</script>

<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Product Management</h2>
        <p class="text-muted-foreground">Table over Customer Datas</p>
      </div>
      <div class="flex items-center space-x-2"></div>
    </div>
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
      <Button type="submit"> Submit </Button>
    </form>
    <DataTable :data="localProducts" />
  </div>
</template>
