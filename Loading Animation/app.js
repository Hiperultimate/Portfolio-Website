var logo = document.getElementById("logo-loading");
var stroke = document.getElementsByClassName("stroke");

function loadingAnimationEnd(){
    logo.classList.add("logo-loadingEnd");
    for(var i = 0 ; i < stroke.length ; i++){
        stroke[i].style.strokeDasharray = "800";
    }
}


console.log("Starting timer");
setTimeout(loadingAnimationEnd, 3000);
console.log("operation finished");
