<script setup lang="ts">
</script>

<template>
    <div class="card-group">
        <div class="card">
            <div class="logo"><img
                src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png"
                alt="Visa"></div>
                <div class="chip"><img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png"
                    alt="chip"></div>
                    <div class="number">1234 5678 9012 3456</div>
                    <div class="name">SHOUNAK DAS</div>
                    <div class="from">10/19</div>
                    <div class="to">06/21</div>
                    <div class="ring"></div>
                </div>
            </div>
</template>

<style scoped>

/* Background circles start */

/* Background circles end */

.card-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card {
    position: relative;
    height: 270px;
    width: 450px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.logo img,
.chip img,
.number,
.name,
.from,
.to,
.ring {
    position: absolute;
    /* All items inside card should have absolute position */
}

.logo img {
    top: 35px;
    right: 40px;
    width: 80px;
    height: auto;
    opacity: 0.8;
}

.chip img {
    top: 120px;
    left: 40px;
    width: 50px;
    height: auto;
    opacity: 0.8;
}

.number,
.name,
.from,
.to {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    letter-spacing: 2px;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
}

.number {
    left: 40px;
    bottom: 65px;
    font-family: "Nunito", sans-serif;
}

.name {
    font-size: 0.5rem;
    left: 40px;
    bottom: 35px;
}

.from {
    font-size: 0.5rem;
    bottom: 35px;
    right: 110px;
}

.to {
    font-size: 0.5rem;
    bottom: 35px;
    right: 40px;
}

/* The two rings on the card background */
.ring {
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background: transparent;
    border: 50px solid rgba(255, 255, 255, 0.1);
    bottom: -250px;
    right: -250px;
    box-sizing: border-box;
}

.ring::after {
    content: "";
    position: absolute;
    height: 600px;
    width: 600px;
    border-radius: 50%;
    background: transparent;
    border: 30px solid rgba(255, 255, 255, 0.1);
    bottom: -80px;
    right: -110px;
    box-sizing: border-box;
}
</style>