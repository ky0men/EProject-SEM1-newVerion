var photoSection = document.querySelector(".photos");
var loadMoreImg = document.querySelector(".load-more-btn");
var loadMoreImgItem = document.querySelector(".load-more-item-btn");
var tabBtn = document.querySelectorAll(".tab-btn");
// var lastImgContainer = document.querySelector(".last-imgs");

document.addEventListener("DOMContentLoaded", showAll);
var startID = 0;
function showAll() {
  loadMoreImg.classList.add("show");
  fetch("https://fake-api-sem.herokuapp.com/gallery")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.length);
      showSixImage(startID, data);
      startID += 6;
    });
}
loadMoreImg.addEventListener("click", showMoreImgAll);
function showMoreImgAll() {
  showMore("https://fake-api-sem.herokuapp.com/gallery");
}
function showMore(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.length);
      if ((startID / 6) % 2 != 0 && data.length - startID >= 6) {
        showNextSixImg(startID, data);
        startID += 6;
      } else if ((startID / 6) % 2 == 0 && data.length - startID >= 6) {
        showSixImage(startID, data);
        startID += 6;
      } else {
        showLastImgs(startID, data);
        startID += 6;
      }
    });
}
function showSixImage(startID, imgData) {
  var sixImgFisrt = document.createElement("div");
  sixImgFisrt.className = "six-img-first row";
  sixImgFisrt.innerHTML = `
    <div class="col-md-12 col-lg-4 item">
      <a href="${imgData[startID].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID].imgContent}">
        <img class="img-fluid" src="${imgData[startID].imgUrl}">

        <p class="text-justify">${imgData[startID].imgContent}</p>
      </a>
    </div>
    <div class="col-md-6 col-lg-4 item">
      <a href="${imgData[startID + 1].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 1].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 1].imgUrl}">
        <p class="text-justify">${imgData[startID + 1].imgContent}</p>
      </a>
    </div>
    <div class="col-md-6 col-lg-4 item">
      <a href="${imgData[startID + 2].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 2].imgContent}">
        <img class="img-fluid" src="${imgData[startID + 2].imgUrl}">
        <p class="text-justify">${imgData[startID + 2].imgContent}</p>
      </a>
    </div>
    <div class="col-md-6 col-lg-8 item">
      <a href="${imgData[startID + 3].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 3].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 3].imgUrl}">
        <p class="text-justify">${imgData[startID + 3].imgContent}</p>
      </a>
    </div>

    <div class="col-md-6 col-lg-4 item">
      <a href="${imgData[startID + 4].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 4].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 4].imgUrl}">
        <p class="text-justify">${imgData[startID + 4].imgContent}</p>

      </a>
      <a href="${imgData[startID + 5].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 5].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 5].imgUrl}">
        <p class="text-justify">${imgData[startID + 5].imgContent}</p>
      </a>
    </div>
  `;
  photoSection.appendChild(sixImgFisrt);
}

function showNextSixImg(startID, imgData) {
  var sixImgSecond = document.createElement("div");
  sixImgSecond.className = "six-img-second row";
  sixImgSecond.innerHTML = `
    <div class="col-md-6 col-lg-4 item">
      <a href="${imgData[startID].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID].imgContent}"><img class="img-fluid"
          src="${imgData[startID].imgUrl}">
        <p class="text-justify">${imgData[startID].imgContent}</p>
      </a>
      <a href="${imgData[startID + 1].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 1].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 1].imgUrl}">
        <p class="text-justify">${imgData[startID + 1].imgContent}</p>
      </a>
    </div>
    <div class="col-md-6 col-lg-8 item">
      <a href="${imgData[startID + 2].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 2].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 2].imgUrl}">
        <p class="text-justify">${imgData[startID + 2].imgContent}</p>
      </a>
    </div>
    <div class="col-md-12 col-lg-4 item">
      <a href="${imgData[startID + 3].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 3].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 3].imgUrl}">
        <p class="text-justify">${imgData[startID + 3].imgContent}</p>
      </a>
    </div>
    <div class="col-md-6 col-lg-4 item">
      <a href="${imgData[startID + 4].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 4].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 4].imgUrl}">
        <p class="text-justify">${imgData[startID + 4].imgContent}</p>
      </a>
    </div>
    <div class="col-md-6 col-lg-4 item">
      <a href="${imgData[startID + 5].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID + 5].imgContent}"><img class="img-fluid"
          src="${imgData[startID + 5].imgUrl}">
        <p class="text-justify">${imgData[startID + 5].imgContent}</p>
      </a>
    </div>
  `;
  photoSection.appendChild(sixImgSecond);
}
function showLastImgs(startID, imgData) {
  var lastImgContainer = document.createElement("div");
  lastImgContainer.className = "last-imgs row";
  for (startID; startID < imgData.length; startID++) {
    var lastItemImg = document.createElement("div");
    lastItemImg.className = "col-md-6 col-lg-4 item";
    lastItemImg.innerHTML = `
      <a href="${imgData[startID].imgUrl}" data-lightbox="photos"
        data-title="${imgData[startID].imgContent}"><img class="img-fluid"
          src="${imgData[startID].imgUrl}">
        <p class="text-justify">${imgData[startID].imgContent}</p>
      </a>
    `;
    lastImgContainer.appendChild(lastItemImg);
  }
  photoSection.appendChild(lastImgContainer);
  loadMoreImg.classList.remove("show");
}
//Show rely content
function showRelyContent(e, url) {
  e.preventDefault();
  photoSection.innerHTML = "";
  tabBtn.forEach(function (tab) {
    tab.classList.remove("active");
  });
  loadMoreImg.classList.remove("show");
  var startSolarID = 0;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      showSixImage(startSolarID, data);
      startSolarID += 6;
      showNextSixImg(startSolarID, data);
      startSolarID += 6;
      showSixImage(startSolarID, data);
      startSolarID += 6;
      showLastImgs(startSolarID, data);
      startSolarID += 6;
    });
}
//Solar system btn event
var solarSystemBtn = document.querySelector(".solar-system-btn");

solarSystemBtn.addEventListener("click", showSolarSystemImg);
function showSolarSystemImg(e) {
  showRelyContent(
    e,
    "https://fake-api-sem.herokuapp.com/gallery?category=Solar%20system"
  );
  solarSystemBtn.classList.add("active");
}
//Exoplanets BTN event
var exoplanetsBtn = document.querySelector(".exoplanets-btn");

exoplanetsBtn.addEventListener("click", showExoplanets);
function showExoplanets(e) {
  showRelyContent(
    e,
    "https://fake-api-sem.herokuapp.com/gallery?category=Exoplanets"
  );
  exoplanetsBtn.classList.add("active");
}

//Galaxy BTN event
var galaxiesBtn = document.querySelector(".galaxies-btn");

galaxiesBtn.addEventListener("click", showGalaxies);

function showGalaxies(e) {
  showRelyContent(
    e,
    "https://fake-api-sem.herokuapp.com/gallery?category=Galaxies"
  );
  galaxiesBtn.classList.add("active");
}

//Spacecraft BTN event
var spaceCraftBtn = document.querySelector(".spacecraft-btn");
spaceCraftBtn.addEventListener("click", showSpacecraft);

function showSpacecraft(e) {
  showRelyContent(
    e,
    "https://fake-api-sem.herokuapp.com/gallery?category=Spacecraft"
  );
  spaceCraftBtn.classList.add("active");
}

//Star BTN event
var starsBtn = document.querySelector(".stars-btn");
starsBtn.addEventListener("click", showStars);

function showStars(e) {
  showRelyContent(
    e,
    "https://fake-api-sem.herokuapp.com/gallery?category=Star"
  );
  starsBtn.classList.add("active");
}
//Showall BTN event
var viewAllBtn = document.querySelector(".view-all-btn");
viewAllBtn.addEventListener("click", viewAll);
function viewAll() {
  photoSection.innerHTML = "";
  tabBtn.forEach(function (tab) {
    tab.classList.remove("active");
  });
  viewAllBtn.classList.add("active");
  startID = 0;
  showAll();
}
