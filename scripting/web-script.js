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

var to_home = document.getElementById("home-button")
var to_projects = document.getElementById("projects-button")
var to_aboutme = document.getElementById("aboutme-button")
var to_contact = document.getElementById("contactme-button")
var timer = null;

to_home.addEventListener('click', function(){
  smoothScroll("page-top", 100);
})
to_projects.addEventListener('click', function(){
  smoothScroll("projects", -20);
})
to_aboutme.addEventListener('click', function(){
  smoothScroll("aboutme-section", 100);
})
to_contact.addEventListener('click', function(){
  smoothScroll("contactme-section", 100);
})

function smoothScroll(target_id , variation) {
  const targetID = document.getElementById(target_id);
  const targetPosition = targetID.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    // window.scrollTo(0, distance*(progress/duration) + startPosition - variation);
    window.scrollTo(0,ease_in_out(progress, startPosition, distance - variation, duration) );
    if(progress < duration) window.requestAnimationFrame(step);
  }

}

function ease_in_out(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
