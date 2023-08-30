$(document).ready(function(){
  $(".question > li").click(function(){
    $(this).find(".answer").slideDown(1000);
  });
  $(".question > li,.answer").mouseout(function(){
    $(".answer").slideUp(1000);
  });


  $(".q").click(function(){
    $(this).next(".a").slideToggle();
    $(this).find("i:nth-child(4)").toggle();
    $(this).find("i:nth-child(3)").toggle();
  });

  $("header > i").click(function(){
    $("header nav").slideDown();
  });
  $("header nav > i").click(function(){
    $("header nav").slideUp();
  });
});