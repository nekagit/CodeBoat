<template>
  <CustomHeader />

  <div class="flex gap-3">
    <Sidebar :playlists="playlists" class="h-full sticky top-16" />
    <div class="flex flex-col flex-grow">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomHeader from "@/components/CustomHeader.vue"
import Sidebar from "@/components/Sidebar.vue"
import { playlists } from '@/data/playlist'
import "@/styles/base.css"
import "@/styles/index.css"
import "@/styles/main.css"
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
