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

var to_home = document.getElementById("home-button");
var to_projects = document.getElementById("projects-button");
var to_aboutme = document.getElementById("aboutme-button");
var to_contact = document.getElementById("contactme-button");
var logo_to_home = document.getElementById("logo");
logo_loading = document.getElementById("logo-loading");
stroke = document.getElementsByClassName("stroke");
logo_loading_div = document.querySelector(".loading-bg");


logo_loading_div.style.display ="fixed";
window.addEventListener('load', function() {
  console.log("Website Loading Complete!");
  loadingAnimationEnd();

  setTimeout(function(){
    logo_loading_div.style.left = "-100vw";
  },1300);
  setTimeout(function(){
    logo_loading_div.style.display ="none";
    
  }, 1600);
})
function loadingAnimationEnd(){
  logo_loading.classList.add("logo-loadingEnd");
  for(var i = 0 ; i < stroke.length ; i++){
      stroke[i].style.strokeDasharray = "800";
  }
}



to_home.addEventListener('click', function(){
  scroll_cookie("page-top");
  window.location.replace("index.html");
})
logo_to_home.addEventListener('click', function(){
  scroll_cookie("page-top");
  window.location.replace("index.html");
})
to_projects.addEventListener('click', function(){
  scroll_cookie("projects");
  window.location.replace("index.html");
})
to_aboutme.addEventListener('click', function(){
  scroll_cookie("aboutme-section");
  window.location.replace("index.html");
})
to_contact.addEventListener('click', function(){
  scroll_cookie("contactme-section");
  window.location.replace("index.html");
})

function scroll_cookie(scroll_to){
  document.cookie = escape("scroll_to="+ scroll_to + ";" +"expires=; domain=;" + "path=/;");
}