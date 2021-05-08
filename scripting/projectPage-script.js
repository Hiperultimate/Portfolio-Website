const mobileBtn = document.getElementById("menu-button")
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById("exit-menu-button")
    gradButton = document.getElementsByClassName("gradient-button")
;

var nav_bar = document.getElementById('navbar')
    menu_button = document.getElementById("menu-button")
    cover_page = document.getElementById('cover-page')
    desktop_images = document.getElementById("desktop-images")
    image_list = document.getElementsByClassName("left-col-image")
;
    
mobileBtn.addEventListener('click', () => {
    nav.style.right = "0%" ;
    nav.style.transition = "0.4s";      //Fixes the navbar transition animation on resizing the screen
});

mobileBtnExit.addEventListener('click', () => {
    nav.style.right = "-80%" ;
});

// for(var i = 0; i < image_list.length; i++){
//     desktop_images.appendChild(image_list[i]);
// }


console.log(cover_page.offsetHeight);