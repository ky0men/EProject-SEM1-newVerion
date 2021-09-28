var bodySolarSystem = document.querySelector("#bodySolar");
//Setting View BTN Event
var settingViewBtn = document.querySelector(".switch-toggle-view");
settingViewBtn.addEventListener("click", toggleView);
function toggleView() {
  if (bodySolarSystem.classList.contains("view-3d")) {
    bodySolarSystem.classList.remove("view-3d");
    bodySolarSystem.classList.add("view-2d");
  } else if (bodySolarSystem.classList.contains("view-2d")) {
    bodySolarSystem.classList.remove("view-2d");
    bodySolarSystem.classList.add("view-3d");
  } else if (bodySolarSystem.classList.contains("zoom-3d")) {
    bodySolarSystem.classList.remove("zoom-3d");
    bodySolarSystem.classList.add("zoom-2d");
  } else if (bodySolarSystem.classList.contains("zoom-2d")) {
    bodySolarSystem.classList.remove("zoom-2d");
    bodySolarSystem.classList.add("zoom-3d");
  }
}
//Setting Zoom BTN Event
var settingZoomBtn = document.querySelector(".switch-toggle-zoom");
settingZoomBtn.addEventListener("click", toggleZoom);
function toggleZoom() {
  if (bodySolarSystem.classList.contains("view-3d")) {
    bodySolarSystem.classList.remove("view-3d");
    bodySolarSystem.classList.add("zoom-3d");
  } else if (bodySolarSystem.classList.contains("view-2d")) {
    bodySolarSystem.classList.remove("view-2d");
    bodySolarSystem.classList.add("zoom-2d");
  } else if (bodySolarSystem.classList.contains("zoom-3d")) {
    bodySolarSystem.classList.remove("zoom-3d");
    bodySolarSystem.classList.add("view-3d");
  } else if (bodySolarSystem.classList.contains("zoom-2d")) {
    bodySolarSystem.classList.remove("zoom-2d");
    bodySolarSystem.classList.add("view-2d");
  }
}
//Nav Planets
var planetsInfo = document.querySelectorAll(".planets-info");
var orbits = document.querySelectorAll(".orbits");

//Sun-Nav Btn
var sunNavBtn = document.querySelector("#sun-nav");
var sunInfo = document.querySelector(".sun-info");
sunNavBtn.addEventListener("click", showSunInfo);
function showSunInfo() {
  if (sunInfo.classList.contains("show")) {
    sunInfo.classList.remove("show");
  } else {
    closeInfo();
    sunInfo.classList.add("show");
  }
}

//Mercury Nav Btn
var mercuryNavBtn = document.querySelector("#mercury-nav");
var mercuryInfo = document.querySelector(".mercury-info");
mercuryNavBtn.addEventListener("click", showMercuryInfo);
function showMercuryInfo() {
  if (mercuryInfo.classList.contains("show")) {
    mercuryInfo.classList.remove("show");
  } else {
    closeInfo();
    mercuryInfo.classList.add("show");
  }
}
//Venus Nav Btn
var venusNavBtn = document.querySelector("#venus-nav");
var venusInfo = document.querySelector(".venus-info");
venusNavBtn.addEventListener("click", showVenusInfo);
function showVenusInfo() {
  if (venusInfo.classList.contains("show")) {
    venusInfo.classList.remove("show");
  } else {
    closeInfo();
    venusInfo.classList.add("show");
  }
}
//Earth Nav Btn
var earthNavBtn = document.querySelector("#earth-nav");
var earthInfo = document.querySelector(".earth-info");
earthNavBtn.addEventListener("click", showEarthInfo);
function showEarthInfo() {
  if (earthInfo.classList.contains("show")) {
    earthInfo.classList.remove("show");
  } else {
    closeInfo();
    earthInfo.classList.add("show");
  }
}
//Mars Nav Btn
var marsNavBtn = document.querySelector("#mars-nav");
var marsInfo = document.querySelector(".mars-info");
marsNavBtn.addEventListener("click", showMarsInfo);
function showMarsInfo() {
  if (marsInfo.classList.contains("show")) {
    marsInfo.classList.remove("show");
  } else {
    closeInfo();
    marsInfo.classList.add("show");
  }
}
//Jupiter Nav Btn
var jupiterNavBtn = document.querySelector("#jupiter-nav");
var jupiterInfo = document.querySelector(".jupiter-info");
jupiterNavBtn.addEventListener("click", showJupiterInfo);
function showJupiterInfo() {
  if (jupiterInfo.classList.contains("show")) {
    jupiterInfo.classList.remove("show");
  } else {
    closeInfo();
    jupiterInfo.classList.add("show");
  }
}
//Saturn Nav Btn
var saturnNavBtn = document.querySelector("#saturn-nav");
var saturnInfo = document.querySelector(".saturn-info");
saturnNavBtn.addEventListener("click", showSaturnInfo);
function showSaturnInfo() {
  if (saturnInfo.classList.contains("show")) {
    saturnInfo.classList.remove("show");
  } else {
    closeInfo();
    saturnInfo.classList.add("show");
  }
}
//Uranus Nav Btn
var uranusNavBtn = document.querySelector("#uranus-nav");
var uranusInfo = document.querySelector(".uranus-info");
uranusNavBtn.addEventListener("click", showUranusInfo);
function showUranusInfo() {
  if (uranusInfo.classList.contains("show")) {
    uranusInfo.classList.remove("show");
  } else {
    closeInfo();
    uranusInfo.classList.add("show");
  }
}
//Neptune Nav Btn
var neptuneNavBtn = document.querySelector("#neptune-nav");
var neptuneInfo = document.querySelector(".neptune-info");
neptuneNavBtn.addEventListener("click", showNeptuneInfo);
function showNeptuneInfo() {
  if (neptuneInfo.classList.contains("show")) {
    neptuneInfo.classList.remove("show");
  } else {
    closeInfo();
    neptuneInfo.classList.add("show");
  }
}

var closeSunInfoBtn = document.querySelector(".close-sun-info");
var closeMercuryInfoBtn = document.querySelector(".close-mercury-info");
var closeVenusInfoBtn = document.querySelector(".close-venus-info");
var closeEarthInfoBtn = document.querySelector(".close-earth-info");
var closeMarsInfoBtn = document.querySelector(".close-mars-info");
var closeJupiterInfoBtn = document.querySelector(".close-jupiter-info");
var closeSaturnInfoBtn = document.querySelector(".close-saturn-info");
var closeUranusInfoBtn = document.querySelector(".close-uranus-info");
var closeNeptuneInfoBtn = document.querySelector(".close-neptune-info");
closeSunInfoBtn.addEventListener("click", closeInfo);
closeMercuryInfoBtn.addEventListener("click", closeInfo);
closeVenusInfoBtn.addEventListener("click", closeInfo);
closeEarthInfoBtn.addEventListener("click", closeInfo);
closeMarsInfoBtn.addEventListener("click", closeInfo);
closeJupiterInfoBtn.addEventListener("click", closeInfo);
closeSaturnInfoBtn.addEventListener("click", closeInfo);
closeUranusInfoBtn.addEventListener("click", closeInfo);
closeNeptuneInfoBtn.addEventListener("click", closeInfo);

function closeInfo() {
  planetsInfo.forEach(function (planet) {
    planet.classList.remove("show");
  });
  orbits.forEach(function (orbit) {
    orbit.classList.remove("orbit-color");
  });
}
