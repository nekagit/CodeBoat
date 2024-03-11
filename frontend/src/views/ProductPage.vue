<script setup lang="ts">
import DataTable from '@/components/organisms/Tables/DataTable.vue';
import  Button  from "@/components/ui/button/Button.vue";
import type { IProduct } from '@/interfaces/atoms/IProduct';
import { useProductStore } from '@/stores/productsStore';
import { ref } from 'vue';
// Watch for changes in the product store
 useProductStore().onInit()
const products = ref(useProductStore().products)
console.log(products.value)
const handleCreate = () => {
  useProductStore().createProduct({name: "asdf", unitPrice: 123} as IProduct)
} 
</script>

<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Product Management
        </h2>
        <p class="text-muted-foreground">
          Table over Customer Datas
        </p>
      </div>
      <div class="flex items-center space-x-2">
      </div>
    </div>
    <Button @click="handleCreate">Create</Button>
    <DataTable :data="products"  />
    <!-- <DataTable :data="customers"  />
    <DataTable :data="invoices"  /> -->
  </div>
</template>
