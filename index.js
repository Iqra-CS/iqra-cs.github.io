var navbar=document.querySelector(".navBar");
$(window).scroll(function(){
    if(scrollY>36)
    {
        navbar.classList.add("sticky");
    }
    else
    {
        navbar.classList.remove("sticky");
    }
});


const menu = document.querySelector(".bar");
const body = document.querySelector(".main");
body.addEventListener("click",()=>{
    menu.classList.remove("active");
    navbar.classList.remove("active");
})
document.querySelector(".menu").addEventListener("click",()=>{
    menu.classList.remove("active");
    navbar.classList.remove("active");
})
menu.addEventListener("click",()=>{
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
})