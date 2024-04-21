<script setup lang="ts">
import { AppModule } from '@/interfaces/shop/enums';
import CustomTablePage from './CustomTablePage.vue';
</script>
<template>
    <CustomTablePage :entityKey="AppModule.Product" :title="'Product'" />
</template>
