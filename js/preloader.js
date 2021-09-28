//PRELOADER ANIMATION
var preloader = document.querySelector("#preloader");

setTimeout(function () {
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
}, 2000);

// ANIMATION HAMBURGER
var hamburgerBTN = document.querySelector(".navbar-toggler-icon");

hamburgerBTN.addEventListener("click", function () {
  hamburgerBTN.classList.toggle("rotate");
});
//SEARCH EVENT
var searchInfoAstroBtn = document.querySelector(
  ".search-astronomy-information"
);
var searchInfoInput = document.getElementById("search-infomation-input");

searchInfoAstroBtn.addEventListener("click", startSearch);

function startSearch(e) {
  e.preventDefault();
  console.log(searchInfoInput.value);
  window.location.replace(`search.html?${searchInfoInput.value}`);
}
//SCROLL TO TOP
var scrollToTop = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 700) {
    scrollToTop.classList.add("show");
  }
  if (window.scrollY < 400) {
    scrollToTop.classList.remove("show");
  }
});

scrollToTop.addEventListener("click", goToTop);

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
