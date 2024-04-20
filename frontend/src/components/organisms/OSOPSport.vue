<template>
    <main>
   <div class="flex items-center justify-between space-y-2">
          <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>

        <Tabs default-value="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="aboutUs">AboutUs</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="impressum">Impressum</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
        main    <OMorph />
          </TabsContent>

          <TabsContent value="aboutUs">
            <OAboutUs />
          </TabsContent>

          <TabsContent value="gallery">
            <OGallery />
          </TabsContent>
          <TabsContent value="contact">
            <OContact />
          </TabsContent>
          <TabsContent value="impressum">
            <OImpressum />
          </TabsContent>
        </Tabs>
    </main>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OMorph from '@/components/organisms/OMorph.vue'
import OAboutUs from '@/components/organisms/OAboutUs.vue'
import OGallery from '@/components/organisms/OGallery.vue'
import OContact from '@/components/organisms/OContact.vue'
import OImpressum from '@/components/organisms/OImpressum.vue'
</script>

<style scoped>

</style>