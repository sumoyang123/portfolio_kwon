$(function(){

  /* 헤더 */
  if($('header').hasClass('page_top')){
    $('h1 img').attr({src:'img/logo_white.png'});
  }else{
    $('h1 img').attr({src:'img/logo.png'});
  }
  $('header').mouseover(function(){
    $('header').removeClass('page_top');
    if($('header').hasClass('page_top')){
      $('h1 img').attr({src:'img/logo_white.png'});
    }else{
      $('h1 img').attr({src:'img/logo.png'});
    }
  }).mouseout(function(){
    $('header').addClass('page_top');
    if($('header').hasClass('page_top')){
      $('h1 img').attr({src:'img/logo_white.png'});
    }else{
      $('h1 img').attr({src:'img/logo.png'});
    }
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $('header').removeClass('page_top');
      if($('header').hasClass('page_top')){
        $('h1 img').attr({src:'img/logo_white.png'});
      }else{
        $('h1 img').attr({src:'img/logo.png'});
      }
    }else{
      $('header').addClass('page_top');
      if($('header').hasClass('page_top')){
        $('h1 img').attr({src:'img/logo_white.png'});
      }else{
        $('h1 img').attr({src:'img/logo.png'});
      }
      $('header').mouseover(function(){
        $('header').removeClass('page_top');
        if($('header').hasClass('page_top')){
          $('h1 img').attr({src:'img/logo_white.png'});
        }else{
          $('h1 img').attr({src:'img/logo.png'});
        }
      }).mouseout(function(){
        $('header').addClass('page_top');
        if($('header').hasClass('page_top')){
          $('h1 img').attr({src:'img/logo_white.png'});
        }else{
          $('h1 img').attr({src:'img/logo.png'});
        }
      });
    }
  });
  $('header').mouseover(function(){
    $('header').removeClass('page_top');
  }).mouseout();

  /* 내비 */
  $('.depth1').mouseover(function(){
    $(this).children().addClass('show').show();
  }).mouseout(function(){
    $(this).children().removeClass('show');
    $(this).children().not('a.on').hide();
  });

  $('.depth2').mouseover(function(){
    let $curdth1 = $('.depth1 a.on');
    //console.log($curdth1);
    if($curdth1.hasClass('info_sub')){
      $(this).find('.info_sub').show().addClass('show');
    }else if($curdth1.hasClass('exhib_sub')){
      $(this).find('.exhib_sub').show().addClass('show');
    }else if($curdth1.hasClass('arch_sub')){
      $(this).find('.arch_sub').show().addClass('show');
    }else if($curdth1.hasClass('not_sub')){
      $(this).find('.not_sub').show().addClass('show');
    }else{$(this).find('.mus_sub').show().addClass('show');}
  }).mouseout(function(){
    $(this).children().removeClass('show');
    $(this).children().not('a.on').hide();
  });

  $('.depth1 a').click(function(){
    $(this).siblings().removeClass('on').addClass('off');
    $(this).addClass('on');
    $(this).siblings().not('a.on').hide();
    let $curdth1 = $('.depth1 a.on');
    $('.depth2 a.on').removeClass('on').addClass('off').hide();

    if($curdth1.hasClass('info_sub')){
      $('.depth2').find('.info_top').show().addClass('on');
    }else if($curdth1.hasClass('exhib_sub')){
      $('.depth2').find('.exhib_top').show().addClass('on');
    }else if($curdth1.hasClass('arch_sub')){
      $('.depth2').find('.arch_top').show().addClass('on');
    }else if($curdth1.hasClass('not_sub')){
      $('.depth2').find('.not_top').show().addClass('on');
    }else{$('.depth2').find('.mus_top').show().addClass('on');}
  });
});