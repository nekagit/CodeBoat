<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import { columns } from '@/components/columns';
import type { Customer } from '@/data/schema';
const data: Array<Customer> = [
    {
        id: "1",
        fullName: "John Doe",
        address: "123 Main St",
        phoneNumber: "123-456-7890",
        property: {
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
            type: "house",
            bedrooms: 3,
            bathrooms: 2,
            amenities: ["Swimming Pool", "Gym"],
            pricePerNight: 150
        }
    },
];

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
