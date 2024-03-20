<script setup lang="ts">
import type { AppModule } from '@/interfaces/enums';
import { useAppStore } from '@/stores/appStore';
import CreateDialog from '../organisms/Dialgos/CreateDialog.vue';
const props = defineProps<{
  item: any
}>()

async function edit(item: any) {
  await useAppStore().createEdit(item, true, item.entityKey)
  await useAppStore().onInit()
  return
}
console.log("edit modeeeeeeee",props.item)
</script>

<template>
   <CreateDialog
      :editMode="true"
      :onChange="edit"
      :item="props.item"
      :entityKey="props.item.entityKey as AppModule"
    />
</template>
