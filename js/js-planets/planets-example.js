//PRELOADER ANIMATION
var preloader = document.querySelector("#preloader");

setTimeout(function () {
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
}, 1000);
// ANIMATION HAMBURGER
var hamburgerBTN = document.querySelector(".navbar-toggler-icon");

hamburgerBTN.addEventListener("click", function () {
  hamburgerBTN.classList.toggle("rotate");
});


$(document).ready(function(){
    $("select").change(function(){
    $(this).find("option:selected").each(function(){
      var optionValue = $(this).attr("value");
               if(optionValue){
                 $(".box").not("."+ optionValue).hide();
                 $("." + optionValue).show();
               }else{
                   $(".box").hide();
                 }
    });
    }).change();
    });
 
    
    