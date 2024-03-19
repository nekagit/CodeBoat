<script setup lang="ts">
import CreateDialog from '@/components/organisms/Dialgos/CreateDialog.vue';
import type { ICustomer } from '@/interfaces/atoms/ICustomer';
import type { IInvoice } from '@/interfaces/atoms/IInvoice';
import type { IProduct } from '@/interfaces/atoms/IProduct';
import { AppModule } from '@/interfaces/enums';
defineProps<{
  item: ICustomer | IInvoice | IProduct;
}>()

async function edit(item: any) {
  // Your edit function logic here
  return;
}
</script>

<template>
    <CreateDialog :editMode="true" :onChange="edit" :item="item as IProduct" />
</template>

