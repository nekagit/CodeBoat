<script setup lang="ts">
import EditDialogForm from '@/components/organisms/Forms/EditDialogForm.vue'
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
import { defineProps } from 'vue'
const props = defineProps<{
  onChange: (item: any) => Promise<void>
  item: any
}>()

const isTabDisabled = (tabValue: string) => {
  // Determine if the tab should be disabled based on the item type
  return props.item.entityKey !== tabValue
}
console.log("editdialog")
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button>{{ 'Edit'  }}</Button>
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
            <EditDialogForm :item="props.item" :onChange="props.onChange" />
          </TabsContent>
          <TabsContent :value="AppModule.Customer">
            <EditDialogForm :item="props.item" :onChange="props.onChange" />
          </TabsContent>
          <TabsContent :value="AppModule.Order">
            <EditDialogForm :item="props.item" :onChange="props.onChange" />
          </TabsContent>
        </Tabs>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>

