<script setup lang="ts">
import { AppModule } from '@/interfaces/enums';
import CustomTablePage from './CustomTablePage.vue';
</script>
<template>
    <CustomTablePage :entityKey="AppModule.Customer" :title="'Customer'" />
</template>
