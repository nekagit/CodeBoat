<script setup lang="ts">
import type { AppModule } from '@/interfaces/shop/enums';
import { useAppStore } from '@/stores/appStore';
import CreateDialog from '../organisms/Dialgos/CreateDialog.vue';
const props = defineProps<{
  item: any
}>()

async function edit(item: any) {
  await useAppStore().createEdit(item, true, item.entityKey)
  await useAppStore().onInit()
}
</script>

<template>
   <CreateDialog
      :editMode="true"
      :onChange="edit"
      :item="props.item"
      :entityKey="props.item.entityKey as AppModule"
    />
</template>
