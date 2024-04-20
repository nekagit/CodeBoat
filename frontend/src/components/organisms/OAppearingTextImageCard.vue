<script setup lang="ts">
interface OAppearingTextImageCard {
  imgSrc: string;
}
import { ref } from 'vue'
import AH1 from '../atoms/texts/AH1.vue'
import ACardImage from '@/components/atoms/ACardImage.vue'
defineProps<OAppearingTextImageCard>()
const count = ref(0)
const handleCount = () => {
  count.value++
  console.log(count.value)
  if (count.value > 2) {
    count.value = 0
  }
}
</script>

<template>
  <div class="container w-[70%]">
    <div class="card-img">
      <ACardImage :currentImage='imgSrc' :onClick="handleCount" />
    </div>
    <AH1
      :vIf="count > 0"
      :content="'Српско пријатељство из детињства СОП Сврха рада нашег друштва је: '"
    />
    <div v-if="count > 1" class="card">
      <p v-if="count > 1">
        да се деца кроз игру и спорт развијају позитивно физички, ментално и духовно. Без притиска
        успеха и резултата по сваку цену, ривалства и такмичења. Ту смо за вас и трудимо се да то
        урадимо, да подстакнемо младе, али и цео наш народ, да се више посветимо својој историји,
        култури, традицији и свим сегментима друштвеног развоја. Наши преци су нам оставили много у
        наслеђе и не смемо га се одрећи
      </p>
    </div>
  </div>
</template>

<style scoped>
.card-example {
  width: 90%;
  max-height: 33vh; /* Adjusted max-height */
  margin: 50px auto;
  border-radius: var(--border-radius);
  overflow: auto; /* Added overflow property for both horizontal and vertical scrolling */
}
.card-example .inner {
  padding: 25px;
  background: #222;
  color: #fff;
  border-radius: var(--border-radius);
}
.card-example h3 {
  margin-bottom: 15px;
}

.example-2 {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.example-2 .inner {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 2px;
}

.example-2 .inner {
  margin: 2px;
}

.example-2::before {
  content: '';
  display: block;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(102, 102, 102, 0.75) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 300px;
  width: 100px;
  transform: translate(0);
  position: absolute;
  animation: rotate 5s linear forwards infinite;
  z-index: 0;
  top: 50%;
  transform-origin: top center;
}

@keyframes svgAnimation {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 1000;
  }
}

@keyframes rotate {
  from {
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
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes animateOutline {
  0% {
    outline-width: 1px;
    outline-offset: 0;
    outline-color: rgba(0, 130, 206, 0);
  }

  10% {
    outline-color: rgba(0, 130, 206, 0.75);
  }

  /* The animation finishes at 50% */
  50% {
    outline-width: 7px;
    outline-offset: 4px;
    outline-color: rgba(0, 130, 206, 0);
  }

  100% {
    outline-width: 7px;
    outline-offset: 4px;
    outline-color: rgba(102, 102, 102, 0);
  }
}

.card {
  min-height: 300px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 1rem;
  padding: 1.5rem;
  color: whitesmoke;
}

.title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.btn {
  background: none;
  border: none;
  text-align: center;
  font-size: 1rem;
  color: whitesmoke;
  background-color: #fa709a;
  padding: 0.8rem 1.8rem;
  border-radius: 2rem;
  cursor: pointer;
}
/* 
.card2 {
  min-height: 300px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 1rem;
  padding: 1.5rem;
  color: whitesmoke;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.card2:hover {
  transform: rotateY(180deg);
}

.front2,
.back2 {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.front2 {
  z-index: 2;
}

.back2 {
  transform: rotateY(180deg);
  z-index: 1; 
}

.title2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.subtitle2 {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.back-text2 {
  font-size: 1rem;
  color: rgb(255, 0, 0);
}

.btn2 {
  background: none;
  border: none;
  text-align: center;
  font-size: 1rem;
  color: whitesmoke;
  background-color: #fa709a;
  padding: 0.8rem 1.8rem;
  border-radius: 2rem;
  cursor: pointer;
} */
</style>
