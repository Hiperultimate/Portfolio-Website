var logo = document.getElementById("logo-loading");
var stroke = document.getElementsByClassName("stroke");

var stop_animation = 1;

function alternate_animate(dashoffset){
    for(var i = 0; i < stroke.length; i++){
        stroke[i].style.strokeDashoffset = dashoffset;
    }
    if(stop_animation == 0){
        for(var i = 0; i < stroke.length; i++){
            console.log(window.getComputedStyle(stroke[i]).strokeDasharray);
            stroke[i].style.strokeDashoffset = 0;
            stroke[i].style.strokeDasharray = 800;
        }
        return
    }
    if(dashoffset == 800){
        dashoffset = 0;
    } else {
        dashoffset = 800;
    }
    setTimeout(function(){
        alternate_animate(dashoffset)
    },1000)
}

alternate_animate(800)

setTimeout(function(){
    stop_animation = 0;
},2300)

// function loadingAnimationEnd(){
//     logo.classList.add("logo-loadingEnd");
//     for(var i = 0 ; i < stroke.length ; i++){
//         stroke[i].style.strokeDasharray = "800";
//     }
// }


// console.log("Starting timer");
// setTimeout(loadingAnimationEnd, 2500);
// console.log("operation finished");
