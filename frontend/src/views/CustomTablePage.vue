<script setup lang="ts">
import CreateDialog from '@/components/organisms/Dialgos/CreateDialog.vue'
import CustomTable from '@/components/organisms/Tables/Custom/CustomTable.vue'
import { AppModule } from '@/interfaces/enums'
import type { IForm } from '@/interfaces/TableInterfaces'
import ColumnsHelper from '@/service/columnsHelper'
import { useAppStore } from '@/stores/appStore'
import { onBeforeMount, ref } from 'vue'
const props = defineProps<{
  title: string
  entityKey: AppModule
}>()
const { customerItem, productItem, invoiceItem, invoiceLineItem } = ColumnsHelper()

const dialogItem = ref()
const setLocalItems = () => {
  if (props.entityKey == AppModule.Order) {
    dialogItem.value = invoiceItem.value
  } else if (props.entityKey == AppModule.Product) {
    dialogItem.value = productItem.value
  } else if (props.entityKey == AppModule.Customer) {
    dialogItem.value = customerItem.value
  } else if (props.entityKey == AppModule.Line) {
    dialogItem.value = invoiceLineItem.value
  }
}

onBeforeMount(() => {
  setLocalItems()
})

async function handleOnSubmit(values: any, editMode: boolean) {
  await useAppStore().createEdit(values, editMode, props.entityKey)
}
</script>

<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">{{ props.title }} Management</h2>
        <p class="text-muted-foreground">Table over {{ props.title }} Data</p>
      </div>
      <div class="flex items-center space-x-2"></div>
      <CreateDialog
        :editMode="false"
        :onChange="(item: IForm) => handleOnSubmit(item, false)"
        :item="dialogItem"
        :entityKey="props.entityKey"
      />
    </div>
    <CustomTable :entityKey="props.entityKey" />
  </div>
</template>
