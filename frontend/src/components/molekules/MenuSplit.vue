<template>
 <div>
    <button @click="toggleMenu" class="open-menu">Open Menu</button>
    <div class="menu" :class="{ 'open': isOpen }">
      <div class="overlay"></div>
      <div class="close" @click="toggleMenu">&times;</div>
      <div class="menu-container">
        <div class="left"></div>
        <div class="right">
          <nav role='navigation'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Clients</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>  
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

</script>
<style lang="scss" scoped>

@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400);
@mixin vertical-align {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

@mixin background-size {
  background-size: cover;
}

@mixin transform($args) {
  -webkit-transform: $args;
  -ms-transform: $args;
  transform: $args;
}

@mixin transition($args) {
  -webkit-transition: $args;
  -o-transition: $args;
  transition: $args;
}
.menuSplitBody {
  background: #3498db; 
  @include background-size;
  font-family: 'Roboto Condensed'; 
  font-size: 16px;
  -webkit-backface-visibility: hidden;
  @include transform(translate3d(0 0 0));
}

a {
  text-decoration: none;
  color: rgba(#2c3e50, 0.65);
  @include transition(all 0.2s ease);
  &:hover {
    color: #2c3e50;
  }
}

nav ul {
  list-style: none outside none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.open-menu {
  background: white;
  color: #3498db;
  display: inline-block;
  font-size: 1.5em;
  font-weight: bold;
  padding: 15px 30px;
  position: absolute;
  text-decoration: none;
  left: 50%;
  top: 50%;
  @include transform(translate(-50%));
}

.menu {
  display:none;
  &.open {
    display: block;
    overflow: visible;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include transform(translateY(1000%));
  
  -webkit-animation: rise 1s 1 ease forwards; 
  z-index: 2000;
    
    &.closing {
      -webkit-animation: fall 3s 1 ease forwards;
    }
  
  .overlay {
    background: rgba(#2c3e50, 0.75);
    display: block;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    
    -webkit-animation: fadein .25s 1s 1 ease forwards;
  }
  
  .close {
    color: white;
    cursor: pointer;
    z-index: 3000;
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2em;
    font-weight: bold;
  }
  
  .menu-container {
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
  }
  
  .left, .right {
    height: 100%;
    overflow: hidden;
    position: relative;
    top: 0;
    width: 1px;
    -webkit-animation: grow 1s 1.25s 1 ease forwards;
  }
  .left {
    right: 50%; 
    float: right;
    background: #3e9ddd;
  }
  .right {
    left: 50%;
    float: left;
    background: #2980b9;
    nav {
      @include vertical-align;
      opacity: 0;
      -webkit-animation: slide 1s 2.25s 1 ease forwards;
      a {
        font-size: 2em;
        font-weight: 300;
      }
    }
  }
  }
}

@-webkit-keyframes rise {
  0% {
    //opacity: 0;
    @include transform(translateY(1000%));
  }
  100% {
    opacity: 1;
    @include transform(translateY(0));
  }
}

@-webkit-keyframes fall {
  0% {
    opacity: 1;
    @include transform(translateY(0));
    @include transform(scale(1));
  }
  25% {
    opacity: 0;
    @include transform(scale(2)); 
  }
  26% {
    opacity: 0;
    @include transform(translateY(1000%));
  }
  27% {
    opacity: 0;  
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    @include transform(scale(1));
    @include transform(translateY(1000%));
  }
  
}

@-webkit-keyframes grow {
  0% {
    width: 1px;
  }
  100% {
    width: 50%;
  }
}

@-webkit-keyframes shrink {
  0% {
    width: 50%;
  }
  100% {
    width: 1px;
  }
}



@-webkit-keyframes fadein { 
  0% {
    
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes slide {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>