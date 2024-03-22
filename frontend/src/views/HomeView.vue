<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/lib/registry/new-york/ui/tabs';
</script>

<template>
  <div class="hidden flex-col md:flex">
    <div class="flex-1 space-y-4 p-8 pt-6">
      <div class="flex items-center justify-between space-y-2">
        <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <Tabs default-value="docusaurus" class="w-full">
        <TabsList>
          <TabsTrigger value="docusaurus">Docusaurus</TabsTrigger>
          <TabsTrigger value="webseite">Webseite</TabsTrigger>
          <TabsTrigger value="rySport">RYSport</TabsTrigger>
          <TabsTrigger value="jamal">Jamal</TabsTrigger>
          <TabsTrigger value="stankovicArt">StankovicArt</TabsTrigger>
          <TabsTrigger value="stichting">SOP Rotterdam</TabsTrigger>
        </TabsList>
        
        <TabsContent value="docusaurus">
          <a href="http://docuverse.netlify.app" class="float-right transition-colors hover:text-primary">Docusaurus</a>
          <iframe src="http://docuverse.netlify.app"></iframe>
            <TabsContent value="DevHelps">
          <a href="https://webseite.netlify.app/" class="float-right transition-colors hover:text-primary">DevHelps</a>
          <iframe src="https://webseite.netlify.app/"></iframe>
        </TabsContent>
        </TabsContent>
           <TabsContent value="rySport">
          <a href="http://docuverse.netlify.app" class="float-right transition-colors hover:text-primary">RYSport</a>
          <iframe src="http://docuverse.netlify.app"></iframe>
        </TabsContent>
        <TabsContent value="jamal">
          <a href="http://docuverse.netlify.app" class="float-right transition-colors hover:text-primary">Jamal</a>
          <iframe src="http://docuverse.netlify.app"></iframe>
        </TabsContent>
        <TabsContent value="stankovicArt">
          <a href="https://www.stankovicart.com/" class="float-right transition-colors hover:text-primary">StankovicArt</a>
          <iframe src="https://www.stankovicart.com/"></iframe>
        </TabsContent>
        <TabsContent value="stichting">
          <a href="https://www.stichtingsoprotterdam.nl" class="float-right transition-colors hover:text-primary">SOP Rotterdam</a>
          <iframe src="https://www.stichtingsoprotterdam.nl"></iframe>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<style scoped>
iframe {
  width: 100%;
  height: 100vh; /* Set height to 100vh */
  border: none;
}
</style>
