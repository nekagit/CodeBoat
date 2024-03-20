<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { defineProps, onBeforeMount, ref } from 'vue'
import { z } from 'zod'

import Button from '@/components/ui/button/Button.vue'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import type { IForm } from '@/interfaces/TableInterfaces'
import { Input } from '@/lib/registry/new-york/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/lib/registry/new-york/ui/select'
import { useAppStore } from '@/stores/appStore'
import ColumnsHelper from '@/service/columnsHelper'
const { getItemType, filterFormDataKeys } = ColumnsHelper()
const props = defineProps<{
  onChange: (item: any) => Promise<void>
  item: any
  editMode:boolean
}>()

const formData = ref<IForm>(props.item)
const schema = ref()
const customersIDs = ref<string[]>([])

const formSchemas: Record<string, z.ZodObject<any>> = {
  customer: z.object({
    name: z.string(),
    status: z.string(),
    entityKey: z.string()
  }),
  product: z.object({
    name: z.string(),
    unitPrice: z.number(),
    status: z.string(),
    entityKey: z.string()
  }),
  invoice: z.object({
    name: z.string(),
    number: z.number(),
    customer: z.string(),
    date: z.string(),
    invoiceTotal: z.number(),
    status: z.string(),
    entityKey: z.string()
  })
}

onBeforeMount(async () => {
  const appStore = useAppStore()
  const customers = appStore.customers
  customersIDs.value = customers.map((x) => x._id ?? '')
  filterFormDataKeys(formData, props.item)
  // Get item type and corresponding form schema
  const itemType = getItemType(props.item)
  schema.value = toTypedSchema(formSchemas[itemType])
})

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema.value,
  initialValues: formData.value // Initialize with formData.value
})
const handleSub = handleSubmit((values) => {
  console.log(props.editMode)
  console.log('Submit button clicked. Values:', values)
  props.onChange(values)
})
</script>

<template>
  <div>
    <form class="space-y-8" @submit.prevent="handleSub">
      <FormField
        v-for="(value, key) in formData"
        :key="key"
        v-slot="{ componentField }"
        :name="JSON.stringify(key)"
      >
        <FormItem>
          <FormControl>
            <!-- {{ key === 'customer' }} -->
            <template v-if="key === 'customer'">
              <FormLabel>{{ key }}</FormLabel>

              <Select v-model="formData[key]" :options="customersIDs" v-bind="componentField">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue :placeholder="JSON.stringify(formData[key])" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem v-for="customer in customersIDs" :key="customer" :value="customer">
                      {{ customer }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </template>
            <template v-else-if="key === 'date'">{{ value }} </template>
            <template v-else-if="key === 'status'"> {{ value }} </template>
            <template v-else-if="typeof value === 'number'">
              <FormLabel>{{ key }}</FormLabel>
              <Input type="number" placeholder="0" v-bind="componentField" />
            </template>
            <template v-else-if="typeof value === 'string'">
              <FormLabel>{{ key }}</FormLabel>
              <Input
                type="text"
                v-model="formData[key]"
                v-bind="componentField"
                :placeholder="formData[key]"
              />
            </template>

            <template v-else> </template>
          </FormControl>
        </FormItem>
      </FormField>

      <div class="flex gap-2 justify-start">
        <Button type="submit"> Submit </Button>
        <Button type="button" @click="resetForm"> Reset </Button>
      </div>
    </form>
  </div>
</template>
