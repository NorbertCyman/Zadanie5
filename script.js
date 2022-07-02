const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;
let out = false;
console.log(nav);
window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY) {
        nav.classList.add("nav-hidden");
    } else {
        nav.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
});

function openMenu(){
    if(out){
        nav.style.top = "-100%";
        out = false;
    }
    else{nav.style.top = "0px";
    out = true;
    }
}
