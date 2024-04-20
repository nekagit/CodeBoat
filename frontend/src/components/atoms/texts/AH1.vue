<template>
       <h1 v-if="vIf" class="text-3xl">
    {{ content }}
  </h1>
</template>

<script setup lang="ts">
interface AAnimatedText {
    content: string,
    vIf: boolean,
}
defineProps<AAnimatedText>()
</script>

<style lang="scss" scoped>

</style>