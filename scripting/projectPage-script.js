const mobileBtn = document.getElementById("menu-button")
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById("exit-menu-button")
    gradButton = document.getElementsByClassName("gradient-button")
;

var nav_bar = document.getElementById('navbar')
    menu_button = document.getElementById("menu-button")
    cover_page = document.getElementById('cover-page')
    desktop_images = document.getElementById("desktop-images")
    image_list = document.getElementsByClassName("mobile-images")
;
    
mobileBtn.addEventListener('click', () => {
    nav.style.right = "0%" ;
    nav.style.transition = "0.4s";      //Fixes the navbar transition animation on resizing the screen
});

mobileBtnExit.addEventListener('click', () => {
    nav.style.right = "-80%" ;
});


const mediaQuery = '(max-width: 767px)';

window.matchMedia(mediaQuery).addEventListener('change', event => {
  if (event.matches) {
    nav.style.transition ="none";
    nav.style.right = "-80%" ;
  } 
  else {
    nav.style.transition ="none";
    nav.style.right = "0%" ;
  }
})


logo_loading = document.getElementById("logo-loading");
stroke = document.getElementsByClassName("stroke");
logo_loading_div = document.querySelector(".loading-bg");

var stop_animation = 1;
var use = 0;

logo_loading_div.style.display ="fixed";
window.addEventListener('load', function() {
  stop_animation = 0;
})

alternate_animate(use)

function alternate_animate(use){
  if(stop_animation == 0){
      loadingAnimationEnd();
      setTimeout(function(){
        logo_loading_div.style.left = "-100vw";
      },900);
      setTimeout(function(){
        logo_loading_div.style.display ="none";
      },1300);
      return
  }
  if(use == 1){
      for(var i = 0; i < stroke.length; i++){
        stroke[i].style.animation = "loading-1 1000ms ease-in 0s 1 normal";
      }
      use = 0;
  }else{
      for(var i = 0; i < stroke.length; i++){
        stroke[i].style.animation = "loading-2 1000ms ease-in 0s 1 normal";
      }
      use = 1;
  }
  
  setTimeout(function(){
      alternate_animate(use)
  },1000)
}

function loadingAnimationEnd(){
  for(var i = 0; i < stroke.length; i++){
      stroke[i].style.animation = "finish-loading 1000ms cubic-bezier(.85,.09,.38,.65) 0s 1 normal";
  }
  for(var i = 0 ; i < stroke.length ; i++){
      stroke[i].style.strokeDasharray = "800";
  }
}
