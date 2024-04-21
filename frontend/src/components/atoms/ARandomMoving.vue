<template>
  <div>
    <OAppearingTextImageCard
      v-for="(item, index) in items"
      :key="index"
      :class="item.class"
      :imgSrc="kros"
      :title="item.title"
      :content="item.content"
      @click="moveToCenter(item.class)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import kros from '@/assets/kros.png'
import OAppearingTextImageCard from '@/components/organisms/OAppearingTextImageCard.vue'
import SchoolAnnouncements from '@/data/SOP/school/school.json'
import SOPAnnouncements from '@/data/SOP/sop.json'
import SportAnnouncements from '@/data/SOP/sport/sport.json'

const { school } = SchoolAnnouncements
const { sport } = SportAnnouncements
const { sop } = SOPAnnouncements

const items = [
  { class: 'a', title: sop.news[0].title, content: sop.news[0].content },
  { class: 'b', title: sop.news[1].title, content: sop.news[1].content },
  { class: 'c', title: sport.news[0].title, content: sport.news[0].content },
  { class: 'd', title: sport.news[0].title, content: sport.news[0].content }
]

const isAnimating = ref(true)
const isCentered = ref(false)

const moveToCenter = (target: string) => {
  if (!isAnimating.value) {
    return;
  }

  const elements = document.querySelectorAll('.a, .b, .c, .d') as NodeListOf<HTMLElement>;

  elements.forEach((element) => {
    if (element.classList.contains(target)) {
      if (!isCentered.value) {
        isAnimating.value = false;
        isCentered.value = true;
        element.style.transition = 'top 1.6s, right 1.6s'; // Add transition property
        element.style.top = `${(window.innerHeight - element.offsetHeight) / 2}px`;
        element.style.right = `${(window.innerWidth - element.offsetWidth) / 2}px`;
        element.style.zIndex = '1'; // Bring the clicked element to the front

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', () => {
          closeButton.remove();
          isCentered.value = false;
          elements.forEach((el) => {
            el.style.display = 'block';
            animate(el);
          });
          setTimeout(() => {
            isAnimating.value = true;
          }, 4200);
        });
        element.appendChild(closeButton);
      } else {
        // If already centered, just close
        const button = element.querySelector('.close-button') as HTMLButtonElement;
        button.click(); // Trigger click event
      }
    } else {
      element.style.display = 'none';
    }
  });
};
const makeNewPosition = () => {
  const padding = 100; // Padding from the edges
  const minX = padding; // Minimum x-coordinate (right edge with padding)
  const maxX = window.innerWidth - padding - 400; // Maximum x-coordinate (right edge with padding minus element width)
  const minY = padding; // Minimum y-coordinate (top edge with padding)
  const maxY = window.innerHeight - padding - 100; // Maximum y-coordinate (bottom edge with padding minus element height)

  // Generate random coordinates within the padded area
  const newX = Math.random() * (maxX - minX) + minX;
  const newY = Math.random() * (maxY - minY) + minY;

  return { top: `${newY}px`, right: `${newX}px` };
};

const animate = (element: HTMLElement) => {
  // Perform type assertion to ensure 'element' is treated as 'HTMLElement'
  const htmlElement = element as HTMLElement;

  const newPosition = makeNewPosition();
  htmlElement.style.transition = 'top 1.6s, right 1.6s';
  htmlElement.style.top = newPosition.top;
  htmlElement.style.right = newPosition.right;
};

onMounted(() => {
  const elements = document.querySelectorAll('.a, .b, .c, .d')
  if (isAnimating.value) {
    elements.forEach((element) => {
      animate(element as HTMLElement)
      setInterval(() => {
        if (isAnimating.value) {
          animate(element as HTMLElement)
        }
      }, 4200)
    })
  }
})
</script>

<style scoped>
div {
  position: fixed;
  z-index: 0;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
</style>
