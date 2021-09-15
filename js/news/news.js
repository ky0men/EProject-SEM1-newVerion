$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(1000).fadeOut("slow");
});

function selectBb(elem) {
    var a = document.querySelectorAll("#bigbang-theory .pagination-item button");
    // console.log(a)
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}

function selectSl(elem) {
    var a = document.querySelectorAll("#solar-system .pagination-item button");

    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
function selectBh(elem) {
    var a = document.querySelectorAll("#black-holes .pagination-item button");
    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
function selectSf(elem) {
    var a = document.querySelectorAll("#space-flight .pagination-item button");
    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
function selectGl(elem) {
    var a = document.querySelectorAll("#galaxies .pagination-item button");
    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
function selectExo(elem) {
    var a = document.querySelectorAll("#exoplanets .pagination-item button");
    
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')      
    }
    elem.classList.add('selected');
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(queryString)
const titleUrl = urlParams.get("id");
// console.log(titleUrl);
if(titleUrl){
    // console.log("nhan url")
    setTimeout(function(){
        window.scroll({top: 1350, behavior: "smooth"})
      },1000)
    
    categorySelect();
} else {
    // console.log("Kh co URL")
}
function categorySelect(){
  var a =  document.querySelectorAll(".tab-elem .nav-link")
  var b = document.querySelectorAll(".content .tab-pane")
 
  for (var i=0;i< a.length;i++){
    a[i].classList.remove('active')
    b[i].classList.remove('active','show')
  }
  if (titleUrl === "exoplanet"){
    document.querySelector("#exoplanets-tab").classList.add('active')
    document.querySelector("#exoplanets").classList.add('active','show')
  }
  if(titleUrl === "solar-system"){
    
    document.querySelector("#solar-system-tab").classList.add('active')
    document.querySelector("#solar-system").classList.add('active','show')
  }
  if(titleUrl === "black-hole"){
    
    document.querySelector("#black-holes-tab").classList.add('active')
    document.querySelector("#black-holes").classList.add('active','show')
  }
  if(titleUrl === "space-flight"){
    document.querySelector("#space-flight-tab").classList.add('active')
    document.querySelector("#space-flight").classList.add('active','show')

  }
  if(titleUrl === "galaxy"){
    document.querySelector("#galaxies-tab").classList.add('active')
    document.querySelector("#galaxies").classList.add('active','show')

  }
  if(titleUrl === "earth-evo"){
    document.querySelector("#earth-evo-tab").classList.add('active')
    document.querySelector("#earth-evo").classList.add('active','show')

  }
}
