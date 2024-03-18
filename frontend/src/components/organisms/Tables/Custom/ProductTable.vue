<script setup lang="ts">
import CustomTable from '@/components/organisms/Tables/Custom/CustomTable.vue';
import TableService from '@/service/tableService';
const {productItem} = TableService()
</script>
<template>
<CustomTable :item="productItem" />  
</template>