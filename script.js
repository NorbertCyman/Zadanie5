const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;
let out = false;
console.log(nav);
console.log(window.innerWidth);
window.addEventListener("scroll", () => {
    if (window.innerWidth > 500){
        if(lastScrollY < window.scrollY) {
            nav.classList.add("nav-hidden");
        } else {
            nav.classList.remove("nav-hidden");
        }
        lastScrollY = window.scrollY;
    }
});
window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if(window.innerWidth >= 500){
        nav.classList.add("nav-hidden");
    }
});

function openMenu(){
    if(out){
        nav.classList.add("nav-hidden");
        out = false;
        console.log("1");
    }
    else{nav.classList.remove("nav-hidden");
    out = true;
    console.log(2);
    }
}