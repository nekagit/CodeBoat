<template>
<ul>
  <li> <img src="https://source.unsplash.com/ezSFnAFi9hY/500x500" alt="cut citrus fruits. " />
    <span>Lorem Ipsum</span>
  </li>
  <li> <img src="https://source.unsplash.com/TIGDsyy0TK4/500x500" alt="sliced mango. " />
    <span>Dolor Sit</span>
  </li>
  <li> <img src="https://source.unsplash.com/TdDtTu2rv4s/500x500" alt="a bunch of blueberries. " /><span>Amet Consectetur</span></li>
  <li> <img src="https://source.unsplash.com/eudGUrDdBB0/500x500" alt="a pineapple sitting on a table. " /><span>Adipiscing Elit</span></li>
  <li> <img src="https://source.unsplash.com/eJH4f1rlG7g/500x500" alt="frozen raspberries. " /><span>Nunc Tortor</span></li>
  <li> <img src="https://source.unsplash.com/24RUrLSW1HI/500x500" alt="a sliced strawberry. " /><span>Metus Mollis</span></li>
  <li> <img src="https://source.unsplash.com/h5yMpgOI5nI/500x500" alt="an arrangement of assorted sliced fruits. " /><span>Congue Sagittis</span></li>
  <li> <img src="https://source.unsplash.com/2TYrR2IB72s/500x500" alt="sliced watermelons. " /><span>Vestibulum Et</span></li>
  <li> <img src="https://source.unsplash.com/1cWZgnBhZRs/500x500" alt="grapefruits, lemons, and pomegranates. " /><span>Donec Eget</span></li>
  <li> <img src="https://source.unsplash.com/9aOswReDKPo/500x500" alt="half of an avocado. " /><span>Maecenas et Justo</span></li>
  <li> <img src="https://source.unsplash.com/Nl7eLS8E2Ss/500x500" alt="half of a lime. " /><span>Malesuada Quam</span></li>
  <li> <img src="https://source.unsplash.com/3HhXWJzG5Ko/500x500" alt="a single cherry with stem. " /><span>Ultricies Sollicitudin</span></li>
  <li> <img src="https://source.unsplash.com/fczCr7MdE7U/500x500" alt="a bunch of bananas. " /><span>Gravida Nibh</span></li>
  <li> <img src="https://source.unsplash.com/uI900SItAyY/500x500" alt="three pears. " /><span>Pellentesque Sapien</span></li>
  <li> <img src="https://source.unsplash.com/0AynZdszfz0/500x500" alt="a basket full of peaches next to a plate with sliced peaches. " /><span>Suspendisse Vel</span></li>
  <li> <img src="https://source.unsplash.com/C6JhUKs9q8M/500x500" alt="a bowl of avocados. " /><span>Mauris Consectetur</span></li>
</ul>
</template>

<script setup lang="ts">
const lis = document.querySelectorAll("li");

console.log(lis.length);
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  background: #c8e6c9;
  scrollbar-color: #ef5350 #ffe;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  color: #fff;
}

ul {
  list-style: none;
  width: min(90vw, 51rem);
  max-width: 51rem;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2rem;
}

li {
  flex: 0 0 45vw;
  max-width: 18rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 20rem;

  span {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    padding: 0.75em;
    height: 100%;
    writing-mode: vertical-lr;
    text-align: center;
    transform: rotate(180deg);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%);
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #f44336cc 2%, transparent 60%);
    z-index: -1;
  }

  img {
    display: block;
    height: 20rem;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
    z-index: -2;
  }
}

$list-length: 16;
@media (min-width: 53rem) {
  @for $i from 1 to $list-length {
    li:nth-child(#{$i}) {
      $left: ($i * 2.2rem) - 2.2rem;
      left: #{$left};
    }
  }
}
</style>
