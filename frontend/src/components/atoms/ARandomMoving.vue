<template>
  <div>
    <div class="a"></div>
    <div class="b"></div>
    <div class="c"></div>
    <div class="d"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const animateDiv = (element: HTMLElement) => {
  const makeNewPosition = () => {
    const h = window.innerHeight - 50;
    const w = window.innerWidth - 50;
    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);
    return { top: `${nh}px`, left: `${nw}px` };
  };

  const animate = () => {
    const newPosition = makeNewPosition();
    element.style.top = newPosition.top;
    element.style.left = newPosition.left;
    setTimeout(animate, 1000);
  };

  animate();
};

onMounted(() => {
  const a = document.querySelector('.a') as HTMLElement;
  const b = document.querySelector('.b') as HTMLElement;
  const c = document.querySelector('.c') as HTMLElement;
  const d = document.querySelector('.d') as HTMLElement;
  animateDiv(a);
  animateDiv(b);
  animateDiv(c);
  animateDiv(d);
});
</script>

<style scoped>
div {
  width: 50px;
  height: 50px;
  position: fixed;
}

.a {
  background-color: red;
}

.b {
  background-color: blue;
}

.c {
  background-color: green;
}

.d {
  background-color: yellow;
}
</style>
