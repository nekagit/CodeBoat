<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OMorph from '@/components/organisms/OMorph.vue'
import OAboutUs from '@/components/organisms/OAboutUs.vue'
import OGallery from '@/components/organisms/OGallery.vue'
import OContact from '@/components/organisms/OContact.vue'
import OImpressum from '@/components/organisms/OImpressum.vue'
</script>

<template>
  <main class="h-screen">
    <div class="hidden flex-col md:flex">
      <div class="flex-1 space-y-4 p-8 pt-6">
        <div class="flex items-center justify-between space-y-2">
          <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>

        <Tabs default-value="home" class="w-full">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="aboutUs">AboutUs</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="impressum">Impressum</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <OMorph />
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
      </div>
    </div>
  </main>
</template>

<style scoped></style>
