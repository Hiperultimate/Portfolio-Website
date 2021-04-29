const mobileBtn = document.getElementById("menu-button")
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById("exit-menu-button");
;

    
mobileBtn.addEventListener('click', () => {
    // nav.classList.add('menu-btn');
    // nav.style.width = "80%";
    nav.style.right = "0%" ;

});
mobileBtnExit.addEventListener('click', () => {
    // nav.classList.remove('menu-btn');
    // nav.style.width = "0px";
    nav.style.right = "-80%" ;

});

