const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const mobileNav = document.getElementById("mobile-nav");

menuBtn.addEventListener("click", ()=>{
    mobileNav.classList.add("top-0")
    mobileNav.classList.remove("top-[-100%]");
})

closeBtn.addEventListener("click", ()=>{
    mobileNav.classList.remove("top-0")
    mobileNav.classList.add("top-[-100%]")
})

