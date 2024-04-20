<template>
<div class="wrap">
  <div class="wrap__toggle">
    <div class="wrap__toggle--bluetooth">
      <span><i class="fab fa-bluetooth-b"></i></span>
      <span>Bluetooth</span>
    </div>
    <div class="wrap__toggle--toggler">
      <label for="toggle">
        <input type="checkbox" class="checkBox" id="toggle">
        <span></span>
      </label>
    </div>
  </div>
  <p class="credits">
    design credit: <a target="_blank" href="https://www.linkedin.com/in/palak-jain-7067b7183/">Palak Jain</a>
  </p>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const toggleElem = ref<Element |null|undefined>()
const toggleParent = ref<Element |null|undefined>()
toggleElem.value = document.querySelector("#toggle");
toggleParent.value = document.querySelector(".wrap__toggle")
toggleElem.value?.addEventListener("change", () =>{
  
  toggleParent.value?.classList.toggle("active");    
  
});
</script>

<style scoped lang="scss">
$mainWhite: #e6e6e6;
$superGrey: #676767;
$primary: #3392f5;
html,body{
  background:$mainWhite ;
  box-sizing: border-box;
  height: 100%;
  font-family: Roboto, Arial;
}

.wrap{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
    
  &__toggle{
    padding: 20px;
    border-radius: 30px;
    height: 40px;
    width: 300px;
    display: flex;
    align-items: center;
    box-shadow:-10px -10px 15px 0px #f6f6f6, 10px 10px 15px 0px #cecece;
    color:$superGrey;
    transition: ease all 200ms;
    
    &.active{
      color: $primary; 
    }
    
    &--bluetooth{ 
      font-size: 20px;
      font-family: Roboto; 
      flex: 1;
      padding: 0 0 0 10px;
    }
    
    &--toggler{
      flex: 1; 
      
      label{
        position: relative;
        display: flex;
        align-items:center; 
        height: 40px;
        width: 100%;
        border-radius: 20px;
        box-shadow:inset -7px -7px 5px 0px #f6f6f6, inset 7px 7px 5px 0px #cecece;
        cursor: pointer;
        
        input{
          position:absolute;
          height:0;
          width:0;
          opacity: 0;
          
          &:checked + span{
            transform: translate(70px, 0);
            background: $primary;
            box-shadow: 2px 2px 5px 0px #3392f5;
            
            &:after{
              content: 'ON';
              font-family: Roboto;
              font-size:12px;
              color: #fff;
            }
          }
        }
        
        & span{
          height: 26px;
          width: 40%;
          border-radius: 20px; 
          position: absolute;
          left: 0;
          background: #e6e6e6;
          transform: translate(15px, 0);
          transition: ease all 500ms;
          display: flex;
          align-items:center; 
          justify-content:center;
          box-shadow:2px 2px 5px 0px rgba(0 ,0, 0 , 0.27);
          
          &:after{
            content: 'OFF';
            font-family: Roboto;
            font-size:12px; 
          }
        }
      }
    }
  }
  
  .credits{
    font-size:11px;
    margin-top: 50px;
    color: $superGrey;
    a{
      color: $superGrey;
    }
  }
}
</style>