<script setup lang="ts">
import CreateDialogForm from '@/components/organisms/Forms/CreateDialogForm.vue'
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
import { AppModule } from '@/interfaces/shop/enums'
import type { IForm } from '@/interfaces/shop/TableInterfaces'

const props = defineProps<{
  onChange: (item: IForm) => Promise<void>
  entityKey: AppModule
  editMode: boolean
  item: any
}>()

const isTabDisabled = (tabValue: string) => {
  return props.entityKey !== tabValue
}
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button>{{ props.editMode ? 'Edit' : 'Create' }}</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ props.editMode ? 'Edit' : 'Create' }} </DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <Tabs :default-value="props.entityKey as string" class="w-[400px]">
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
            <TabsTrigger :value="AppModule.Line" :disabled="isTabDisabled(AppModule.Line)"
              >InvoiceLine</TabsTrigger
            >
          </TabsList>
          <TabsContent :value="AppModule.Product">
            <CreateDialogForm
              :editMode="props.editMode"
              :item="props.item"
              :onChange="(x) => props.onChange(x)"
            />
          </TabsContent>
          <TabsContent :value="AppModule.Customer">
            <CreateDialogForm
              :editMode="props.editMode"
              :item="props.item"
              :onChange="(x) => props.onChange(x)"
            />
          </TabsContent>
          <TabsContent :value="AppModule.Order">
            <CreateDialogForm
              :editMode="props.editMode"
              :item="props.item"
              :onChange="(x) => props.onChange(x)"
            />
          </TabsContent>
           <TabsContent :value="AppModule.Line">
            <CreateDialogForm
              :editMode="props.editMode"
              :item="props.item"
              :onChange="(x) => props.onChange(x)"
            />
          </TabsContent>
        </Tabs>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>
@/interfaces/shop/TableInterfaces