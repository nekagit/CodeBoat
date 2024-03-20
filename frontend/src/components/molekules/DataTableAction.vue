<script setup lang="ts">
import CreateDialog from '../organisms/Dialgos/CreateDialog.vue';
defineProps<{
  item: any;
}>()

async function edit(item: any) {
  console.log(item)
  return;
}
</script>

<template>
    <CreateDialog :editMode="true" :onChange="edit" :item="item" />
</template>

