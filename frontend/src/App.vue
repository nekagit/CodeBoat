<script setup lang="ts">
import IconTransition from '@/components/molekules/IconTransition.vue'
import Sidebar from '@/components/molekules/Sidebar.vue'
import CustomHeader from '@/components/organisms/CustomHeader.vue'
import '@/styles/base.css'
import '@/styles/index.css'
import '@/styles/main.css'
import 'animate.css'
import { ref } from 'vue'
const showIcon = ref(true)

setTimeout(() => {
  showIcon.value = false
}, 2000)
</script>

<template>
  <IconTransition v-if="showIcon" />
  <div v-else>
    <CustomHeader />
    <div class="flex gap-3 animate__animated animate__fadeIn">
      <Sidebar class="h-full sticky top-16" />
      <div class="flex flex-col flex-grow animate__animated animate__flash">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
