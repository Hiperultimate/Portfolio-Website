var logo = document.getElementById("logo-loading");
var stroke = document.getElementsByClassName("stroke");

var stop_animation = 1;
var use = 0;

function alternate_animate(use){
    if(stop_animation == 0){
        loadingAnimationEnd();
        return
    }
    console.log("use is : " + use);
    if(use == 1){
        for(var i = 0; i < stroke.length; i++){
            stroke[i].style.animation = "loading-1 1000ms ease-in 0s 1 normal";
            console.log("animation 1");
        }
        use = 0;
    }else{
        for(var i = 0; i < stroke.length; i++){
            stroke[i].style.animation = "loading-2 1000ms ease-in 0s 1 normal";
            console.log("animation 2");
        }
        use = 1;
    }
    
    setTimeout(function(){
        alternate_animate(use)
    },1000)
}

alternate_animate(use)

setTimeout(function(){
    stop_animation = 0;
},2200)

function loadingAnimationEnd(){
    for(var i = 0; i < stroke.length; i++){
        stroke[i].style.animation = "finish-loading 1.3s cubic-bezier(.85,.09,.38,.65) 0s 1 normal";
    }
    for(var i = 0 ; i < stroke.length ; i++){
        stroke[i].style.strokeDasharray = "800";
    }
}
