<script setup lang="ts">
import '@/styles/base.css'
import '@/styles/index.css'
import '@/styles/main.css'
import 'animate.css'
import CircularMenu from '@/components/atoms/nav/CircularMenu.vue'
import BaseFooter from '@/components/atoms/BaseFooter.vue'
</script>
<template>
    <!-- <CircularMenu :title='"SOP Rotterdam"' /> -->
    <div class="w-full h-screen mx-auto">

        <RouterView />
    </div>
    <!-- <BaseFooter /> -->
</template>

<style scoped></style>
