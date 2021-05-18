const mobileBtn = document.getElementById("menu-button");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("exit-menu-button");
gradButton = document.getElementsByClassName("gradient-button");

var nav_bar = document.getElementById("navbar");
menu_button = document.getElementById("menu-button");
cover_page = document.getElementById("cover-page");
page_top = document.getElementById("page-top");
nav_location = document.getElementById("nav-location");
nav_buttons = document.querySelectorAll(".nav-buttons");


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

mobileBtn.addEventListener("click", () => {
  nav.style.right = "0%";
  nav.style.transition = "right 0.4s"; //Fixes the navbar transition animation on resizing the screen
});

mobileBtnExit.addEventListener("click", () => {
  nav.style.right = "-80%";
  nav.style.transition = "right 0.4s";
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= cover_page.offsetHeight) {
    nav_bar.style.position = "fixed";
    nav_bar.style.width = "100%";
    menu_button.style.paddingRight = "2em";
    cover_page.style.paddingTop = "84px";
    nav_bar.style.borderBottom = "2px solid white";
    nav_bar.style.animation = "nav-bar-animation 300ms ease-out 0ms 1";
  }

  if (window.scrollY < cover_page.offsetHeight) {
    nav_bar.style.position = "relative";
    nav_bar.style.width = "auto";
    menu_button.style.paddingRight = "0em";
    cover_page.style.paddingTop = "0px";
    nav_bar.style.borderBottom = "0px solid white";
    nav_bar.style.animation = "none";
  }
});

const mediaQuery = "(max-width: 767px)";

window.matchMedia(mediaQuery).addEventListener("change", (event) => {
  if (event.matches) {
    nav.style.transition = "none";
    nav.style.right = "-80%";
  } else {
    nav.style.transition = "none";
    nav.style.right = "0%";
  }
});

window.addEventListener("load", media_state);

window.matchMedia(mediaQuery).addEventListener("change", media_state);

function media_state() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    page_top.appendChild(nav);
    nav_buttons.forEach((element) => {
      element.addEventListener("click", function () {
        nav.style.right = "-80%";
      });
    });
  } else {
    nav_location.appendChild(nav);
    nav_buttons.forEach((element) => {
      element.addEventListener("click", function () {
        nav.style.right = "0%";
      });
    });
  }
}

function submitmessage(){
  alert("Message sent successfully.");
}