<template>
 
    <main>
        <Tabs default-value="home">
          <TabsList  class="sec">
               <TabsTrigger v-show="isActive('home')" value="home">Home</TabsTrigger>
        <TabsTrigger v-show="isActive('aboutUs')" value="aboutUs">AboutUs</TabsTrigger>
        <TabsTrigger v-show="isActive('gallery')" value="gallery">Gallery</TabsTrigger>
        <TabsTrigger v-show="isActive('contact')" value="contact">Contact</TabsTrigger>
        <TabsTrigger v-show="isActive('impressum')" value="impressum">Impressum</TabsTrigger>
      </TabsList>

          <TabsContent value="home">
            <section class="secc">
              <OAppearingTextImageCard :imgSrc="kros" />
            </section>
          </TabsContent>

          <TabsContent value="aboutUs">
            <section class="secc">
            <OAboutUs />
            </section>
          </TabsContent>

          <TabsContent value="gallery">
            <section class="secc">
            <OGallery />
            </section>
          </TabsContent>
          <TabsContent value="contact">
            <section class="secc">
            <OContact></OContact>
            </section>
          </TabsContent>
          <TabsContent value="impressum">
            <section class="secc">
            <OImpressum />
            </section>
          </TabsContent>
        </Tabs>
    </main>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue'
import OAboutUs from '@/components/organisms/OAboutUs.vue'
import OContact from '@/components/organisms/OContact.vue'
import OGallery from '@/components/organisms/OGallery.vue'
import OImpressum from '@/components/organisms/OImpressum.vue'
import OAppearingTextImageCard from '@/components/organisms/OAppearingTextImageCard.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import kros from '../../assets/kros.png'

const activeTab = ref('home')

const isActive = (tabName: string) => {
  return computed(() => activeTab.value === tabName)
}
</script>

<style scoped>

.sec {
  float: right !important;
  display: flex;
  margin-top:-100px;
  flex-direction: column;
}
.secc {
  
  margin-top:200px;
}
</style>