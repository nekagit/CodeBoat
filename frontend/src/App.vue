<script setup lang="ts">
import '@/styles/base.css'
import '@/styles/index.css'
import '@/styles/main.css'
import 'animate.css'
import CircularMenu from '@/components/atoms/CircularMenu.vue'
import BaseFooter from '@/components/atoms/BaseFooter.vue' 
</script>
<template>
    <CircularMenu :title='"SOP Rotterdam"' />
    <div class="circles">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
            <div class="blob"></div>
            <div class="blob"></div> 
        </div>
        <RouterView />
    <BaseFooter />
</template>

<style scoped></style>
