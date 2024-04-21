<template>
  <div>
    <OAppearingTextImageCard
      class="a"
      :imgSrc="kros"
      :title="sop.news[0].title"
      :content="sop.news[0].content"
      @click="moveToCenter('a')"
    />

    <OAppearingTextImageCard 
      class="b"
      :imgSrc="kros" 
      :title="sop.news[1].title" 
      :content="sop.news[1].content" 
      @click="moveToCenter('b')"
    />
    
    <OAppearingTextImageCard 
      class="c"
      :imgSrc="kros" 
      :title="sport.news[0].title" 
      :content="sport.news[0].content" 
      @click="moveToCenter('c')"
    />
     <OAppearingTextImageCard 
      class="d"
      :imgSrc="kros" 
      :title="sport.news[0].title" 
      :content="sport.news[0].content" 
      @click="moveToCenter('d')"
    />
  </div>
</template>

<script setup lang="ts">
import kros from '@/assets/kros.png';
import OAppearingTextImageCard from '@/components/organisms/OAppearingTextImageCard.vue';
import SchoolAnnouncements from '@/data/SOP/school/school.json';
import SOPAnnouncements from '@/data/SOP/sop.json';
import SportAnnouncements from '@/data/SOP/sport/sport.json';
import { onMounted } from 'vue';

const { school } = SchoolAnnouncements;
const { sport } = SportAnnouncements;
const { sop } = SOPAnnouncements;

const moveToCenter = (target: string) => {
  // Hide all elements
  const elements = document.querySelectorAll('.a, .b, .c, .d');
  elements.forEach((element) => {
    if (element.classList.contains(target)) {
      // Move the clicked element to the center of the page
      element.style.top = `${(window.innerHeight - element.offsetHeight) / 2}px`;
      element.style.left = `${(window.innerWidth - element.offsetWidth) / 2}px`;
      element.style.zIndex = '1'; // Bring the clicked element to the front
    } else {
      element.style.display = 'none'; // Hide other elements
    }
  });
};

onMounted(() => {
  const makeNewPosition = () => {
    const h = window.innerHeight - 100; // Adjusted to ensure at least 50px below top
    const w = window.innerWidth - 100; // Adjusted to ensure at least 50px from left
    const nh = Math.floor(Math.random() * (h + 5)) + 5; // At least 50px below top
    const nw = Math.floor(Math.random() * (w - 5)) + 5; // At least 50px from left
    return { top: `${nh}px`, left: `${nw}px` };
  };

  const animate = (element: HTMLElement) => {
    const newPosition = makeNewPosition();
    element.style.transition = 'top 1.6s, left 1.6s'; // Add transition property
    element.style.top = newPosition.top;
    element.style.left = newPosition.left;
  };

  const a = document.querySelector('.a') as HTMLElement;
  const b = document.querySelector('.b') as HTMLElement;
  const c = document.querySelector('.c') as HTMLElement;
  const d = document.querySelector('.d') as HTMLElement;

  animate(a);
  animate(b);
  animate(c);
  animate(d);
  setInterval(() => animate(a), 3100);
  setInterval(() => animate(b), 3100);
  setInterval(() => animate(c), 3100);
  setInterval(() => animate(d), 3100);
});
</script>

<style scoped>
div {
  position: fixed;
  z-index:0;
}
</style>
