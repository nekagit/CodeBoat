<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="grid grid-cols-2 w-full lg:w-6/12 px-4">
          <h1 class="text-3xl fonat-semibold text-blueGray-700 mb-0">Хвала на посети!</h1>
   
          <div class="lg:mb-0 mb-6">
            <button
              class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-facebook"></i></button
            ><button
              class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-instagram"></i></button
            ><button
              class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          
          <img src="../../assets/logoo.png" alt="pic" style="float: right;" />
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          Copyright © Nenad Kalicanin
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            <a
              href="https://www.stichtingsoprotterdam.nl/assets/sop-huishoudelijk-reglement.pdf"
              class="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >
              Reglement</a
            >
            <br />
            <a href="https://docuverse.netlify.app" class="text-blueGray-500 hover:text-gray-800"
              >DocuVerse</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script setup lang="ts"></script>

<style scoped>
footer {
  margin-top: 21vh;
}
</style>
