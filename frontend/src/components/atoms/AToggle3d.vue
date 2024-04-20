<template>
  <div class="toggle3dbody">
    <div id="wrap">
      <input type="radio" name="radio" id="option1">
    <label for="option1" data-text="Option 1">Option 1</label>
    <input type="radio" name="radio" id="option2">
    <label for="option2" data-text="Option 2">Option 2</label>
    <div class="sphere"></div>
    <div class="platform">
      <div class="hole"></div>
      <div class="hole"></div>
    </div>
  </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$duration:0.75s;

.toggle3dbody {
  display:grid;
  place-items:center;
  height:100vh;
  width:100vw;
  overflow:hidden;
  background:linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.95)), linear-gradient(to bottom, #0070ff,#415fff);
  &:before, &:after{
    content:'';
    position:absolute;
    width:220px;
    height:150px;
    left:calc(50% - 2.5px);
    top:50%;
    transform:translate(-50%, -50%);
    background:#fff;
    pointer-events:none;
    box-shadow:0 0 0 1px rgba(255,255,255,0.85), 0 20px 40px 10px rgba(255,255,255,0.85),  0 0 0 0.75px #415fff, 0 10px 40px -20px #0070ff, 0 20px 40px -20px #415fff;
  }
  &:after{
    box-shadow:none;
    background: linear-gradient(to bottom, #0070ff,#415fff);
    mix-blend-mode:soft-light;
    box-shadow:none;
    z-index:9;
  }
  #wrap{
    position:relative;
    width:50px;
    height:150px;
    transform-style:preserve-3d;
    perspective:400px;
    transform:translateX(-75px);
    &:before, &:after{
      content:'';
      position:absolute;
      width:100%;
      height:100%;
      background:lighten(#efefef, 1%);
      left:calc(100% + 12.5px);
      transform-origin:left;
      transform:rotateY(90deg);
    }
    &:after{
      left:calc(-100% - 12.5px);
      transform-origin:right;
      transform:rotateY(-90deg);
    }
    *{
      transform-style:preserve-3d;
      &:before, &:after{
        transform-style:preserve-3d;
      }
    }
    label{
      z-index:9;
      position:absolute;
      left:75px;
      font-family:'Oswald';
      text-transform:uppercase;
      width:200px;
      font-size:32px;
      height:50%;
      display:flex;
      align-items:center;
      top:0;
      color:#fff;
      text-shadow:0 -1px 2px #fff;
      transform:translateY(-2px) translateZ(-15px);
      &:before{
        content:attr(data-text);
        position:absolute;
        color:rgba(0,0,0,0.25);
        z-index:-1;
        top:50%;
        transform:translateY(calc(-50% + 2px));
        left:0;
        filter:blur(2px);
      }
      &:nth-of-type(2){
        top:50%;
      }
    }
    input{
      position:absolute;
      width:100%;
      height:50%;
      left:0;
      opacity:0;
      z-index:999;
      cursor:pointer;
      &:first-of-type{
        top:0;
        &:checked{
          ~ .sphere{
            animation:sphere1 $duration ease-in-out 1 forwards, sphere3 $duration ease-in-out 1 forwards;
            @keyframes sphere1{
              0%{
                box-shadow:inset 0px 2px 5px -2.5px rgba(0,0,0,0.3), 0 0 5px 0 rgba(0,0,0,0);
              }
              25%{
                box-shadow:inset 0px 3px 5px -2.5px rgba(0,0,0,0.3), 0 0px 5px 0px rgba(0,0,0,0);
              }
              62.5%{
                box-shadow:inset 0px 0px 5px -2.5px rgba(0,0,0,0.3), 0 10px 10px 0px rgba(0,0,0,0.1);
              }
              75%{
                box-shadow:inset -1px -1px 5px -2.5px rgba(0,0,0,0.3), 0 10px 10px -5px rgba(0,0,0,0.1);
              }
              100%{
                box-shadow:inset -1px -3px 5px -2.5px rgba(0,0,0,0.3), 0 0 5px 0 rgba(0,0,0,0);
              }
            }
            @keyframes sphere3{
              0%{
                background-position:50% 5px, center;
              }
              100%{
                background-position:50% 0px, center;
              }
            }
          }
          ~ .platform{
            animation:check1 $duration ease-in-out 1 forwards;
            &:after{
              height:40px;
              transform: translateY(10px) translateZ(40px) rotateX(80deg);
              background:linear-gradient(to top, rgba(0,0,0,0.025), #efefef);
              box-shadow:0 0 5px -3px #efefef;
            }
            @keyframes check1{
              0%{
                transform:rotateX(0deg);
                box-shadow:inset 0 -5px 5px -10px rgba(0,0,0,0.0);
              }
              50%{
                transform:rotateX(40deg);
                box-shadow:inset 0 80px 35px -10px rgba(0,0,0,0.035);
              }
              100%{
                transform:rotateX(0deg);
                box-shadow:inset 0 -5px 5px -10px rgba(0,0,0,0.0);
              }
            }
            .hole{
              animation:hole1 $duration ease-in-out 1 forwards;
              @keyframes hole1{
                  0%{
                    box-shadow:0 0 0 2px #fff, 0 1px 3px 3px #efefef, inset 0 3px 4px 3px #ddd;
                  }
                  50%{
                    box-shadow:0 0 0 2px #fff, 0 2px 3px 3px #efefef, inset 0 20px 4px 3px #ddd;
                  }
                  100%{
                    box-shadow:0 0 0 2px #fff, 0 1px 3px 3px #efefef, inset 0 3px 4px 3px #ddd;
                  }
                }
            }
          }
        }
      }
      &:last-of-type{
        bottom:0;
        &:checked{
          ~ .sphere{
            transform:translateZ(90px) translateX(-50%) translateY(55px);
            animation:sphere2 $duration ease-in-out 1 forwards, sphere4 $duration ease-in-out 1 forwards;
            &:before{
              transform:translateY(-20px) translateZ(-5px) scale(1) scaleY(1);
              background:rgba(0,0,0,0.1);
            }
            @keyframes sphere2{
              0%{
                box-shadow:inset -1px -3px 5px -2.5px rgba(0,0,0,0.3), 0 0 5px 0 rgba(0,0,0,0);
              }
              25%{
                box-shadow:inset -1px -3px 8px -2.5px rgba(0,0,0,0.3), 0 0px 5px 0px rgba(0,0,0,0);
              }
              62.5%{
                box-shadow:inset 0px 0px 10px -4px rgba(0,0,0,0.3), 0 -10px 10px 0px rgba(0,0,0,0.1);
              }
              75%{
                box-shadow:inset 0px 2px 8px -4px rgba(0,0,0,0.3), 0 -10px 10px -5px rgba(0,0,0,0.1);
              }
              100%{
                box-shadow:inset 0px 2px 5px -2.5px rgba(0,0,0,0.3), 0 0 5px 0 rgba(0,0,0,0);
              }
            }
            @keyframes sphere4{
              0%{
                background-position:50% 0px, center;
              }
              100%{
                background-position:50% 5px, center;
              }
            }
          }
          ~ .platform{
            animation:check2 $duration ease-in-out 1 forwards;
            &:before{
              height:40px;
              transform: translateY(-10px) translateZ(40px) rotateX(-80deg);
              background:linear-gradient(to bottom, rgba(0,0,0,0.025), #efefef);
              box-shadow:0 0 5px -3px #efefef;
            }
            @keyframes check2{
              0%{
                transform:rotateX(0deg);
                box-shadow:inset 0 0px 5px rgba(0,0,0,0.0);
              }
              50%{
                transform:rotateX(-40deg);
                box-shadow:inset 0 -80px 35px -10px rgba(0,0,0,0.035);
              }
              100%{
                transform:rotateX(0deg);
                box-shadow:inset 0 0px 5px rgba(0,0,0,0.0);;
              }
            }
            .hole{
              animation:hole2 $duration ease-in-out 1 forwards;
              @keyframes hole2{
                  0%{
                    box-shadow:0 0 0 2px #fff, 0 1px 3px 3px #efefef, inset 0 3px 4px 3px #ddd;
                  }
                  50%{
                    box-shadow:0 0 0 2px #fff, 0 -2px 3px 3px #efefef, inset 0 -15px 4px 3px #ddd;
                  }
                  100%{
                    box-shadow:0 0 0 2px #fff, 0 1px 3px 3px #efefef, inset 0 3px 4px 3px #ddd;
                  }
                }
            }
          }
        }
      }
    }
    .sphere{
        width:25px;
        height:25px;
        border-radius:100%;
        position:absolute;
        z-index:999;
        background:radial-gradient(circle at center, #fff, #efefef 40%) 50% -10px / 100% 100% no-repeat, #efefef;
      background-position:50% 0px, center;
        transform:translateZ(90px) translateX(-50%) translateY(0);
        left:50%;
        top:33px;
        box-shadow:inset -1px -3px 5px -2.5px rgba(0,0,0,0.3), 0 0 5px 0 rgba(0,0,0,0);
        transition:0.6s cubic-bezier(0.975, 0.685, 0.32, 1.05);
      transition-delay:0.15s;
        &:before{
          content:'';
          position:absolute;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0.05);
          border-radius:100%;
          z-index:-1;
          transform:translateZ(-5px) scale(0.8) scaleY(0.5);
          top:15px;
          filter:blur(4px);
          transition:0.75s ease-in-out;
        }
      }
    .platform{
      position:absolute;
      width:75px;
      height:100%;
      top:0;
      left:-12.5px;
      box-shadow:0 0 0 1px rgba(0,0,0,0);
      background:#fff;
      pointer-events:none;
      &:before, &:after{
        content:'';
        position:absolute;
        width:100%;
        height:20px;
        top:100%;
        background:linear-gradient(to bottom, #fff, #efefef);
        transform-origin:top;
        transform:rotateX(-90deg);
        box-shadow:0 0 5px 0 #efefef;
      }
      &:after{
        background:linear-gradient(to top, #fff, #fff);
        transform-origin:bottom;
        transform:rotateX(90deg);
        top:auto;
        bottom:100%;
        box-shadow:0 0 2px 0 #efefef;
      }
      .hole{
        position:absolute;
        width:30px;
        height:30px;
        border-radius:100%;
        box-shadow:0 0 0 2px #fff, 0 1px 3px 3px #efefef, inset 0 3px 4px 3px #ddd;
        left:50%;
        transform:translateX(-50%);
        top:25px;
        &:last-of-type{
          top:auto;
          bottom:25px;
        }
      }
    }
  }
}

</style>