<template>
  <CustomHeader />

  <div class="flex gap-3">
    <Sidebar class="h-full sticky top-16" />
    <div class="flex flex-col flex-grow">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/molekules/Sidebar.vue"
import CustomHeader from "@/components/organisms/CustomHeader.vue"
import "@/styles/base.css"
import "@/styles/index.css"
import "@/styles/main.css"
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
