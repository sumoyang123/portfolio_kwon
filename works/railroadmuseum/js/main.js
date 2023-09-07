$(function(){

  //비주얼변경
  function visualstart(){
    $(".visual_item").eq(0).siblings().fadeOut();
    setInterval(function(){visualtr();},3000);
  }
  var now = 0;
  function visualtr(){
    now = now == 2 ? 0 :now += 1;
    $(".visual_item").eq(now-1).fadeOut();
    $(".visual_item").eq(now).fadeIn();
  }
  visualstart();

  //상설전시
  let $now = 1201;

  $('.exhibit_slidearea').prepend($('.exhibit_slidearea li:last-child')).css({'margin-left':$('.exhibit_slidewrap').width() - 1666});

  $('.btn_next').click(function(){
    $now++;
    $('.exhibit_text li').addClass('off');

    if(($now % 4) == 1){
      $('.exhibition_bg').css({"background-image": "url(img/exhibitbg01.jpg)"});
      $('.exhibit_text li:nth-child(1)').removeClass('off');
    }else if(($now % 4) == 2){
      $('.exhibition_bg').css({"background-image": "url(img/exhibitbg02.jpg)"});
      $('.exhibit_text li:nth-child(2)').removeClass('off');
    }else if(($now % 4) == 3){
      $('.exhibition_bg').css({"background-image": "url(img/exhibitbg03.jpg)"});
      $('.exhibit_text li:nth-child(3)').removeClass('off');
    }else {
      $('.exhibition_bg').css({"background-image": "url(img/exhibitbg04.jpg)"});
      $('.exhibit_text li:nth-child(4)').removeClass('off');
    }

    $('.exhibit_slidearea').animate({'margin-left': $('.exhibit_slidewrap').width() - 2499},500,function(){
      $('.exhibit_slidearea').append($('.exhibit_slidearea li:first-child')).css({'margin-left':$('.exhibit_slidewrap').width() - 1666});
    });
  });
  $('.btn_prev').click(function(){
    $now--;
    $('.exhibit_text li').addClass('off');

    if(($now % 4) == 1){
      $('.exhibition_bg').css({"background-image": "url(img/exhibitbg01.jpg)"});
      $('.exhibit_text li:nth-child(1)').removeClass('off');
    }else if(($now % 4) == 2){
      $('.exhibition_bg').css({"background-image": "url(img/exhibitbg02.jpg)"});
      $('.exhibit_text li:nth-child(2)').removeClass('off');
    }else if(($now % 4) == 3){
      $('.exhibition_bg').css({"background-image": "url(img/exhibitbg03.jpg)"});
      $('.exhibit_text li:nth-child(3)').removeClass('off');
    }else {
      $('.exhibition_bg').css({"background-image": "url(img/exhibitbg05.jpg)"});
      $('.exhibit_text li:nth-child(4)').removeClass('off');
    }

    $('.exhibit_slidearea').animate({'margin-left':$('.exhibit_slidewrap').width() - 833},500,function(){
      $('.exhibit_slidearea').prepend($('.exhibit_slidearea li:last-child')).css({'margin-left':$('.exhibit_slidewrap').width() - 1666});
    });
  });

  //소장유물
  $('.slide_archive').slick({
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    draggable:false
  });

  //슬라이드 개수 지정(초기)
  function slide_number(){
    //전체 슬라이드 개수 세팅
    let $totalnum = $('#main_archive .slide_item').length;
    let $clonenum = $('#main_archive .slick-cloned').length;
    let $realnum = $totalnum - $clonenum; 
    //console.log($realnum);

    //각 슬라이드 번호 세팅
    let $datanum = $('.slick-current').attr("data-slick-index");
    let $currentnum = Number($datanum) + 1;   
    //console.log($datanum);
    //console.log($currentnum + '/' + $realnum);
    $('#main_archive .slide_num').append($currentnum + '/' + $realnum);
  }
  slide_number();
  //슬라이드 업데이트 개수변경
  $('#main_archive button').click(function(){
    let $currentslidenum = Number($('#main_archive .slick-current').attr("data-slick-index")) + 1;
    let $totalslidenum = $('#main_archive .slide_item').length - $('#main_archive .slick-cloned').length;
    let $finaltext = $currentslidenum + '/' + $totalslidenum;
    //console.log($finaltext);
  
    $('#main_archive .slide_num').text($finaltext);
  });

});