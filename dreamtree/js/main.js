$(function(){
  // if($(window).width() <= 1100) {
  //   // window 크기가 1100보다 작을때
  //   //  메인 슬라이드
  //   var timer = setInterval(function(){$('.main').css({'background':'url(../img/mainvisual_mobile_01.jpg)'})},3000);
  //   var timer = setInterval(function(){$('.main').css({'background':'url(../img/mainvisual_mobile_02.jpg)'})},6000);
  //   var timer = setInterval(function(){$('.main').css({'background':'url(../img/mainvisual_mobile_03.jpg)'})},9000);
  //   // 버튼 클릭 시 배경 변경
  //   $('.slide1').click(function(){
  //     $('.main').css({'background':'url(../img/mainvisual_mobile_01.jpg)'});
  //   });
  //   $('.slide2').click(function(){
  //     $('.main').css({'background':'url(../img/mainvisual_mobile_02.png)'});
  //   });
  //   $('.slide3').click(function(){
  //     $('.main').css({'background':'url(../img/mainvisual_mobile_03.jpg)'});
  //   });
  //   } else {
  //   // window 크기가 1100보다 클때

  // }
      //  메인 슬라이드
      var timer = setInterval(function(){
        $('.main').css({
          'background':'url(../img/mainslide_visual_01.jpg)',
          'background-position':'center'
        })},3000);
      var timer = setInterval(function(){$('.main').css({
        'background':'url(../img/mainslide_visual_02.png)',
        'background-position':'center'
      })},6000);
      var timer = setInterval(function(){$('.main').css({
        'background':'url(../img/mainslide_visual_03.jpg)',
        'background-position':'center'
      })},9000);
      // 버튼 클릭 시 배경 변경
      $('.slide1').click(function(){
        $('.main').css({
          'background':'url(../img/mainslide_visual_01.jpg)',
          'background-position':'center'
        });
      });
      $('.slide2').click(function(){
        $('.main').css({
          'background':'url(../img/mainslide_visual_02.png)',
          'background-position':'center'
        });
      });
      $('.slide3').click(function(){
        $('.main').css({
          'background':'url(../img/mainslide_visual_03.jpg)',
          'background-position':'center'
        });
      });
  // list 호버 시 이미지 변경
  $('.list1').click(function(){
    $('.experience-img').css({'background-image':'url(../img/experence_playground.png)'});
    $('.overlay-main').text("창의 놀이터");
    $('.overlay').find('p:nth-child(2)').text("논리적인 사고, 창의적 융합, 그리고 융합을 통한 창작활동을 통해서 미래세상 도전과제 해결의 토대가 되는 창의적 지식 탐구공간입니다.")
  });
  $('.list2').click(function(){
    $('.experience-img').css({'background-image':'url(../img/experence_science.png)'});
    $('.overlay-main').text("과학은 해결사");
    $('.overlay').find('p:nth-child(2)').text("미래를 향해 달려가는 현대의 과학을 알아보며 우리가 원하는 미래 세상을 위한 과학의 방향성을 탐구하는 교육공간입니다.")
  });
  $('.list3').click(function(){
     $('.experience-img').css({'background-image':'url(../img/experence_nature.jpg)'});
     $('.overlay-main').text("자연과 사람");
     $('.overlay').find('p:nth-child(2)').text("자연숲길과 수족관을 통해 자연생태계를 직접 관찰, 체험함으로써 지구와 물의 상호작용을 이해하는 공간입니다.")
  });
   
});