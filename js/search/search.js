var searchValue = document.querySelector(".search-value");
var searchBtn = document.querySelector(".search-info-btn");
var searchResultContainer = document.querySelector(".search-result");
var loadingImage = document.querySelector(".loading-image");
var paginationUL = document.querySelector(".pagination");
var paginationSection = document.querySelector(".pagination-section");
var prevPageBtn = document.querySelector(".prev-page-btn");
var nextPageBtn = document.querySelector(".next-page-btn");

var fetchLinkData = [
  "https://fake-api-sem.herokuapp.com/solarsystem",
  "https://fake-api-sem.herokuapp.com/bigbang",
  "https://fake-api-sem.herokuapp.com/blackhole",
  "https://fake-api-sem.herokuapp.com/exoplanet",
  "https://fake-api-sem.herokuapp.com/galaxies",
  "https://fake-api-sem.herokuapp.com/spaceflight",
];

searchValue.addEventListener("keydown", startSearch);
function startSearch(e) {
  if (e.keyCode == 13) {
    searchInfo();
  }
}
searchBtn.addEventListener("click", searchInfo);

function searchInfo() {
  var searchDATA = [];
  loadingImage.classList.add("active");
  fetchLinkData.forEach(function (link) {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        data.forEach(function (searchTitle) {
          if (searchTitle.title.indexOf(searchValue.value) > -1) {
            searchDATA.push(searchTitle);
          }
        });
        // console.log(searchDATA);
      });
  });
  setTimeout(function () {
    for (var i = 0; i < 100; i++) {
      if (!prevPageBtn.nextElementSibling.classList.contains("next-page-btn")) {
        prevPageBtn.nextElementSibling.remove();
      } else {
        break;
      }
    }
    // console.log(searchDATA);
    loadingImage.classList.remove("active");
    //PAGINATION
    paginationSection.classList.add("show");
    var lastPage = Math.ceil(searchDATA.length / 10);
    var currentPage = 1;
    for (var i = 0; i < lastPage; i++) {
      var newLI = document.createElement("li");
      newLI.classList = "page-item number-item";
      newLI.innerHTML = `<a class="page-link" href="#top-search">${i + 1}</a>`;
      paginationUL.insertBefore(newLI, nextPageBtn);
      if (i == 0) {
        newLI.classList.add("active");
      }
    }
    showCurrentPageResult(currentPage, searchDATA);
    //CHANGE PAGE ACTION
    paginationUL.addEventListener("click", changePage);
    function changePage(e) {
      var allLIPagi = document.querySelectorAll(".page-item");
      allLIPagi.forEach(function (liItems) {
        liItems.classList.remove("active");
      });

      if (e.target.innerText == 1) {
        currentPage = 1;
        showCurrentPageResult(currentPage, searchDATA);
        prevPageBtn.classList.add("disabled");
        nextPageBtn.classList.remove("disabled");
        e.target.parentElement.classList.add("active");
      } else if (
        e.target.innerText != 1 &&
        e.target.innerText != lastPage &&
        e.target.innerText != "Next" &&
        e.target.innerText != "Previous"
      ) {
        currentPage = e.target.innerText;
        showCurrentPageResult(currentPage, searchDATA);
        nextPageBtn.classList.remove("disabled");
        prevPageBtn.classList.remove("disabled");
        e.target.parentElement.classList.add("active");
      } else if (e.target.innerText == lastPage) {
        currentPage = lastPage;
        showLastPageResult(currentPage, searchDATA);
        nextPageBtn.classList.add("disabled");
        prevPageBtn.classList.remove("disabled");
        e.target.parentElement.classList.add("active");
      } else if (e.target.innerText == "Previous") {
        // console.log(e.target);
        --currentPage;
        if (currentPage == 1) {
          showCurrentPageResult(currentPage, searchDATA);
          prevPageBtn.classList.add("disabled");
          nextPageBtn.classList.remove("disabled");
          allLIPagi[currentPage].classList.add("active");
        } else if (currentPage != 1 && currentPage != lastPage) {
          showCurrentPageResult(currentPage, searchDATA);
          nextPageBtn.classList.remove("disabled");
          prevPageBtn.classList.remove("disabled");
          allLIPagi[currentPage].classList.add("active");
        }
      } else if (e.target.innerText == "Next") {
        // console.log("next button");
        ++currentPage;
        // console.log(currentPage);
        if (currentPage != 1 && currentPage != lastPage) {
          showCurrentPageResult(currentPage, searchDATA);
          nextPageBtn.classList.remove("disabled");
          prevPageBtn.classList.remove("disabled");
          allLIPagi[currentPage].classList.add("active");
        } else if (currentPage == lastPage) {
          showLastPageResult(currentPage, searchDATA);
          nextPageBtn.classList.add("disabled");
          prevPageBtn.classList.remove("disabled");
          allLIPagi[currentPage].classList.add("active");
        }
      }
    }
  }, 5000);
}
function showCurrentPageResult(currentPage, searchDATA) {
  searchResultContainer.innerHTML = "";

  for (var i = currentPage * 10 - 10; i < currentPage * 10; i++) {
    var view = Math.floor(Math.random() * 50);
    var comment = Math.floor(Math.random() * 20);
    var searchResult = document.createElement("div");
    searchResult.className = "row card-search-result mt-5";
    searchResult.innerHTML = `
      <div class="col-md-4">
        <div class="card-search-img text-center">
          <img src="${searchDATA[i].img}" alt="">
        </div>
      </div>
      <div class="col-md-8 d-flex flex-column justify-content-center">
        <div class="card-search-title">
          <h3 class="astro-mark-1">${searchDATA[i].title}</h3>
        </div>
        <div class="card-search-content">
          <p class="text-justify">${searchDATA[i].summary}...</p>
          <div class="view-comment text-right font-italic astro-mark-link-1">
            <span><i class="fas fa-eye"></i> ${view} views</span>
            <span class="ml-2"><i class="fas fa-comment-dots"></i> ${comment} comments</span>
          </div>
        </div>
      </div>
    `;
    searchResultContainer.appendChild(searchResult);
  }
}

function showLastPageResult(currentPage, searchDATA) {
  searchResultContainer.innerHTML = "";

  for (var i = currentPage * 10 - 10; i < searchDATA.length; i++) {
    var searchResult = document.createElement("div");
    searchResult.className = "row card-search-result mt-5";
    searchResult.innerHTML = `
      <div class="col-md-4">
        <div class="card-search-img text-center">
          <img src="${searchDATA[i].img}" alt="">
        </div>
      </div>
      <div class="col-md-8 d-flex flex-column justify-content-center">
        <div class="card-search-title">
          <h3 class="astro-mark-1">${searchDATA[i].title}</h3>
        </div>
        <div class="card-search-content">
          <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam molestiae
          explicabo consequuntur
          laboriosam fuga saepe! Perferendis quo, explicabo consectetur totam architecto quasi tempora autem facere,
          illum id deleniti quis quod a nisi asperiores sequi! Soluta doloribus nulla doloremque consequatur
          corrupti.</p>
          <div class="view-comment text-right font-italic astro-mark-link-1">
            <span><i class="fas fa-eye"></i> 20 views</span>
            <span class="ml-2"><i class="fas fa-comment-dots"></i> 10 comments</span>
          </div>
        </div>
      </div>
    `;
    searchResultContainer.appendChild(searchResult);
  }
}
//SEARCH FROM NAVBAR
document.addEventListener("DOMContentLoaded", searchFromNav);

function searchFromNav() {
  if (window.location.search.substring(1) != "") {
    searchValue.value = window.location.search.substring(1).replace("%20", " ");
    searchInfo();
  }
}
