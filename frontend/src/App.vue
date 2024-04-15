<script setup lang="ts">
import '@/styles/base.css'
import '@/styles/index.css'
import '@/styles/main.css'
import 'animate.css'
import CircularMenu from '@/components/atoms/CircularMenu.vue'
</script>
<template>
    <CircularMenu :title='"SOP Rotterdam"' />
    <RouterView />
</template>

<style scoped></style>
