<template>
  <div>
    <!-- <div class="d"></div> -->
      <OAppearingTextImageCard
      class="a"
      :imgSrc="kros"
      :title="sop.news[0].title"
      :content="sop.news[0].content"
    />

    <OAppearingTextImageCard 
      class="b"
    :imgSrc="kros" 
    :title="sop.news[1].title" 
    :content="sop.news[1].content" 
    />
    
    <OAppearingTextImageCard 
    class="c"
    :imgSrc="kros" 
    :title="sport.news[0].title" 
    :content="sport.news[0].content" 
    />
   <!-- 
    <ABaseCardAnBorder :variant="3"

    :title="school.news[0].title" 
    :content="school.news[0border-color
border-color
border-color
border-color].content" />

    <ABaseCardAnBorder :variant="3"

    :title="school.news[1].title" 
    :content="school.news[1].content" />

    <ABaseCardAnBorder :variant="3"
    <OverlapScroll />

    :title="school.news[2].title" 
    :content="school.news[2].content" /> -->
  </div>
</template>

<script setup lang="ts">
import kros from '@/assets/kros.png';
import OAppearingTextImageCard from '@/components/organisms/OAppearingTextImageCard.vue';
import SchoolAnnouncements from '@/data/SOP/school/school.json';
import SOPAnnouncements from '@/data/SOP/sop.json';
import SportAnnouncements from '@/data/SOP/sport/sport.json';
import { onMounted } from 'vue';
const {school} = SchoolAnnouncements
const {sport} = SportAnnouncements
const {sop} = SOPAnnouncements
onMounted(() => {
  const makeNewPosition = () => {
    const h = window.innerHeight - 100; // Adjusted to ensure at least 50px below top
    const w = window.innerWidth - 50;
    const nh = Math.floor(Math.random() * (h - 50)) + 50; // At least 50px below top
    const nw = Math.floor(Math.random() * w);
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
  setInterval(() => animate(a), 3100);
  animate(b);
  setInterval(() => animate(b), 3100);
  animate(c);
  setInterval(() => animate(c), 3100);
  animate(d);
  setInterval(() => animate(d), 3100);
});
</script>

<style scoped>
div {
  position: fixed;
}
/* 
.a {
  border: 1px solid;
  border-color: red;
}

.b {
  border: 1px solid;
  border-color: blue;
}

.c {
  border: 1px solid;
  border-color: green;
}

.d {
  border: 1px solid;
  border-color: yellow;
} */
</style>
