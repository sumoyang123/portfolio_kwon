$(function(){

  // 메뉴 슬라이드다운
  $('.main_menu > li').mouseover(function(){
    $('.submenu_bg').stop().slideDown();
    $('.sub_menu').stop().slideDown();
  }).mouseout(function(){
    $('.submenu_bg').stop().slideUp(1000);
    $('.sub_menu').stop().slideUp(1000);
  });
  // 사이트맵 보이기
  $('.btn_sitemap').click(function(){
    $('.sitemap').fadeIn();
  });
  $('.btn_closemap').click(function(){
    $('.sitemap').fadeOut();
  });
});