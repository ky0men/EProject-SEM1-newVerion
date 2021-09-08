$(document).ready(function(){
  $(".navbar-toggle").on("click", function (){
    $(this).toggleClass("active");
  });

  $(".switch-toggle-view").click(function(){
    if($("#bodySolar").hasClass('view-3d')){
      $("#bodySolar").removeClass('view-3d').addClass('view-2d')
    }else if($("#bodySolar").hasClass('view-2d')){
      $("#bodySolar").removeClass('view-2d').addClass('view-3d')
    }
    else if($("#bodySolar").hasClass('zoom-3d')){
      $("#bodySolar").removeClass('zoom-3d').addClass('zoom-2d')
    }
    else if($("#bodySolar").hasClass('zoom-2d')){
      $("#bodySolar").removeClass('zoom-2d').addClass('zoom-3d')
    }
    
  });
  $(".switch-toggle-zoom").click(function(){
    if($("#bodySolar").hasClass('view-3d')){
      $("#bodySolar").removeClass('view-3d').addClass('zoom-3d')
    }
    else if($("#bodySolar").hasClass('view-2d')){
      $("#bodySolar").removeClass('view-2d').addClass('zoom-2d')
    }
    else if($("#bodySolar").hasClass('zoom-3d')){
      $("#bodySolar").removeClass('zoom-3d').addClass('view-3d')
    }
    else if($("#bodySolar").hasClass('zoom-2d')){
      $("#bodySolar").removeClass('zoom-2d').addClass('view-2d')
    }
  });
  $("#sun-nav").click(function(){
    $("#mercury-info").fadeOut(1000);
    $("#venus-info").fadeOut(1000);
    $("#earth-info").fadeOut(1000);
    $("#mars-info").fadeOut(1000);
    $("#jupiter-info").fadeOut(1000);
    $("#saturn-info").fadeOut(1000);
    $("#uranus-info").fadeOut(1000);
    $("#neptune-info").fadeOut(1000);
    $("#sun-info").fadeToggle(1000);
    $("#mercury").removeClass('orbit-color');
    $("#venus").removeClass('orbit-color');
    $("#earth").removeClass('orbit-color');
    $("#mars").removeClass('orbit-color');
    $("#jupiter").removeClass('orbit-color');
    $("#saturn").removeClass('orbit-color');
    $("#uranus").removeClass('orbit-color');
    $("#neptune").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-sun-info").click(function(){
    $("#sun-info").fadeToggle(1000);
  });
  $("#mercury-nav").click(function(){
    $("#sun-info").fadeOut(1000);
    $("#venus-info").fadeOut(1000);
    $("#earth-info").fadeOut(1000);
    $("#mars-info").fadeOut(1000);
    $("#jupiter-info").fadeOut(1000);
    $("#saturn-info").fadeOut(1000);
    $("#uranus-info").fadeOut(1000);
    $("#neptune-info").fadeOut(1000);
    $("#mercury-info").fadeToggle(1000);
    $("#mercury").toggleClass('orbit-color');
    $("#venus").removeClass('orbit-color');
    $("#earth").removeClass('orbit-color');
    $("#mars").removeClass('orbit-color');
    $("#jupiter").removeClass('orbit-color');
    $("#saturn").removeClass('orbit-color');
    $("#uranus").removeClass('orbit-color');
    $("#neptune").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-mercury-info").click(function(){
    $("#mercury-info").fadeToggle(1000);
    $("#mercury").removeClass('orbit-color');

  });
  $("#venus-nav").click(function(){
    $("#sun-info").fadeOut(1000);
    $("#mercury-info").fadeOut(1000);
    $("#earth-info").fadeOut(1000);
    $("#mars-info").fadeOut(1000);
    $("#jupiter-info").fadeOut(1000);
    $("#saturn-info").fadeOut(1000);
    $("#uranus-info").fadeOut(1000);
    $("#neptune-info").fadeOut(1000);
    $("#venus-info").fadeToggle(1000);
    $("#venus").toggleClass('orbit-color')
    $("#mercury").removeClass('orbit-color');
    $("#earth").removeClass('orbit-color');
    $("#mars").removeClass('orbit-color');
    $("#jupiter").removeClass('orbit-color');
    $("#saturn").removeClass('orbit-color');
    $("#uranus").removeClass('orbit-color');
    $("#neptune").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-venus-info").click(function(){
    $("#venus-info").fadeToggle(1000);
    $("#venus").removeClass('orbit-color');
  });
  $("#earth-nav").click(function(){
    $("#sun-info").fadeOut(1000);
    $("#mercury-info").fadeOut(1000);
    $("#venus-info").fadeOut(1000);
    $("#mars-info").fadeOut(1000);
    $("#jupiter-info").fadeOut(1000);
    $("#saturn-info").fadeOut(1000);
    $("#uranus-info").fadeOut(1000);
    $("#neptune-info").fadeOut(1000);
    $("#earth-info").fadeToggle(1000);
    $("#earth").toggleClass('orbit-color')
    $("#mercury").removeClass('orbit-color');
    $("#venus").removeClass('orbit-color');
    $("#mars").removeClass('orbit-color');
    $("#jupiter").removeClass('orbit-color');
    $("#saturn").removeClass('orbit-color');
    $("#uranus").removeClass('orbit-color');
    $("#neptune").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-earth-info").click(function(){
    $("#earth-info").fadeToggle(1000);
    $("#venus").removeClass('orbit-color');

  });
  $("#mars-nav").click(function(){
    $("#sun-info").fadeOut(1000);
    $("#mercury-info").fadeOut(1000);
    $("#venus-info").fadeOut(1000);
    $("#earth-info").fadeOut(1000);
    $("#jupiter-info").fadeOut(1000);
    $("#saturn-info").fadeOut(1000);
    $("#uranus-info").fadeOut(1000);
    $("#neptune-info").fadeOut(1000);
    $("#mars-info").fadeToggle(1000);
    $("#mars").toggleClass('orbit-color')
    $("#mercury").removeClass('orbit-color');
    $("#venus").removeClass('orbit-color');
    $("#earth").removeClass('orbit-color');
    $("#jupiter").removeClass('orbit-color');
    $("#saturn").removeClass('orbit-color');
    $("#uranus").removeClass('orbit-color');
    $("#neptune").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-mars-info").click(function(){
    $("#mars-info").fadeToggle(1000);
    $("#mars").removeClass('orbit-color');

  });
  $("#jupiter-nav").click(function(){
    $("#sun-info").fadeOut(1000);
    $("#mercury-info").fadeOut(1000);
    $("#venus-info").fadeOut(1000);
    $("#earth-info").fadeOut(1000);
    $("#mars-info").fadeOut(1000);
    $("#saturn-info").fadeOut(1000);
    $("#uranus-info").fadeOut(1000);
    $("#neptune-info").fadeOut(1000);
    $("#jupiter-info").fadeToggle(1000);
    $("#jupiter").toggleClass('orbit-color')
    $("#mercury").removeClass('orbit-color');
    $("#venus").removeClass('orbit-color');
    $("#earth").removeClass('orbit-color');
    $("#mars").removeClass('orbit-color');
    $("#saturn").removeClass('orbit-color');
    $("#uranus").removeClass('orbit-color');
    $("#neptune").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-jupiter-info").click(function(){
    $("#jupiter-info").fadeToggle(1000);
    $("#jupiter").removeClass('orbit-color');

  });
  $("#saturn-nav").click(function(){
    $("#sun-info").fadeOut(1000);
    $("#mercury-info").fadeOut(1000);
    $("#venus-info").fadeOut(1000);
    $("#earth-info").fadeOut(1000);
    $("#mars-info").fadeOut(1000);
    $("#jupiter-info").fadeOut(1000);
    $("#uranus-info").fadeOut(1000);
    $("#neptune-info").fadeOut(1000);
    $("#saturn-info").fadeToggle(1000);
    $("#saturn").toggleClass('orbit-color')
    $("#mercury").removeClass('orbit-color');
    $("#venus").removeClass('orbit-color');
    $("#earth").removeClass('orbit-color');
    $("#mars").removeClass('orbit-color');
    $("#jupiter").removeClass('orbit-color');
    $("#uranus").removeClass('orbit-color');
    $("#neptune").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-saturn-info").click(function(){
    $("#saturn-info").fadeToggle(1000);
    $("#saturn").removeClass('orbit-color');

  });
  $("#uranus-nav").click(function(){
    $("#sun-info").fadeOut(1000);
    $("#mercury-info").fadeOut(1000);
    $("#venus-info").fadeOut(1000);
    $("#earth-info").fadeOut(1000);
    $("#mars-info").fadeOut(1000);
    $("#jupiter-info").fadeOut(1000);
    $("#saturn-info").fadeOut(1000);
    $("#neptune-info").fadeOut(1000);
    $("#uranus-info").fadeToggle(1000);
    $("#uranus").toggleClass('orbit-color')
    $("#mercury").removeClass('orbit-color');
    $("#venus").removeClass('orbit-color');
    $("#earth").removeClass('orbit-color');
    $("#mars").removeClass('orbit-color');
    $("#jupiter").removeClass('orbit-color');
    $("#saturn").removeClass('orbit-color');
    $("#neptune").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-uranus-info").click(function(){
    $("#uranus-info").fadeToggle(1000);
    $("#uranus").removeClass('orbit-color');

  });
  $("#neptune-nav").click(function(){
    $("#sun-info").fadeOut(1000);
    $("#mercury-info").fadeOut(1000);
    $("#venus-info").fadeOut(1000);
    $("#earth-info").fadeOut(1000);
    $("#mars-info").fadeOut(1000);
    $("#jupiter-info").fadeOut(1000);
    $("#saturn-info").fadeOut(1000);
    $("#uranus-info").fadeOut(1000);
    $("#neptune-info").fadeToggle(1000);
    $("#neptune").toggleClass('orbit-color')
    $("#mercury").removeClass('orbit-color');
    $("#venus").removeClass('orbit-color');
    $("#earth").removeClass('orbit-color');
    $("#mars").removeClass('orbit-color');
    $("#jupiter").removeClass('orbit-color');
    $("#saturn").removeClass('orbit-color');
    $("#uranus").removeClass('orbit-color');
    // $(".planets-navbar-toggle").click();
  });
  $(".close-neptune-info").click(function(){
    $("#neptune-info").fadeToggle(1000);
    $("#neptune").removeClass('orbit-color');

  });
});