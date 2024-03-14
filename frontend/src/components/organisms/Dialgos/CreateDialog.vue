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
import { useAppStore } from '@/stores/appStore'
import { h, onBeforeMount, ref } from 'vue'

import { Input } from '@/lib/registry/new-york/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/lib/registry/new-york/ui/select'
import { toast } from '@/lib/registry/new-york/ui/toast'

// Define shopModalSchema
const shopModalSchema = z.object({
  name: z.string(),
  unitPrice: z.number(),
  customer: z.string().nullable()
})

// Define FormData interface
interface FormData {
  [key: string]: string | number | null
}

// Initialize formData
const formData = ref<FormData>({
  name: 'Initial Name',
  unitPrice: 10,
  customer: null
})

// Define formSchema
const formSchema = toTypedSchema(shopModalSchema)

// Destructure useForm result
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: formData.value
})

// Define onSubmit function
const onSubmit = handleSubmit((values) => {
  props.onChange(values)
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    )
  })
})

// Define props
const props = defineProps<{
  onChange: (item: any) => Promise<void>
  item: any
}>()

// Initialize customersIDs
const customersIDs = ref<string[]>([''])

// Fetch customers IDs on component mount
onBeforeMount(async () => {
  const appStore = useAppStore()
  const customers = appStore.customers
  customersIDs.value = customers.map((x) => x._id ?? '')
})

// Define method to filter formData keys based on props.item
const filterFormDataKeys = () => {
  const filteredKeys = Object.keys(formData.value).filter(key => props.item.hasOwnProperty(key))
  const filteredFormData: FormData = {}
  filteredKeys.forEach(key => {
    filteredFormData[key] = formData.value[key]
  })
  formData.value = filteredFormData
}

// Call the method to filter formData keys based on props.item
filterFormDataKeys()
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button> Create </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit/Create </DialogTitle>
      </DialogHeader>

      <DialogDescription>
        <form class="space-y-8" @submit.prevent="onSubmit">
          <FormField
            v-for="(value, key) in formData"
            :key="key"
            v-slot="{ componentField }"
            :name="key.toString()"
          >
            <FormItem>
              <FormLabel>{{ key }}</FormLabel>
              <FormControl>
                <Input
                  v-if="typeof value === 'number'"
                  type="number"
                  placeholder="0"
                  v-bind="componentField"
                />

                <Input
                  v-if="typeof value === 'string'"
                  type="text"
                  v-model="formData[key.toString()]"
                  v-bind="componentField"
                />
                <Select
                  v-else
                  v-model="formData[key.toString()]"
                  :options="customersIDs"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>


          <FormField
            v-if="props.item.customer != undefined"
            v-slot="{ componentField }"
            name="customer"
          >
            <FormItem>
              <FormLabel>Customer</FormLabel>

              <Select v-bind="componentField">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an customer" />
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
              <FormDescription>
                You can manage verified email addresses in your email settings.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <div class="flex gap-2 justify-start">
            <Button type="submit"> Submit </Button>
            <Button type="button" @click="resetForm"> Reset </Button>
          </div>
        </form>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>
