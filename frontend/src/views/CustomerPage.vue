<script setup lang="ts">
import { useAppStore } from '@/stores/appStore';

import DataTable from '@/components/organisms/Tables/DataTable.vue';
import { AppModule, EntityStatus } from '@/interfaces/enums';
import { useCustomerStore } from '@/stores/customerStore';
import { onBeforeMount, ref } from 'vue';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { z } from 'zod';

import Button from '@/components/ui/button/Button.vue';
import {
  FormField
} from '@/components/ui/form';
import type { ICustomer } from '@/interfaces/atoms/ICustomer';

import { Input } from '@/lib/registry/new-york/ui/input';

const customerSchema = z.object({
  name: z.string(),
});

// Initialize formData
const formData = ref<ICustomer>({
  name: 'Initial Name',
  entityKey: AppModule.Customer,
  status: EntityStatus.None
})

// Define formSchema
const formSchema = toTypedSchema(customerSchema)

// Destructure useForm result
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: formData.value
})



const onSubmit = handleSubmit(async (values) => {
  console.log('onchange')
    localItems.value = await useCustomerStore().createCustomer({
      name: values.name,
      status: EntityStatus.Created,
      entityKey: AppModule.Customer
    }) ?? [] 
});

const localItems = ref([] as any[])
onBeforeMount(async () => {
  await useAppStore().onInit()
  localItems.value = useAppStore().customers
})

</script>

<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Customer Management</h2>
        <p class="text-muted-foreground">Table over Customer Datas</p>
      </div>
      <div class="flex items-center space-x-2"></div>
    </div>
     <form class="space-y-8"  @submit.prevent="onSubmit" >
          <FormField
            v-slot="{ componentField }"
            name="name"
          >
          <Input type="text" v-model="formData " v-bind="componentField" />
          </FormField>

          <div class="flex gap-2 justify-start">
            <Button type="submit"> Submit </Button>
            <Button type="button" @click="resetForm"> Reset </Button>
          </div>
        </form>
    <DataTable :data="localItems" />
  </div>
</template>
