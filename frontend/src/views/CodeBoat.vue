<template>
  <div class="container flex flex-col justify-around h-screen">
    <div class="iframe-container border w-full h-full">
      <iframe src="https://stankovicart.netlify.app" frameborder="0"></iframe>
    </div>
    <div class="iframe-container border w-full h-full">
      <iframe src="https://stichtingsop.netlify.app" frameborder="0"></iframe>
    </div>
    <div class="iframe-container border w-full h-full">
      <iframe src="https://jamalprojects.netlify.app" frameborder="0"></iframe>
    </div>
    <div class="iframe-container border w-full h-full">
      <iframe src="https://ghasemi.netlify.app" frameborder="0"></iframe>
    </div>
    <div class="iframe-container border w-full h-full">
      <iframe src="https://rysportt.netlify.app" frameborder="0"></iframe>
    </div>
    <div class="iframe-container border w-full h-full">
      <iframe src="https://canok.netlify.app" frameborder="0"></iframe>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* Add any container styles here */
}

.iframe-container {
  position: relative;
  overflow: hidden; /* Hide scrollbars */
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none; /* Remove border */
}
</style>
