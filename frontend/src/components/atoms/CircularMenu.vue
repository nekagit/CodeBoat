<template>
  <router-link to="/">
    <div class="pie pie1" onclick="document.body.classList.remove('active')">
      <div class="pie-color pie-color1 text">
        <p class="pie-text">Sport</p>
      </div>
    </div>
  </router-link>

  <router-link to="/school">
    <div class="pie pie2" onclick="document.body.classList.remove('active')">
      <div class="pie-color pie-color2">
       <p class="pie-text2">Skool</p>
      </div></div
  ></router-link>
  <router-link to="/codeboat">
    <div class="pie pie3" onclick="document.body.classList.remove('active')">
      <div class="pie-color pie-color3">
      <p class="pie-text3">CB</p>
      </div></div
  ></router-link>
  <div class="menu" onclick="document.body.classList.toggle('active')">
    <svg
      class="hamburger"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <g fill="none" stroke="#000" stroke-width="7.999" stroke-linecap="round">
        <path d="M 55,26.000284 L 24.056276,25.999716" />
        <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
        <path d="M 45,73.999716 L 75.943724,74.000284" />
        <path d="M 75.943724,26.000284 L 45,25.999716" />
        <path d="M 24.056276,73.999716 L 55,74.000284" />
      </g>
    </svg>
  </div>
  <!-- <div class="title">{{ props.title }}</div> -->
</template>

<script setup lang="ts">
const props = defineProps(['title'])
</script>

<style scoped>
.pie {
  -webkit-tap-highlight-color: transparent;
  color: black;
  border-radius: 50%;
  box-shadow: 0 0 4px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  height: 400px;
  position: absolute;
  left: -200px;
  top: -200px;
  width: 400px;
  transform: translateX(-200px) translateY(-200px);
  transition: transform 300ms;
}
.pie-text {
  position: absolute;
  bottom: 5%;
  left: 60%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: black; /* Change the color to ensure visibility */
  text-align: center;
}
.pie-text2 {
  position: absolute;
  bottom: 13%;
  right: 7%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: black; /* Change the color to ensure visibility */
  text-align: center;
}
.pie-text3 {
  position: absolute;
  top:58%;
  right: 7%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: black; /* Change the color to ensure visibility */
  text-align: center;
}
.pie-color:hover {
  opacity: 0.85;
}
.pie-color:active {
  opacity: 0.7;
}
.pie1 {
  clip-path: polygon(200px 200px, 344px 450px, 0 450px);
  transition-delay: 30ms;
  background-color: white;
  color: #000;
}
.pie2 {
  clip-path: polygon(200px 200px, 344px 450px, 450px 344px);
  transition-delay: 60ms;
}
.pie3 {
  clip-path: polygon(200px 200px, 450px 0, 450px 344px);
  transition-delay: 90ms;
}
.pie-color {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.pie-color1 {
  background: linear-gradient(135deg, #f12711, #f5af19);
  clip-path: polygon(200px 200px, 344px 450px, 0 450px);
}
.pie-color2 {
  background: linear-gradient(135deg, #444, #7e84f9);
  clip-path: polygon(200px 200px, 344px 450px, 450px 344px);
}
.pie-color3 {
  background: linear-gradient(135deg, #444, #b7e13f);
  clip-path: polygon(200px 200px, 450px 0, 450px 344px);
}
.card {
  left: 216px;
  position: absolute;
  top: 300px;
  width: 46px;
}
.discount {
  left: 288px;
  position: absolute;
  top: 258px;
  width: 46px;
}
.cart {
  left: 324px;
  position: absolute;
  top: 188px;
  width: 46px;
}
.menu {
  -webkit-tap-highlight-color: transparent;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 4px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  height: 200px;
  left: -100px;
  position: absolute;
  top: -100px;
  width: 200px;
}
.hamburger {
  cursor: pointer;
  height: 46px;
  left: 58%;
  position: relative;
  top: 58%;
  width: 46px;
}
.title {
  color: white;
  font-family: 'Crimson Text', serif;
  font-size: 80px;
  line-height: 84px;
  margin-top: 60px;
  text-align: center;
  z-index: 999!important;
}
.body {
  font-family: 'Work Sans', sans-serif !important;
}
.hamburger path {
  transition: transform 300ms;
}
.hamburger path:nth-child(1) {
  transform-origin: 25% 29%;
}
.hamburger path:nth-child(2) {
  transform-origin: 50% 50%;
}
.hamburger path:nth-child(3) {
  transform-origin: 75% 72%;
}
.hamburger path:nth-child(4) {
  transform-origin: 75% 29%;
}
.hamburger path:nth-child(5) {
  transform-origin: 25% 72%;
}
.active .pie {
  transform: translateX(0) translateY(0);
}
.active .hamburger path:nth-child(1) {
  transform: rotate(45deg);
}
.active .hamburger path:nth-child(2) {
  transform: scaleX(0);
}
.active .hamburger path:nth-child(3) {
  transform: rotate(45deg);
}
.active .hamburger path:nth-child(4) {
  transform: rotate(-45deg);
}
.active .hamburger path:nth-child(5) {
  transform: rotate(-45deg);
}
</style>
