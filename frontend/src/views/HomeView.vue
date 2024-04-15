<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DataScraper from '@/components/organisms/ODataScraper.vue'
</script>

<template>
  <div class="hidden flex-col md:flex">
    <div class="flex-1 space-y-4 p-8 pt-6">
      <div class="flex items-center justify-between space-y-2">
        <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <Tabs default-value="data" class="w-full">
        <TabsList>
          <TabsTrigger value="data">data</TabsTrigger>
          <TabsTrigger value="chatBot">chatBot</TabsTrigger>
          <TabsTrigger value="dataScrape">dataScrape</TabsTrigger>
        </TabsList>

        <TabsContent value="data">
          <DataScraper />
        </TabsContent>
        <TabsContent value="chatBot">
          <DataScraper />
        </TabsContent>
        <TabsContent value="dataScrape">
          <DataScraper />
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<style scoped></style>
