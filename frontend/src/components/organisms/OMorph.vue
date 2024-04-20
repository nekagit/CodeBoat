<script setup lang="ts">
import CreditCard from '@/components/molekules/CreditCard.vue';
</script>

<template>

    <div class="oMorphBody">

        <div class="container">
            <div class="card">
                <h1 class="title">Designed For Work</h1>
                <p class="subtitle">Introducing the first ever 5G enabled tablet. You've got a tablet that
                    let's you play harder and work smarter.</p>
                <button class="btn">Get Started</button>
            </div>
        
        </div>
        <div>
            <CreditCard />
        </div>
    </div>
</template>



<style scoped>

.oMorphBody {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Nunito", sans-serif;
}

.container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.card {
    width: 400px;
    min-height: 250px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 1rem;
    padding: 1.5rem;
    z-index: 10;
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

</style>