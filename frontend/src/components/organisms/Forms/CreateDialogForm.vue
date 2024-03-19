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
  import type { IForm } from '@/service/tableService'
  import { useAppStore } from '@/stores/appStore'

  // Define props
  const props = defineProps<{
    onChange: (item: any) => Promise<void>
    item: any
  }>()

 // Initialize formData with props.item
const formData = ref<IForm>(props.item)

const customersIDs = ref<string[]>([])

// Define method to filter formData keys based on props.item
const filterFormDataKeys = () => {
  const formDataTmp: IForm = {}
  const itemKeys = Object.keys(props.item)
  itemKeys.forEach((key) => {
    formDataTmp[key] = formData.value[key] ?? null
  })
  formData.value = formDataTmp
}

onBeforeMount(async () => {
  const appStore = useAppStore()
  const customers = appStore.customers
  customersIDs.value = customers.map((x) => x._id ?? ' ')
  filterFormDataKeys()
})

// Define formSchema
const formSchema = toTypedSchema(
  z.object({
    name: z.string().nullable(),
    unitPrice: z.number().nullable(),
    number: z.number().nullable(),
    invoiceTotal: z.number().nullable(),
    customer: z.string().nullable(),
    quantity: z.number().nullable()
  })
)

// Destructure useForm result
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: formData.value // Initialize with formData.value
})

const handleSub = handleSubmit((values) => {
  console.log('Submit button clicked. Values:', values)
  props.onChange(values)
})

  console.log(formData.value, props.item)
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
              <!-- Render inputs based on the type of value -->
              <template v-if="typeof value === 'number'">
                <FormLabel>{{ key }}</FormLabel>

                <Input type="number" placeholder="0" v-bind="componentField" />
              </template>

              <template v-else-if="key === 'customer'">
                <FormLabel>{{ key }}</FormLabel>

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
              <template v-else-if="key === 'date'">{{value}}  </template>
              <template v-else-if="key === 'status'"> {{value}} </template>
              <template v-else-if="key === 'entityKey'"> </template>
              <template v-else>
                <FormLabel>{{ key }}</FormLabel>

                <Input type="text" v-model="formData[key]" v-bind="componentField" />
              </template>
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
