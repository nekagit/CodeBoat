<script setup lang="ts">
import CustomTable from '@/components/organisms/Tables/Custom/CustomTable.vue';
import ColumnsHelper from '@/service/columnsHelper';
const {productItem, customerItem, invoiceItem} = ColumnsHelper()
</script>
<template>
<CustomTable :item="productItem" />  
<CustomTable :item="customerItem" />  
<CustomTable :item="invoiceItem" />  

</template>