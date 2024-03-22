<script setup lang="ts">
</script>

<template>
  <div class="hidden flex-col md:flex">
    <div class="flex-1 space-y-4 p-8 pt-6">
      <div class="flex items-center justify-between space-y-2">
        <h2 class="text-3xl font-bold tracking-tight">
          Dashboard
        </h2>
      </div> 
      <p>
         Development In Progress - here will be a buying process
        </p>
         <!-- <Tabs :default-value="props.entityKey as string" class="w-[400px]">
          <TabsList>
            <TabsTrigger :value="AppModule.Product" :disabled="isTabDisabled(AppModule.Product)"
              >Product</TabsTrigger
            >
            <TabsTrigger :value="AppModule.Customer" :disabled="isTabDisabled(AppModule.Customer)"
              >Customer</TabsTrigger
            >
            <TabsTrigger :value="AppModule.Order" :disabled="isTabDisabled(AppModule.Order)"
              >Invoice</TabsTrigger
            >
            <TabsTrigger :value="AppModule.Line" :disabled="isTabDisabled(AppModule.Line)"
              >InvoiceLine</TabsTrigger
            >
          </TabsList>
          <TabsContent :value="AppModule.Product">
            <CreateDialogForm
              :editMode="props.editMode"
              :item="props.item"
              :onChange="(x) => props.onChange(x)"
            />
          </TabsContent>
          <TabsContent :value="AppModule.Customer">
            <CreateDialogForm
              :editMode="props.editMode"
              :item="props.item"
              :onChange="(x) => props.onChange(x)"
            />
          </TabsContent>
          <TabsContent :value="AppModule.Order">
            <CreateDialogForm
              :editMode="props.editMode"
              :item="props.item"
              :onChange="(x) => props.onChange(x)"
            />
          </TabsContent>
           <TabsContent :value="AppModule.Line">
            <CreateDialogForm
              :editMode="props.editMode"
              :item="props.item"
              :onChange="(x) => props.onChange(x)"
            />
          </TabsContent>
        </Tabs> -->
    </div>
  </div>
</template>

<style scoped>

</style>