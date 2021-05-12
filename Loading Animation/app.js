function check(){
    var logo = document.getElementById("logo");
    logo.classList.add("logo-loadingEnd");
}

console.log("Starting timer");
setTimeout(check, 3000);
console.log("operation finished");
