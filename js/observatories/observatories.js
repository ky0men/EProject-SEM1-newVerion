//SHOW FIRST 4 OBSERVATORIES
var loadMore = document.querySelector(".load-more");
var loadMoreBtn = document.querySelector(".load-more-btn");
document.addEventListener("DOMContentLoaded", showFirstFourObser);
function showFirstFourObser() {
  if (window.location.search.substring(1) == "") {
    fetch("https://fake-api-sem.herokuapp.com/observatories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        for (var i = 1; i < 5; i++) {
          data.forEach(function (obser) {
            if (obser.id == i) {
              var obserItem = document.createElement("div");
              obserItem.className = "obser-item row";
              obserItem.innerHTML = `
              <div class="col-md-4 ob-img d-flex flex-column justify-content-center">
              <img src="${obser.imgUrl}" alt="${obser.name}">
              </div>
              <div class="col-md-8">
              <h3>${obser.name}</h3>
              <p class="text-justify">${obser.shortContent}</p>
              <div class="text-right">
              <a href="#" id="${obser.id}" class="btn btn-sm read-more-btn">Read more...</a>
              </div>
              </div>
              `;
              obserCard.appendChild(obserItem);
            }
          });
        }
      });
  }
}

//LOAD MORE
loadMoreBtn.addEventListener("click", loadMoreObser);
var currentId = 1;
function loadMoreObser() {
  currentId += 4;
  fetch("https://fake-api-sem.herokuapp.com/observatories")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      for (var i = currentId; i < currentId + 4; i++) {
        data.forEach(function (obser) {
          if (obser.id == i) {
            var obserItem = document.createElement("div");
            obserItem.className = "obser-item row";
            obserItem.innerHTML = `
            <div class="col-md-4 ob-img d-flex flex-column justify-content-center">
            <img src="${obser.imgUrl}" alt="${obser.name}">
            </div>
            <div class="col-md-8">
            <h3>${obser.name}</h3>
            <p class="text-justify">${obser.shortContent}</p>
            <div class="text-right">
            <a href="#" id="${obser.id}" class="btn btn-sm read-more-btn">Read more...</a>
            </div>
            </div>
            `;
            obserCard.appendChild(obserItem);
          }
        });
      }
    });
  if (currentId > 24) {
    loadMore.style.display = "none";
  }
}
//SHOW ALL OBSERVATORIES
var obserCard = document.querySelector(".obser-card-outer");
// function showAllObser() {
//   fetch("https://fake-api-sem.herokuapp.com/observatories")
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);
//       data.forEach(function (obser) {
//         var obserItem = document.createElement("div");
//         obserItem.className = "obser-item row";
//         obserItem.innerHTML = `
//         <div class="col-md-4 ob-img d-flex flex-column justify-content-center">
//         <img src="${obser.imgUrl}" alt="${obser.name}">
//         </div>
//         <div class="col-md-8">
//         <h3>${obser.name}</h3>
//         <p class="text-justify">${obser.shortContent}</p>
//         <div class="text-right">
//           <a href="#" id="${obser.id}" class="btn btn-sm read-more-btn">Read more...</a>
//         </div>
//         </div>
//         `;
//         obserCard.appendChild(obserItem);
//       });
//     });
// }

function showFourOfAll() {
  fetch("https://fake-api-sem.herokuapp.com/observatories")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      for (var i = 1; i < 5; i++) {
        data.forEach(function (obser) {
          if (obser.id == i) {
            var obserItem = document.createElement("div");
            obserItem.className = "obser-item row";
            obserItem.innerHTML = `
              <div class="col-md-4 ob-img d-flex flex-column justify-content-center">
              <img src="${obser.imgUrl}" alt="${obser.name}">
              </div>
              <div class="col-md-8">
              <h3>${obser.name}</h3>
              <p class="text-justify">${obser.shortContent}</p>
              <div class="text-right">
              <a href="#" id="${obser.id}" class="btn btn-sm read-more-btn">Read more...</a>
              </div>
              </div>
              `;
            obserCard.appendChild(obserItem);
          }
        });
      }
    });
  loadMore.style.display = "block";
}
//SHOW SELECTED COUNTRY OBSERVATORIES
var selectCountry = document.querySelector("#countries");

selectCountry.addEventListener("change", showSelectedCountryObser);

function showSelectedCountryObser() {
  // console.log(selectCountry.value);
  obserCard.innerHTML = "";
  if (selectCountry.value == "all") {
    currentId = 1;
    showFourOfAll();
  } else {
    fetch("https://fake-api-sem.herokuapp.com/observatories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        data.forEach(function (obser) {
          if (obser.country == selectCountry.value) {
            var obserItem = document.createElement("div");
            obserItem.className = "obser-item row";
            obserItem.innerHTML = `
          <div class="col-md-4 ob-img d-flex flex-column justify-content-center">
          <img src="${obser.imgUrl}" alt="${obser.name}">
        </div>
        <div class="col-md-8">
          <h3>${obser.name}</h3>
          <p class="text-justify">${obser.shortContent}</p>
          <div class="text-right">
            <a href="#" id="${obser.id}" class="btn btn-sm read-more-btn">Read more...</a>
          </div>
        </div>
          `;
            obserCard.appendChild(obserItem);
          }
        });
      });
  }
}
//SHOW DETAIL OBSERVATORIES
obserCard.addEventListener("click", showDetailObser);

function showDetailObser(e) {
  // e.preventDefault();

  if (e.target.classList.contains("read-more-btn")) {
    obserCard.innerHTML = "";

    // console.log(e.target.id);
    fetch("https://fake-api-sem.herokuapp.com/observatories")
      .then((res) => res.json())
      .then((data) => {
        data.forEach(function (obser) {
          if (e.target.id == obser.id) {
            // console.log(obser.id);
            // random obser
            var random1 = Math.floor(Math.random() * 6) + 1;
            var random2 = Math.floor(Math.random() * 5) + 7;
            var random3 = Math.floor(Math.random() * 5) + 13;
            var random4 = Math.floor(Math.random() * 5) + 19;
            var random5 = Math.floor(Math.random() * 3) + 25;

            var obserDetail = document.createElement("div");
            obserDetail.className = "obser-detail";
            obserDetail.innerHTML = `
            <div class="obser-detail">
            <div class="row">
            <div class="col-md-8">
              <div class="obser-content">
                <h3 class="text-center">${obser.name}</h3>

                <div class="content-top">
                  <p class="text-justify">${obser.contentTop}</p>
                </div>
                <div class="obser-img">
                  <img
                    src="${obser.imgUrl}"
                    alt="${obser.name}">
                  <p class="text-center describe-img"><i>${obser.imgDescribe}</i></p>
                </div>
                <div class="content-bottom">
                  <p class="text-justify">${obser.contentBottom}</p>
                </div>
                <div class="text-center mb-5">
                  <p class="text-center obser-map"><i>Position of Observatories</i></p>
                  <iframe
                    src="${obser.mapUrl}"
                    width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                </div>
              </div>
            </div>

            
            <div class="col-md-4">
              <div class="obser-side-bar">
              <h4 class="text-center">More Observatories</h4>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random1].imgUrl}"
                    alt="${data[random1].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random1].name} (${data[random1].country})</strong></p>
                </div>
              </div>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random2].imgUrl}"
                    alt="${data[random2].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random2].name} (${data[random2].country})</strong></p>
                </div>
              </div>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random3].imgUrl}"
                    alt="${data[random3].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random3].name} (${data[random3].country})</strong></p>
                </div>
              </div>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random4].imgUrl}"
                    alt="${data[random4].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random4].name} (${data[random4].country})</strong></p>
                </div>
              </div>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random5].imgUrl}"
                    alt="${data[random5].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random5].name} (${data[random5].country})</strong></p>
                </div>
              </div>

            </div>
            </div>

            </div>
            `;

            obserCard.appendChild(obserDetail);
          }
        });
      });
  }
}

obserCard.addEventListener("click", showObserLink);

function showObserLink(e) {
  // console.log(
  //   e.target.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute(
  //     "alt"
  //   )
  // );
  if (
    e.target.parentElement.parentElement.classList.contains("obser-side-title")
  ) {
    obserCard.innerHTML = "";

    var obserLinkName =
      e.target.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute(
        "alt"
      );
    fetch("https://fake-api-sem.herokuapp.com/observatories")
      .then((res) => res.json())
      .then((data) => {
        data.forEach(function (obser) {
          if (obser.name == obserLinkName) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            // random obser
            var random1 = Math.floor(Math.random() * 6) + 1;
            var random2 = Math.floor(Math.random() * 5) + 7;
            var random3 = Math.floor(Math.random() * 5) + 13;
            var random4 = Math.floor(Math.random() * 5) + 19;
            var random5 = Math.floor(Math.random() * 3) + 25;

            var obserDetail = document.createElement("div");
            obserDetail.className = "obser-detail";
            obserDetail.innerHTML = `
            <div class="obser-detail">
            <div class="row">
            <div class="col-md-8">
              <div class="obser-content">
                <h3 class="text-center">${obser.name}</h3>

                <div class="content-top">
                  <p class="text-justify">${obser.contentTop}</p>
                </div>
                <div class="obser-img">
                  <img
                    src="${obser.imgUrl}"
                    alt="${obser.name}">
                  <p class="text-center describe-img"><i>${obser.imgDescribe}</i></p>
                </div>
                <div class="content-bottom">
                  <p class="text-justify">${obser.contentBottom}</p>
                </div>
                <div class="text-center">
                  <p class="text-center obser-map"><i>Position of Observatories</i></p>
                  <iframe
                    src="${obser.mapUrl}"
                    width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                </div>
              </div>
            </div>


            <div class="col-md-4">
              <div class="obser-side-bar">
              <h4 class="text-center">More Observatories</h4>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random1].imgUrl}"
                    alt="${data[random1].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random1].name} (${data[random1].country})</strong></p>
                </div>
              </div>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random2].imgUrl}"
                    alt="${data[random2].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random2].name} (${data[random2].country})</strong></p>
                </div>
              </div>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random3].imgUrl}"
                    alt="${data[random3].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random3].name} (${data[random3].country})</strong></p>
                </div>
              </div>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random4].imgUrl}"
                    alt="${data[random4].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random4].name} (${data[random4].country})</strong></p>
                </div>
              </div>

              <div class="row obser-side-card">
                <div class="col-md-5 obser-side-img">
                  <img
                    src="${data[random5].imgUrl}"
                    alt="${data[random5].name}">
                </div>
                <div class="col-md-7 obser-side-title">
                  <p><strong>${data[random5].name} (${data[random5].country})</strong></p>
                </div>
              </div>

            </div>
            </div>

            </div>`;
            obserCard.appendChild(obserDetail);
          }
        });
      });
  }
}

// SHOW RELY ON COUNTRY
document.addEventListener("DOMContentLoaded", showRelyOnCountry);

function showRelyOnCountry() {
  if (window.location.search.substring(1) != "") {
    var country = window.location.search.substring(1);
    fetch(`https://fake-api-sem.herokuapp.com/observatories?country=${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        selectCountry.value = country;
        data.forEach(function (obser) {
          var obserItem = document.createElement("div");
          obserItem.className = "obser-item row";
          obserItem.innerHTML = `
              <div class="col-md-4 ob-img d-flex flex-column justify-content-center">
              <img src="${obser.imgUrl}" alt="${obser.name}">
              </div>
              <div class="col-md-8">
              <h3>${obser.name}</h3>
              <p class="text-justify">${obser.shortContent}</p>
              <div class="text-right">
              <a href="#" id="${obser.id}" class="btn btn-sm read-more-btn">Read more...</a>
              </div>
              </div>
              `;
          obserCard.appendChild(obserItem);
        });
      });
    loadMore.style.display = "none";
  }
}
