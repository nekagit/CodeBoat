<script setup lang="ts">
import EditDialog from '../organisms/Dialgos/EditDialog.vue';
defineProps<{
  item: any;
}>()

async function edit(item: any) {
  console.log(item)
  return;
}
</script>

<template>
    <EditDialog :onChange="edit" :item="item" />
</template>

