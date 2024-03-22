<script setup lang="ts">
import IconTransition from '@/components/molekules/IconTransition.vue'
import Sidebar from '@/components/molekules/Sidebar.vue'
import '@/styles/base.css'
import '@/styles/index.css'
import '@/styles/main.css'
import 'animate.css'
import { ref } from 'vue'
const showIcon = ref(true)


setTimeout(() => {
  showIcon.value = false
}, 2000)
const isShop = ref(false)
const handleIsShop = () =>{
  isShop.value = !isShop.value
}
</script>
<template>
  <IconTransition v-if="showIcon" />
  <div v-else>
     <div class="sticky z-40 top-0 right-0 backdrop-blur-lg text-5xl  text-primary">
          {{isShop ? 'Shop': 'CodeBoat'}}
  </div>
    <button @click="handleIsShop">{{isShop ? 'CodeBoat': 'Shop'}}</button>
    <div class="flex gap-3 animate__animated animate__fadeIn">
      <Sidebar v-if="!isShop" class="h-full sticky top-16" :entries="['Home']" />
      <Sidebar v-else class="h-full sticky top-16" :entries="['Customers', 'Products','Invoices', 'InvoiceLines']" />
      <div class="flex flex-col flex-grow animate__animated animate__flash">
        <RouterView />
      </div>
    </div>
  </div>
</template> 

<style scoped>
</style>
