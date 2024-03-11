<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import { columns } from '@/components/columns';
import type { IProduct } from '@/interfaces/atoms/IProduct';
import { useProductStore } from '@/stores/productsStore';
import { ref, onMounted } from 'vue';

// Typo fixed: loclaProducts -> localProducts
const localProducts = ref<IProduct[]>([]);

// Watch for changes in the product store
const productStore = useProductStore();
onMounted(async () => {
  localProducts.value = await productStore.getAll();
});
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
