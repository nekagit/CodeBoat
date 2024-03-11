<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import { columns } from '@/components/columns';
import {  data } from '@/data/schema';


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
    <DataTable :data="data" :columns="columns" />
  </div>
</template>
