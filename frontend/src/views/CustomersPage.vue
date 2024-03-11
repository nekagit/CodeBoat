<script setup lang="ts">
import { columns } from '@/components/columns';
import DataTable from '@/components/organisms/DataTable.vue';
import type { IProduct } from '@/interfaces/atoms/IProduct';
import { useProductStore } from '@/stores/productsStore';
import { ref } from 'vue';

// Watch for changes in the product store
const products = useProductStore().products;
const localProducts = ref<IProduct[]>(products);

</script>

<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Customer Management
        </h2>
        <p class="text-muted-foreground">
          Table over Customer Datas
        </p>
      </div>
      <div class="flex items-center space-x-2">
      </div>
    </div>
    <DataTable :data="localProducts" :columns="columns" />
  </div>
</template>
