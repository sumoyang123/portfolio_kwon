$(function(){
  $('.menu').find('li').mouseover(function(){
    $(this).css({
      'border-bottom':'2px solid #1d1d1d'
    }).mouseout(function(){
      $(this).css({
        'border-bottom':'none'
      });
    });
  });
//////////////////////////////////////////////////////////////  
});