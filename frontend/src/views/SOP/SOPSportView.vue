<template>
 
    <main>
      <h1 class="flex justify-end">STICHTING SOP ROTTERDAM</h1>
        <Tabs default-value="home">
          <TabsList  class="flex justify-end ">
               <TabsTrigger value="home">Home</TabsTrigger>
        <!-- <TabsTrigger value="aboutUs">AboutUs</TabsTrigger> -->
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
        <TabsTrigger value="impressum">Impressum</TabsTrigger>
      </TabsList>

          <TabsContent value="home">
            <section class="h-screen">
              <SOPSportHomePage />
            </section>
          </TabsContent>

          <!-- <TabsContent value="aboutUs">
            <section class="secc">
            <OAboutUs />
            </section>
          </TabsContent> -->

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
import OContact from '@/components/organisms/OContact.vue'
import OGallery from '@/components/organisms/OGallery.vue'
import OImpressum from '@/components/organisms/OImpressum.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import SOPSportHomePage from '../../pages/SOP/SOPSportHomePage.vue'

const activeTab = ref('home')

const isActive = (tabName: string) => {
  return computed(() => activeTab.value === tabName)
}
</script>

<style scoped>

</style>