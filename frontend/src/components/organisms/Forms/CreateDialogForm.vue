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
import ColumnsHelper from '@/service/columnsHelper'
import { useAppStore } from '@/stores/appStore'

const { getItemType, filterFormDataKeys, removeUndefinedKeys } = ColumnsHelper()
const props = defineProps<{
  onChange: (item: IForm) => Promise<void>
  item: IForm
  editMode: boolean
}>()

const formData = ref<IForm>(props.item)
const schema = ref()
const selectItems = ref<string[]>([])

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
  }),
  invoiceLine: z.object({
    name: z.string(),
    unitPrice: z.number(),
    quantity: z.number(),
    invoice: z.string(),
    product: z.string(),
    lineTotal: z.number(),
    status: z.string(),
    entityKey: z.string()
  })
}

onBeforeMount(async () => {
  selectItems.value = getSelectItems(props.item)
  filterFormDataKeys(formData, props.item)
  const itemType = getItemType(props.item)
  schema.value = toTypedSchema(formSchemas[itemType])
})

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema.value,
  initialValues: formData.value // Initialize with formData.value
})
const handleSub = handleSubmit((values) => {
  const tmp = { ...removeUndefinedKeys(values) }
  props.onChange(tmp)
})

const getSelects = (key: string) => {
  return key === "customer" || key === "invoice" || key === "product"
}

const getSelectItems = (item: any) => {
  const keys = Object.keys(item);
  const selectItems: string[] = [];
  const appStore = useAppStore();

  keys.forEach((key) => {
    if (key === "customer" || key === "invoice" || key === "product") {
      const items = appStore[key + "s"];
      if (Array.isArray(items)) {
        selectItems.push(...items.map((x: any) => x._id));
      }
    }
  });

  return selectItems;
};
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
            <template v-if="getSelects(key as string)">
              <FormLabel>{{ key }}</FormLabel>
              <Select v-model="formData[key]" :options="selectItems" v-bind="componentField">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue :placeholder="formData[key] as string" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem v-for="item in selectItems" :key="item" :value="item">
                      {{ item }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </template>
            <template v-else-if="key === 'date'"
              >{{ value }}
              <Input type="text" v-model="formData[key]" v-bind="componentField" class="hidden" />
            </template>
            <template v-else-if="key === '_id'">
              <Input type="text" v-model="formData[key]" v-bind="componentField" class="hidden" />
            </template>
            <template v-else-if="key === 'status'">
              <Input type="text" v-model="formData[key]" v-bind="componentField" class="hidden" />
            </template>
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
