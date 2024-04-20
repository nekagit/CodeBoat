<script setup lang="ts">
import CreditCard from '@/components/molekules/CreditCard.vue'
import MenuSplit from '@/components/molekules/MenuSplit.vue'
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-img">
        <img src="../../assets/kros.png" alt="Image Description" />
      </div>
      <h1 class="title">SOP ROTERDAM</h1>
      <p class="subtitle">
        Српско пријатељство из детињства СОП Сврха рада нашег друштва је: да се деца кроз игру и
        спорт развијају позитивно физички, ментално и духовно. Без притиска успеха и резултата по
        сваку цену, ривалства и такмичења. Ту смо за вас и трудимо се да то урадимо, да подстакнемо
        младе, али и цео наш народ, да се више посветимо својој историји, култури, традицији и свим
        сегментима друштвеног развоја. Наши преци су нам оставили много у наслеђе и не смемо га се
        одрећи
      </p>
    </div>
  </div>

    <!-- <CreditCard /> -->

<div class="container2">
  <div class="card2">
    <div class="front2">
      <div class="card-img2">
      </div>
      <h1 class="title2">SOP ROTERDAM</h1>
      <p class="subtitle2">asdf</p>
    </div>
    <div class="back2">
      <p class="back-text2">Back of the Card Text</p>
    </div>
  </div>
</div>
</template>

<style scoped>
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
  transition: transform 3s;
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
}
</style>
