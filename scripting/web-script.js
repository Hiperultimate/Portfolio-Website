const mobileBtn = document.getElementById("menu-button")
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById("exit-menu-button");
    gradButton = document.getElementsByClassName("gradient-button");
    
;

var nav_bar = document.getElementById('navbar')
menu_button = document.getElementById("menu-button")
cover_page = document.getElementById('cover-page');
    
mobileBtn.addEventListener('click', () => {
    nav.style.right = "0%" ;
    nav.style.transition = "0.4s";      //Fixes the navbar transition animation on resizing the screen
});

mobileBtnExit.addEventListener('click', () => {
    nav.style.right = "-80%" ;
});

window.addEventListener("scroll", function(){
    if(window.scrollY >= cover_page.offsetHeight){
        nav_bar.style.position = "fixed";
        nav_bar.style.width ="100%";
        menu_button.style.paddingRight = "2em";
        cover_page.style.paddingTop ="84px";
        nav_bar.style.borderBottom = "2px solid white";
    }

    if(window.scrollY < cover_page.offsetHeight){
        nav_bar.style.position = "relative";
        nav_bar.style.width ="auto";
        menu_button.style.paddingRight = "0em";
        cover_page.style.paddingTop ="0px";
        nav_bar.style.borderBottom = "0px solid white";
    }
})

console.log(cover_page.offsetHeight);