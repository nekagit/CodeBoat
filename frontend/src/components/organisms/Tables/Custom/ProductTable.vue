<script setup lang="ts">

import { useProductStore } from '@/stores/productsStore';
import { ref } from 'vue';

  const showDialog = ref(false)

useProductStore().onInit()
const localProducts = ref(useProductStore().products)



</script>

<template>
    <DataTable :data="localProducts" />
    <CreateDialog />
    <EditDialog />
</template>

