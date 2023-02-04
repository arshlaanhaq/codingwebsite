alert(`hello buddy!!!
this site is made for display purpose only!   
Have Fun :)`);

let navbar = document.querySelector("nav");
let navigation = document.querySelector("#navbar li a");
let menu = document.querySelector(".menutgl");

menu.onclick = function(){
    navbar.classList.toggle('open');
}


let docTitle = document.title;
window.addEventListener("blur", ()=>{
    document.title ="Be Happy:)";
})
window.addEventListener("focus",()=>{
    document.title= docTitle;
})



