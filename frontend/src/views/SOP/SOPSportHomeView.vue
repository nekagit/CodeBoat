<template>
 
    <main>
        <Tabs default-value="home">
          <TabsList  class="sec">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="aboutUs">AboutUs</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="impressum">Impressum</TabsTrigger>
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
import OAboutUs from '@/components/organisms/OAboutUs.vue'
import OContact from '@/components/organisms/OContact.vue'
import OGallery from '@/components/organisms/OGallery.vue'
import OImpressum from '@/components/organisms/OImpressum.vue'
import OAppearingTextImageCard from '@/components/organisms/OAppearingTextImageCard.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import kros from '../../assets/kros.png'
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