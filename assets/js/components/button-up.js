let buttonUp = document.querySelector(".button-up");
let topBlockDesctop = document.querySelector(".header");
let topBlockMobile = document.querySelector(".main").firstElementChild;


let topBlock = topBlockMobile;

if (window.innerWidth <= 768) {
    topBlock.removeAttribute("id");
    topBlock = topBlockMobile;
    topBlock.setAttribute("id", "topBlock");
    console.log(buttonUp, topBlock);
} else {
    topBlock.removeAttribute("id");
    topBlock = topBlockDesctop;
    topBlock.setAttribute("id", "topBlock");
    console.log(buttonUp, topBlock);
}

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        topBlock.removeAttribute("id");
        topBlock = topBlockMobile;
        topBlock.setAttribute("id", "topBlock");
        console.log(buttonUp, topBlock);
    } else {
        topBlock.removeAttribute("id");
        topBlock = topBlockDesctop;
        topBlock.setAttribute("id", "topBlock");
        console.log(buttonUp, topBlock);
    }
});

buttonUp.setAttribute("href", "#topBlock");
 
window.addEventListener("scroll", function () {
    if (window.scrollY >= 500) {
        buttonUp.classList.add("visible");
    } else {
        buttonUp.classList.remove("visible");
    }
});

buttonUp.addEventListener("click", function (event) {
    event.preventDefault();
    topBlock.scrollIntoView({ behavior: "smooth" });
});