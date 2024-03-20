<script setup lang="ts">
import CustomTable from '@/components/organisms/Tables/Custom/CustomTable.vue';
import ColumnsHelper from '@/service/columnsHelper';
const {invoiceItem} = ColumnsHelper()
</script>
<template>
<CustomTable :item="invoiceItem" />  
</template>
