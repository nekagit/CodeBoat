<script setup lang="ts">
interface IAImage {
  currentImage: string
  onClick: () => void
}
const props = defineProps<IAImage>()
</script>

<template>
  <div class="flex items-center justify-center card-img">
    <img @click="onClick" :src="props.currentImage" alt="noPic" class="customImage" />
  </div>
</template>

<style scoped>
.card-img {
  position: relative;
  text-align: center; /* Center the image horizontally */
}

.card-img img {
  display: block;
  border-radius: 50%; /* Make the image rounded */
  width: 150px;
  height: auto;
  margin: 0 auto; /* Center the image horizontally */
  transition: transform 0.3s ease-in-out;
}

.card-img:hover img {
  transform: translateY(-5px); /* Adjust the value as needed */
}
</style>
