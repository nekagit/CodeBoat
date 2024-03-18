<script setup lang="ts">
import CustomTable from '@/components/organisms/Tables/Custom/CustomTable.vue';
import TableService from '@/service/tableService';
const {invoiceItem} = TableService()
</script>
<template>
<CustomTable :item="invoiceItem" />  
</template>
