<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { defineProps, onBeforeMount, ref } from 'vue'
import { z } from 'zod'

import Button from '@/components/ui/button/Button.vue'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
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

// Define props
const props = defineProps<{
  onChange: (item: any) => Promise<void>
  item: any
}>()

// Define FormData interface
interface FormData {
  [key: string]: string | number | null
}

// Initialize formData
const formData = ref<FormData>(props.item)
const customersIDs = ref<string[]>([])

// Define method to filter formData keys based on props.item
const filterFormDataKeys = () => {
  const formDataTmp: FormData = {};
  const itemKeys = Object.keys(props.item);
  itemKeys.forEach((key) => {
    formDataTmp[key] = formData.value[key] ?? null;
  });
  formData.value = formDataTmp;
}

onBeforeMount(async () => {
  const appStore = useAppStore()
  const customers = appStore.customers
  customersIDs.value = customers.map((x) => x.id ?? '')
  filterFormDataKeys()
})

// Define formSchema
const formSchema = toTypedSchema(
  z.object({
    name: z.string(),
    unitPrice: z.number(),
    number: z.number(),
    invoiceTotal: z.number(),
    customer: z.string(),
    quantity: z.number()
  })
)

// Destructure useForm result
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: formData.value
})

const handleSub = handleSubmit((values) => {
  console.log('Submit button clicked. Values:', values)
  props.onChange(values)
})

console.log(formData.value, formSchema)
</script>

<template>
  <div>
    <form class="space-y-8" @submit.prevent="handleSub">
      <FormField
        v-for="(value, key) in formData"
        :key="key"
        v-slot="{ componentField }"
        :name="key"
      >
        <FormItem>
          <FormLabel>{{ key }}</FormLabel>
          <FormControl>
            <!-- Render inputs based on the type of value -->
            <template v-if="typeof value === 'number'">
              <Input type="number" placeholder="0" v-bind="componentField" />
            </template>
            <template v-else-if="typeof value === 'string'">
              <Input type="text" v-model="formData[key]" v-bind="componentField" />
            </template>
            <template v-else-if="key === 'customer'">
              <Select v-model="formData[key]" :options="customersIDs" v-bind="componentField">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a customer" />
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
            <!-- Add additional conditions for other types if needed -->
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="flex gap-2 justify-start">
        <Button type="submit"> Submit </Button>
        <Button type="button" @click="resetForm"> Reset </Button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
