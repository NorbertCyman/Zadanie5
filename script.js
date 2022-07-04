const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;
let out = false;
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
if(window.innerWidth >= 500){
    nav.classList.add("nav-hidden");
}

function openMenu(){
    if(out){
        nav.classList.add("nav-hidden");
        out = false;
    }
    else{nav.classList.remove("nav-hidden");
    out = true;
    }
}
