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
          if (
            searchTitle.title.indexOf(searchValue.value.toLowerCase()) > -1 ||
            searchTitle.title.indexOf(searchValue.value.toUpperCase()) > -1
          ) {
            searchDATA.push(searchTitle);
          }
        });
        // console.log(searchDATA);
      });
  });
  setTimeout(function () {
    if (searchDATA.length != 0) {
      for (var i = 0; i < 100; i++) {
        if (
          !prevPageBtn.nextElementSibling.classList.contains("next-page-btn")
        ) {
          prevPageBtn.nextElementSibling.remove();
          nextPageBtn.classList.remove("disabled");
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
        newLI.innerHTML = `<a class="page-link" href="#top-search">${
          i + 1
        }</a>`;
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
    } else {
      paginationSection.classList.remove("show");
      searchResultContainer.innerHTML = `
      <div class="search-not-found text-center">
        <img class="mb-4" style="width: 150px" src="./images/sad.png" alt="Cry sad">
        <h3 class="astro-mark-1 text-center">Sorry, we couldn't find any results</h3>
      </div>
      `;
      loadingImage.classList.remove("active");
    }
  }, 5000);
}
function showCurrentPageResult(currentPage, searchDATA) {
  searchResultContainer.innerHTML = "";
  // link = newsContent.html?id=searchDATA[i].replace(" ", "%20");

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
        <a href = "newsContent.html?id=${searchDATA[i].title.replace(
          " ",
          "%20"
        )}">
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
          </a> 
      </div>
       
    `;
    searchResultContainer.appendChild(searchResult);
  }
}

function showLastPageResult(currentPage, searchDATA) {
  searchResultContainer.innerHTML = "";

  for (var i = currentPage * 10 - 10; i < searchDATA.length; i++) {
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
        <a href = "newsContent.html?id=${searchDATA[i].title.replace(
          " ",
          "%20"
        )}">
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
        </a>
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

//AUTO COMPLETE SEARCH
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

var searchTargetText = [
  "black hole",
  "solar",
  "solar system",
  "planet",
  "exoplanet",
  "space",
  "galaxy",
  "galaxies",
  "flight",
  "space flight",
  "earth",
  "earth evolution",
  "observatories",
  "observatory",
  "big bang",
  "theory",
  "big bang theory",
  "frontiers",
  "gas",
  "universe",
  "astronomer",
  "astronomy",
  "explorer",
  "expanding",
  "solar system history",
  "jupiter",
  "asteroid",
  "comet",
  "mercury",
  "venus",
  "the sun",
  "black holes",
  "black-hole",
  "panorama",
  "discover",
  "orbit",
  "stellar",
  "star",
  "research",
  "apollo 8",
  "observe",
  "new exoplanet",
];

autocomplete(document.getElementById("search-text"), searchTargetText);
