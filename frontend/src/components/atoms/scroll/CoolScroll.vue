<template>
<h1>Scroll ⟵ left and right ⟶ to view</h1>
<ul>
  <li> <img src="https://source.unsplash.com/ezSFnAFi9hY/500x500" alt="cut citrus fruits. " />Lorem Ipsum</li>
  <li> <img src="https://source.unsplash.com/TIGDsyy0TK4/500x500" alt="sliced mango. " />Dolor Sit</li>
  <li> <img src="https://source.unsplash.com/TdDtTu2rv4s/500x500" alt="a bunch of blueberries. " />Amet Consectetur</li>
  <li> <img src="https://source.unsplash.com/eudGUrDdBB0/500x500" alt="a pineapple sitting on a table. " />Adipiscing Elit</li>
  <li> <img src="https://source.unsplash.com/eJH4f1rlG7g/500x500" alt="frozen raspberries. " /> Nunc Tortor</li>
  <li> <img src="https://source.unsplash.com/24RUrLSW1HI/500x500" alt="a sliced strawberry. " />Metus Mollis</li>
  <li> <img src="https://source.unsplash.com/h5yMpgOI5nI/500x500" alt="an arrangement of assorted sliced fruits. " />Congue Sagittis</li>
  <li> <img src="https://source.unsplash.com/2TYrR2IB72s/500x500" alt="sliced watermelons. " />Vestibulum Et</li>
  <li> <img src="https://source.unsplash.com/1cWZgnBhZRs/500x500" alt="grapefruits, lemons, and pomegranates. " />Donec Eget</li>
  <li> <img src="https://source.unsplash.com/9aOswReDKPo/500x500" alt="half of an avocado. " />Maecenas et Justo</li>
  <li> <img src="https://source.unsplash.com/Nl7eLS8E2Ss/500x500" alt="half of a lime. " />Malesuada Quam</li>
  <li> <img src="https://source.unsplash.com/3HhXWJzG5Ko/500x500" alt="a single cherry with stem. " />Ultricies Sollicitudin</li>
  <li> <img src="https://source.unsplash.com/fczCr7MdE7U/500x500" alt="a bunch of bananas. " />Gravida Nibh</li>
  <li> <img src="https://source.unsplash.com/uI900SItAyY/500x500" alt="three pears. " />Pellentesque Sapien</li>
  <li> <img src="https://source.unsplash.com/0AynZdszfz0/500x500" alt="a basket full of peaches next to a plate with sliced peaches. " />Suspendisse Vel</li>
  <li> <img src="https://source.unsplash.com/C6JhUKs9q8M/500x500" alt="a bowl of avocados. " />Mauris Consectetur</li>
</ul>
</template>

<script>

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
}

*,
body,
html {
  &::-webkit-scrollbar {
    background-color: #1e1f26;
    height: 20px;
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #383d4d;
    border-radius: 99em;
    border: 6px solid #1e1f26;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: clamp(20px, 2.5vw, 36px);
  color: rgba(#fff, 0.8);
  font-weight: 600;
  text-align: center;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1.5rem;
}

ul {
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  text-align: center;
  scroll-behavior: smooth;
}

li {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  width: min(50vw, 350px);
  display: inline-block;
  text-align: center;
  background-color: #16171f;
  color: #9b9dad;
  padding-bottom: 1.5rem;
  font-size: clamp(18px, 2.5vw, 22px);
  box-shadow: -10px 0 30px 0 rgba(#000, 0.25);
  margin-left: -4px;
}

body {
  font-family: "Inter", sans-serif;
  background-color: #1e1f26;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

</style>
