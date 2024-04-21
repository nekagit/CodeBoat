<template>
<div class='a'></div>
<div class='b'></div>
<div class='c'></div>
<div class='d'></div>
</template>

<script setup lang="ts">
import $ from "jquery"
$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);        
    });
    
};
</script>

<style scoped>
div.a {
width: 50px;
height:50px;
 background-color:red;
position:fixed;
    
}

div.b {
width: 50px;
height:50px;
 background-color:blue;
position:fixed;
    
}
div.c {
width: 50px;
height:50px;
 background-color:green;
position:fixed;
    
}
div.d {
width: 50px;
height:50px;
 background-color:yellow;
position:fixed;
    
}
</style>