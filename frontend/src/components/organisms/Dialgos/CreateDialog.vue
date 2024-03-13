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
import { onBeforeMount, ref } from 'vue'

interface CreateDialogProps {
  onChange: (item: any) => Promise<void>
  item: any
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
  console.log('begiinning')
  props.onChange(values)
})
const customersIDs = ref([''])
onBeforeMount(async () => {
  const appStore = useAppStore()
  const customers = appStore.customers
  customersIDs.value = customers.map((x) => x._id ?? '')
})
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button> Create </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ props.item.name }} </DialogTitle>
      </DialogHeader>

      <DialogDescription>
        <form class="w-2/3 space-y-6" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="name" v-if="props.item.name != undefined">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder=" Name" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="unitPrice"
            v-if="props.item.unitPrice != undefined"
          >
            <FormItem>
              <FormLabel>Unit Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" v-bind="componentField" />
              </FormControl>
              <FormDescription>'s price per unit.</FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="number"
            v-if="props.item.number != undefined"
          >
            <FormItem>
              <FormLabel>Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="customer"
            v-if="props.item.customer != undefined"
          >
            <FormItem>
              <FormLabel>Customer</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger class="w-[180px]">
                    <SelectValue placeholder="Select a Customer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <div v-for="customer in customersIDs" :key="customer">
                        <SelectItem value="customer"> {{ customer }} </SelectItem>
                      </div>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select type="select" placeholder="" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="Date" v-if="props.item.number != undefined">
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="Date" placeholder="0" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <Button type="submit">Submit</Button>
        </form>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>
