<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AppModule } from '@/interfaces/enums'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { defineProps, onBeforeMount, ref } from 'vue'
import { z } from 'zod'

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

const props = defineProps<{
  onChange: (item: any) => Promise<void>
  item: any
}>()

const isTabDisabled = (tabValue: string) => {
  // Determine if the tab should be disabled based on the item type
  return props.item.entityKey !== tabValue
}
// Initialize formData with props.item
const formData = ref<IForm>(props.item)

const customersIDs = ref<string[]>([])

// Define method to filter formData keys based on props.item
const filterFormDataKeys = () => {
  const formDataTmp: IForm = {}
  const itemKeys = Object.keys(props.item)
  itemKeys.forEach((key) => {
    formDataTmp[key] = formData.value[key]
  })
  formData.value = formDataTmp
}

onBeforeMount(async () => {
  const appStore = useAppStore()
  const customers = appStore.customers
  customersIDs.value = customers.map((x) => x._id ?? '')
  filterFormDataKeys()
})

// Function to determine item type
function getItemType(item: any): string {
  if (item.customer !== undefined) {
    return 'customer'
  } else if (item.unitPrice !== undefined) {
    return 'product'
  } else if (item.invoiceTotal !== undefined) {
    return 'invoice'
  }
  return ''
}

// Define form schema for each type
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

// Get item type and corresponding form schema
const itemType = getItemType(props.item)
console.log(formSchemas[itemType], itemType)
const formSchema = toTypedSchema(formSchemas[itemType])

// Destructure useForm result
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: formData.value // Initialize with formData.value
})
const handleSub = handleSubmit((values) => {
  console.log('Submit button clicked. Values:', values)
  props.onChange(values)
})
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button>{{ 'Create' }}</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit/Create </DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <Tabs :default-value="props.item.entityKey" class="w-[400px]">
          <TabsList>
            <TabsTrigger :value="AppModule.Product" :disabled="isTabDisabled(AppModule.Product)"
              >Product</TabsTrigger
            >
            <TabsTrigger :value="AppModule.Customer" :disabled="isTabDisabled(AppModule.Customer)"
              >Customer</TabsTrigger
            >
            <TabsTrigger :value="AppModule.Order" :disabled="isTabDisabled(AppModule.Order)"
              >Invoice</TabsTrigger
            >
          </TabsList>
          <TabsContent :value="AppModule.Product">
            <form class="space-y-8" @submit.prevent="handleSub">
              <FormField
                v-for="(value, key) in formData"
                :key="key"
                v-slot="{ componentField }"
                :name="JSON.stringify(key)"
              >
                <FormItem>
                  <FormControl>
                    <!-- Render inputs based on the type of value -->
                    <template v-if="typeof value === 'number'">
                      <FormLabel>{{ key }}</FormLabel>
                      <Input type="number" placeholder="0" v-bind="componentField" />
                    </template>

                    <template v-else-if="key === 'customer'">
                      <FormLabel>{{ key }}</FormLabel>

                      <Select
                        v-model="formData[key]"
                        :options="customersIDs"
                        v-bind="componentField"
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue :placeholder="JSON.stringify(formData[key])" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem
                              v-for="customer in customersIDs"
                              :key="customer"
                              :value="customer"
                            >
                              {{ customer }}
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </template>
                    <template v-else-if="key === 'date'">{{ value }} </template>
                    <template v-else-if="key === 'status'"> {{ value }} </template>
                    <template v-else-if="key === 'entityKey'"> </template>
                    <template v-else>
                      <FormLabel>{{ key }}</FormLabel>
                      <Input
                        type="text"
                        v-model="formData[key]"
                        v-bind="componentField"
                        :placeholder="formData[key]"
                      />
                    </template>
                  </FormControl>
                </FormItem>
              </FormField>

              <div class="flex gap-2 justify-start">
                <Button type="submit"> Submit </Button>
                <Button type="button" @click="resetForm"> Reset </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent :value="AppModule.Customer">
            <form class="space-y-8" @submit.prevent="handleSub">
              <FormField
                key="customer"
                v-slot="{ componentField }"
                name="name"
              >
                <FormItem>
                  <FormControl>
                      <FormLabel>{{ props.item.name }}</FormLabel>
                      <Input
                        type="text"
                        :v-slot="formData.name"
                        v-bind="componentField"
                        :placeholder="formData.name"
                      />
                  </FormControl>
                </FormItem>
              </FormField>

              <div class="flex gap-2 justify-start">
                <Button type="submit"> Submit </Button>
                <Button type="button" @click="resetForm"> Reset </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent :value="AppModule.Order">
            <form class="space-y-8" @submit.prevent="handleSub">
              <FormField
                v-for="(value, key) in formData"
                :key="key"
                v-slot="{ componentField }"
                :name="JSON.stringify(key)"
              >
                <FormItem>
                  <FormControl>
                    <!-- Render inputs based on the type of value -->
                    <template v-if="typeof value === 'number'">
                      <FormLabel>{{ key }}</FormLabel>
                      <Input type="number" placeholder="0" v-bind="componentField" />
                    </template>

                    <template v-else-if="key === 'customer'">
                      <FormLabel>{{ key }}</FormLabel>

                      <Select
                        v-model="formData[key]"
                        :options="customersIDs"
                        v-bind="componentField"
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue :placeholder="JSON.stringify(formData[key])" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem
                              v-for="customer in customersIDs"
                              :key="customer"
                              :value="customer"
                            >
                              {{ customer }}
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </template>
                    <template v-else-if="key === 'date'">{{ value }} </template>
                    <template v-else-if="key === 'status'"> {{ value }} </template>
                    <template v-else-if="key === 'entityKey'"> </template>
                    <template v-else>
                      <FormLabel>{{ key }}</FormLabel>
                      <Input
                        type="text"
                        v-model="formData[key]"
                        v-bind="componentField"
                        :placeholder="formData[key]"
                      />
                    </template>
                  </FormControl>
                </FormItem>
              </FormField>

              <div class="flex gap-2 justify-start">
                <Button type="submit"> Submit </Button>
                <Button type="button" @click="resetForm"> Reset </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>
