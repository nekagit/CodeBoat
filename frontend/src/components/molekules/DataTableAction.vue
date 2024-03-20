<script setup lang="ts">
import type { IForm } from '@/interfaces/TableInterfaces';
import { useAppStore } from '@/stores/appStore';
import CreateDialog from '../organisms/Dialgos/CreateDialog.vue';
defineProps<{
  item: IForm
}>()

async function edit(item: any) {
  await useAppStore().createEdit(item, true, item.entityKey)
  await useAppStore().onInit()
  return
}
</script>

<template>
  <CreateDialog :editMode="true" :onChange="edit" :item="item" />
</template>
