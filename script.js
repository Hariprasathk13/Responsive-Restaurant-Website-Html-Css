const nav = document.querySelector("nav");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.style.display = "none";
  AOS.init();
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    document.querySelector("select").style.color = "black";
    nav.classList.add("navbg");
  } else {
    document.querySelector("select").style.color = "white";

    nav.classList.remove("navbg");
  }
});
