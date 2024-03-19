<script setup lang="ts">
import { Calendar } from '@/lib/registry/new-york/ui/calendar';
import { ref } from 'vue';

const date = ref(new Date().toISOString())
</script>

<template>
  <Calendar v-model="date" class="rounded-md border" />
</template>
