<script setup lang="ts">
import { AppModule } from '@/interfaces/enums';
</script>
<template>
    <CustomTablePage :entityKey="AppModule.Customer" :title="'Customer'" />
</template>
