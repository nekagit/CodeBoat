
<script setup lang="ts">
import type { IProduct } from '@/interfaces/atoms/IProduct';
import { AppModule, EntityStatus } from '@/interfaces/enums';
import { useProductStore } from '@/stores/productsStore';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
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
</template>

