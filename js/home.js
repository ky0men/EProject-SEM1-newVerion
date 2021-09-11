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
//TYPE WRITER BANNER ANIMATION
class Typewriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;

    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set deleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init Typewriter
  new Typewriter(txtElement, words, wait);
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
//OUR UNIVERSE ANIMATION
var solarSystemSub = document.querySelector(".solar-system-sub");
var planetsSub = document.querySelector(".planets-sub");
var constellSub = document.querySelector(".constell-sub");
var galaxiesSub = document.querySelector(".galaxies-sub");
var sunInfoContent = document.querySelector(".sun-info-content");
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  // console.log(window.outerWidth);
  if (this.window.outerWidth > 1024) {
    if (window.scrollY > 350) {
      solarSystemSub.classList.add("show");
      planetsSub.classList.add("show");
    }

    if (window.scrollY > 700) {
      constellSub.classList.add("show");
    }
    if (window.scrollY > 850) {
      galaxiesSub.classList.add("show");
    }
    if (window.scrollY > 600) {
      sunInfoContent.classList.add("show");
    }
  } else if (window.outerWidth <= 1024 && window.outerWidth > 768) {
    if (window.scrollY > 100) {
      solarSystemSub.classList.add("show");
      planetsSub.classList.add("show");
    }
    if (window.scrollY > 450) {
      constellSub.classList.add("show");
    }
    if (window.scrollY > 600) {
      galaxiesSub.classList.add("show");
    }
    if (window.scrollY > 300) {
      sunInfoContent.classList.add("show");
    }
  } else {
    if (window.scrollY > 0) {
      solarSystemSub.classList.add("show");
      planetsSub.classList.add("show");
    }
    if (window.scrollY > 300) {
      constellSub.classList.add("show");
    }
    if (window.scrollY > 500) {
      galaxiesSub.classList.add("show");
    }
    if (window.scrollY > 200) {
      sunInfoContent.classList.add("show");
    }
  }
  if (this.window.scrollY < 100) {
    solarSystemSub.classList.remove("show");
    planetsSub.classList.remove("show");
    constellSub.classList.remove("show");
    galaxiesSub.classList.remove("show");
    sunInfoContent.classList.remove("show");
  }
});
//LOADMORE PLANETS
var planetsInner = document.querySelector(".planets-inner");
var loadMorePlanetsBtn = document.querySelector(".load-more-planets-btn");
loadMorePlanetsBtn.addEventListener("click", loadMorePlanets);

var currentIdPlanets = -2;
function loadMorePlanets() {
  currentIdPlanets += 3;
  fetch("https://fake-api-sem.herokuapp.com/planets")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (var i = currentIdPlanets; i < currentIdPlanets + 3; i++) {
        data.forEach(function (planet) {
          if (planet.id == i && i % 2 == 0) {
            var planetsCard = document.createElement("div");
            planetsCard.className = "row planets-card";
            planetsCard.innerHTML = `
            <div class="col-md-4 d-flex flex-wrap align-content-center">
              <img class="w-100" src="${planet.image}" alt="${planet.name} Image">
            </div>
            <div class="col-md-8 p-4 d-flex flex-column justify-content-center planets-card-content">
              <h2 class="astro-mark-1">${planet.name}</h2>
              <p class="text-justify">${planet.content1}</p>
              <p class="text-justify">${planet.content2}</p>
              <div class="info-content-btn text-right">
                <button class="btn btn-gradient" href="#">Read More...</button>
              </div>
            </div>
            `;
            planetsInner.appendChild(planetsCard);
          }
          if (planet.id == i && i % 2 != 0) {
            var planetsCard = document.createElement("div");
            planetsCard.className = "row planets-card";
            planetsCard.innerHTML = `
            <div class="col-md-4 order-1 order-md-2 d-flex flex-wrap align-content-center">
              <img class="w-100" src="${planet.image}" alt="${planet.name} Image">
            </div>
            <div class="col-md-8 p-4 order-2 order-md-1 d-flex flex-column justify-content-center planets-card-content">
              <h2 class="astro-mark-1">${planet.name}</h2>
              <p class="text-justify">${planet.content1}</p>
              <p class="text-justify">${planet.content2}</p>
              <div class="info-content-btn text-right">
                <button class="btn btn-gradient" href="#">Read More...</button>
              </div>
            </div>
            `;
            planetsInner.appendChild(planetsCard);
          }
        });
        if (currentIdPlanets > 3) {
          loadMorePlanetsBtn.style.display = "none";
        }
      }
    });
}
