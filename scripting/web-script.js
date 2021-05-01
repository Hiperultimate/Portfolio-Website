const mobileBtn = document.getElementById("menu-button")
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById("exit-menu-button");
    gradButton = document.getElementsByClassName("gradient-button");
;

    
mobileBtn.addEventListener('click', () => {
    nav.style.right = "0%" ;
    nav.style.transition = "0.4s";      //Fixes the navbar transition animation on resizing the screen
});

mobileBtnExit.addEventListener('click', () => {
    nav.style.right = "-80%" ;
});

