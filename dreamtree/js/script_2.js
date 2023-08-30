$(function(){
  $('.list-btn').find('li').mouseover(function(){
    $(this).addClass('hover');
  }).mouseout(function(){
    $(this).removeClass('hover');
    console.log(this);
  });
  $('.list-btn').find('li:nth-child(1)').click(function(){
    $('.experience-img').find('img').attr({
      src:'./img/experience_img.png',
      alt:'창의놀이터 3D공간'
    });
    $(".overlay-title").text("창의 놀이터");
    $(".overlay-explanation").text("논리적인 사고, 창의적 융합, 그리고 융합을 통한 창작활동을 통해서 미래세상 도전과제 해결의 토대가 되는 창의적 지식 탐구공간 입니다.");
  });
  $('.list-btn').find('li:nth-child(2)').click(function(){
    $('.experience-img').find('img').attr({
      src:'./img/experience2_img.png',
      alt:'과학은 해결사 3D공간'
    });
    $(".overlay-title").text("과학은 해결사");
    $(".overlay-explanation").text("미래를 향해 달려가는 현대의 착한 과학을 알아보면 우리가 원하는 미래세상을 위한 과학의 방향성을 탐구하는 공간입니다.");
  });
  $('.list-btn').find('li:nth-child(3)').click(function(){
    $('.experience-img').find('img').attr({
      src:'./img/experience3_img.png',
      alt:'나도 과학자 3D공간'
    });
    $(".overlay-title").text("나도 과학자");
    $(".overlay-explanation").text("탐구활동 중심의 다양한 전시물 체험을 통해 과학에 대한 고정관념을 깨고 과학적 시각을 키우며, 과학적 사고방식을 이해하는 공간입니다.");
  });
  $('.menu').find('li').mouseover(function(){
    $(this).css({
      'border-bottom':'2px solid #f2f2f2'
    }).mouseout(function(){
      $(this).css({
        'border-bottom':'none'
      });
    });
  });
  var idx_lgth = $('.slide>div').length;
  var srt = 1;
  $('.main-btn>li').click(function(){
    var idx = $(this).index();
    srt = idx;
    $(this).addClass('on').siblings().removeClass('on');
    $('.slide>div').eq(idx).addClass('on').siblings().removeClass('on');
    console.log(this);
  });
  setInterval(AutoRun, 3000);
  function AutoRun(){
    if(srt == idx_lgth){
      srt = 0;
    }
    $('.main-btn>li').eq(srt).addClass('on').siblings().removeClass('on');
    $('.slide>div').eq(srt).addClass('on').siblings().removeClass('on');
    srt++;
  };
  $('.sns-btn').click(function(){
    $(this).css({
      display:'none'
    });
    $('.sns-img-wrap').css({
      overflow:'visible'
    });
    $('.sns').css({
      height:1661
    });
  });
////////////////////////////////////////////
});
