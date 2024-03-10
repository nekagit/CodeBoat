<template>
  <div class="sticky z-40 top-0 right-0 backdrop-blur-lg">
    <div class="border-b">
      <div class="flex h-16 items-center px-4">
        <h1 class="font-weight text-xl" style="min-width: 200px; margin:0 0 0 15px">
          PerfectHost
        </h1>
        <div class="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-3">
    <Sidebar :playlists="playlists" class="h-full sticky top-16" />
    <div class="flex flex-col flex-grow">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue"
import UserNav from "@/components/UserNav.vue"
import { playlists } from '@/data/playlist'
import "@/styles/base.css"
import "@/styles/index.css"
import "@/styles/main.css"
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
