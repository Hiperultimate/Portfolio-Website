const mobileBtn = document.getElementById("menu-button")
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById("exit-menu-button");
    gradButton = document.getElementsByClassName("gradient-button");
;

    
mobileBtn.addEventListener('click', () => {
    nav.style.right = "0%" ;
});

mobileBtnExit.addEventListener('click', () => {
    nav.style.right = "-80%" ;
});

