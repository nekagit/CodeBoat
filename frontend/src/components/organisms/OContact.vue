<script setup lang="ts">

</script>

<template>


  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img
          src="https://64.media.tumblr.com/c52608d4313c3f351d158f6ae496fa21/tumblr_o604ztZgoC1twq7rlo1_500.jpg"
        />
      </div>
      <div class="content">
        <div class="contentBx">
          <h3>Sasa Peric<br /><span></span></h3>
        </div>
        <ul class="sci">
          <li style="--i: 1">
            <a href="#"><i class="fab fa-facebook"></i></a>
          </li>
          <li style="--i: 2">
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li style="--i: 3">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img
          src="https://64.media.tumblr.com/395eb0a4fbfd1c0479840301c945b865/1a3901cd78bc2cd8-d9/s500x750/66a46fcb7046257acfc2c40fc7c4910de8e5f60a.png"
        />
      </div>
      <div class="content">
        <div class="contentBx">
          <h3>Predrag Joldic<br /><span></span></h3>
        </div>

        <ul class="sci">
          <li style="--i: 1">
            <a href="#"><i class="fab fa-facebook"></i></a>
          </li>
          <li style="--i: 2">
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li style="--i: 3">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img
          src="https://64.media.tumblr.com/a2b2b4321a08908a42af3a8956f03852/7130d0e12213d6ab-25/s500x750/fee178077b277f7a77a76a42d0929110fe2be1de.jpg"
        />
      </div>
      <div class="content">
        <div class="contentBx">
          <h3>Aleksandar Vasic<br /><span></span></h3>
        </div>

        <ul class="sci">
          <li style="--i: 1">
            <a href="#"><i class="fab fa-facebook"></i></a>
          </li>
          <li style="--i: 2">
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li style="--i: 3">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img
          src="https://64.media.tumblr.com/395eb0a4fbfd1c0479840301c945b865/1a3901cd78bc2cd8-d9/s500x750/66a46fcb7046257acfc2c40fc7c4910de8e5f60a.png"
        />
      </div>
      <div class="content">
        <div class="contentBx">
          <h3>Milan Vukas<br /><span>President</span></h3>
        </div>
        <ul class="sci">
          <li style="--i: 1">
            <a href="#"><i class="fab fa-facebook"></i></a>
          </li>
          <li style="--i: 2">
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li style="--i: 3">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>>
    </div>

    <div class="cardd example-2">
      <div class="inner">
        Контакт Удружење Српско Омладинско Пријатељство Ротердам admin@stichtingsoprotterdam.nl
      </div>
    </div>
  </div>

    
</template>



<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
}
.container .card {
  position: relative;
  width: 200px;
  height: 300px;
  margin: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .card .content {
  position: absolute;
  bottom: -160px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: column;
  backdrop-filter: blur(15px);
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: bottom 0.5s;
  transition-delay: 0.8s;
}
.container .card:hover .content {
  bottom: 0px;
  transition-delay: 0s;
}
.container .card .content .contentBx h3 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.1em;
  text-align: center;
  margin: 5px 0 15px;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(-20px);
  transition-delay: 0.6s;
}
.container .card:hover .content .contentBx h3 {
  opacity: 1;
  transform: translateY(0px);
}
.container .card .content .contentBx h3 span {
  font-size: 9px;
  font-weight: 300;
  text-transform: initial;
}
.container .card .content .sci {
  position: relative;
  bottom: 10px;
  display: flex;
}
.container .card .content .sci li {
  list-style: none;
  margin: 10px;
  transform: translateY(40px);
  transition: 0.5s;
  opacity: 0;
  transition-delay: calc(0.2s * var(--i));
}
.container .card:hover .content .sci li {
  transform: translateY(0px);
  opacity: 1;
}

.container .card .content .sci li a {
  color: #fff;
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

/* @keyframes rotate {
  from {
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
} */


.cardd {
  max-width: 400px;
  width: 100%;
  margin: 50px auto;
  border-radius: var(--border-radius);
}

.cardd .inner {
  padding: 25px;
  background: #222;
  color: #fff;
  border-radius: var(--border-radius);
}

.cardd h3 {
  margin-bottom: 15px;
}
</style>