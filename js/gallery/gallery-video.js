var tabBtn = document.querySelectorAll(".tab-btn");
var videoInner = document.querySelector(".video-inner");

document.addEventListener("DOMContentLoaded", showAllVideo);
var startVideoID = 0;
var videosItem = 0;
function showAllVideo() {
  startVideoID = 0;
  loadNineVideos();
  toggleActiveBtn();
  viewAllBtn.classList.add("active");
}
function loadNineVideos() {
  fetch("http://fake-api-sem.herokuapp.com/videos")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      videosItem = data.length;
      // console.log(videosItem);
      for (var i = startVideoID; i < startVideoID + 9; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "video col-md-6 col-lg-4 openbox";
        newDiv.innerHTML = `
        <a class="vid fancybox" href="${data[i].videoUrl}">
          <img src="${data[i].posterImg}">
          <div class="youtube-video-play-button"></div>
          <div class="video-title">${data[i].videoTitle}</div>
        </a>
        `;
        videoInner.appendChild(newDiv);
        effectVideo();
      }
      startVideoID += 9;
    });
  loadMoreBtn.style.visibility = "visible";
}
function loadLastVideos() {
  fetch("http://fake-api-sem.herokuapp.com/videos")
    .then((res) => res.json())
    .then((data) => {
      for (var i = startVideoID; i < videosItem; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "video col-md-6 col-lg-4 openbox";
        newDiv.innerHTML = `
        <a class="vid fancybox" href="${data[i].videoUrl}">
          <img src="${data[i].posterImg}">
          <div class="youtube-video-play-button"></div>
          <div class="video-title">${data[i].videoTitle}</div>
        </a>
        `;
        videoInner.appendChild(newDiv);
        effectVideo();
      }
    });
  loadMoreBtn.style.visibility = "hidden";
}
var loadMoreBtn = document.querySelector(".load-more-btn");
loadMoreBtn.addEventListener("click", loadMoreVideos);
function loadMoreVideos() {
  if (videosItem - startVideoID > 9) {
    loadNineVideos();
  } else {
    loadLastVideos();
  }
}

function effectVideo() {
  $(".vid").fancybox({
    type: "iframe", //<--added
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: "70%",
    height: "70%",
    autoSize: false,
    closeClick: false,
    openEffect: "elastic",
    closeEffect: "elastic",
  });

  $(".video").hover(
    function () {
      $(this).find("img").fadeTo(1000, 0.5);
    },
    function () {
      $(this).find("img").fadeTo(1000, 1);
    }
  );
}
//Show all video rely on category
function showVideo(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach(function (videoData) {
        var newDiv = document.createElement("div");
        newDiv.className = "video col-md-6 col-lg-4 openbox";
        newDiv.innerHTML = `
      <a class="vid fancybox" href="${videoData.videoUrl}">
        <img src="${videoData.posterImg}">
        <div class="youtube-video-play-button"></div>
        <div class="video-title">${videoData.videoTitle}</div>
      </a>
      `;
        videoInner.appendChild(newDiv);
        effectVideo();
      });
    });
}
//Toggle active BTN
function toggleActiveBtn() {
  videoInner.innerHTML = "";
  tabBtn.forEach(function (tab) {
    tab.classList.remove("active");
  });
}
//Solar System BTN Event
var solarSystemBtn = document.querySelector(".solar-system-btn");

solarSystemBtn.addEventListener("click", showSolarVideo);

function showSolarVideo() {
  toggleActiveBtn();
  solarSystemBtn.classList.add("active");
  showVideo(
    "https://fake-api-sem.herokuapp.com/videos?category=Solar%20system"
  );
  loadMoreBtn.style.visibility = "hidden";
}

//Exoplanets BTN Event
var exoplanetsBtn = document.querySelector(".exoplanets-btn");
exoplanetsBtn.addEventListener("click", showExoplanetVideo);
function showExoplanetVideo() {
  toggleActiveBtn();
  exoplanetsBtn.classList.add("active");
  showVideo("https://fake-api-sem.herokuapp.com/videos?category=Exoplanets");
  loadMoreBtn.style.visibility = "hidden";
}

//Galaxies BTN Event
var galaxiesBtn = document.querySelector(".galaxies-btn");
galaxiesBtn.addEventListener("click", showGalaxiesVideo);
function showGalaxiesVideo() {
  toggleActiveBtn();
  galaxiesBtn.classList.add("active");
  showVideo("https://fake-api-sem.herokuapp.com/videos?category=Galaxies");
  loadMoreBtn.style.visibility = "hidden";
}

//Spacecraft BTN Event
var spacecraftBtn = document.querySelector(".spacecraft-btn");
spacecraftBtn.addEventListener("click", showSpacecraftVideo);
function showSpacecraftVideo() {
  toggleActiveBtn();
  spacecraftBtn.classList.add("active");
  showVideo("https://fake-api-sem.herokuapp.com/videos?category=Spacecraft");
  loadMoreBtn.style.visibility = "hidden";
}
//Stars BTN Event
var starsBtn = document.querySelector(".stars-btn");
starsBtn.addEventListener("click", showStarsVideo);
function showStarsVideo() {
  toggleActiveBtn();
  starsBtn.classList.add("active");
  showVideo("https://fake-api-sem.herokuapp.com/videos?category=Stars");
  loadMoreBtn.style.visibility = "hidden";
}
//ViewAll BTN Event
var viewAllBtn = document.querySelector(".view-all-btn");
viewAllBtn.addEventListener("click", showAllVideo);
