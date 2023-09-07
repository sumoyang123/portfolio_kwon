$(function () {
  $(".depth1-li").mouseover(function () {
    $(".depth2").removeClass("on");
    $("header").addClass("on");
    $(this).find(".depth2").addClass("on");
  });
  $(".depth1").mouseleave(function () {
    $(".depth2").mouseleave(function () {
      $("header").removeClass("on");
      $(".depth2").removeClass("on");
    });
  });

  $(".search").click(function () {
    if ($(".header_search").hasClass("active")) {
      $(".header_search").removeClass("active");
    } else {
      $(".header_search").addClass("active");
    }
  });
  $(".allmenu").click(function () {
    if ($(".header_sitemap").hasClass(".active")) {
      $(".header_sitemap").removeClass("active");
    } else {
      $(".header_sitemap").addClass("active");
    }
  });
  $(".close").click(function () {
    $(".header_sitemap").removeClass("active");
  });

  $(window)
    .resize(function () {
      if (window.innerWidth >= 768) {
        // 다바이스 크기가 480이상일때

        /* 스크립트내용*/
        $(window).scroll(function () {
          var scrollValue = $(document).scrollTop();
          // console.log(scrollValue);
          if (scrollValue >= "2200") {
            // 스크롤 2200 이상 ~ 5번째
            $(".facility-item:nth-child(5)").addClass("top-opacity");
          } else if (scrollValue >= "1500") {
            // 스크롤 1800 ~ 2400 4번째
            $(".facility-item:nth-child(4)").addClass("top-opacity");
          } else if (scrollValue >= "800") {
            // 스크롤 800 ~ 1500 3번째
            $(".facility-item:nth-child(3)").addClass("top-opacity");
          } else if (scrollValue >= "300") {
            // 스크롤 300 ~ 800 2번째
            $(".facility-item:nth-child(2)").addClass("top-opacity");
          }
        });
      } else {
        /* 스크립트내용*/
        $(window).scroll(function () {
          var scrollValue = $(document).scrollTop();
          // console.log(scrollValue);
          if (scrollValue >= "3000") {
            // 스크롤 3000 이상 ~ 5번째
            $(".facility-item:nth-child(5)").addClass("top-opacity");
          } else if (scrollValue >= "2600") {
            // 스크롤 2600 ~ 4번째
            $(".facility-item:nth-child(4)").addClass("top-opacity");
          } else if (scrollValue >= "1800") {
            // 스크롤 1800 ~ 3번째
            $(".facility-item:nth-child(3)").addClass("top-opacity");
          } else if (scrollValue >= "1000") {
            // 스크롤 1000 ~ 2번째
            $(".facility-item:nth-child(2)").addClass("top-opacity");
          }
        });
      }
    })
    .resize();

  // 소식 섹션
  // 타이틀 변수
  let itemTit1 = $(".gallery-item:nth-child(1)").find(".tit"),
    itemTit2 = $(".gallery-item:nth-child(2)").find(".tit"),
    itemTit3 = $(".gallery-item:nth-child(3)").find(".tit");
  // 날짜 변수
  let imgbox1 = $(".gallery-item:nth-child(1)").find(".gallery_img"),
    imgbox2 = $(".gallery-item:nth-child(2)").find(".gallery_img"),
    imgbox3 = $(".gallery-item:nth-child(3)").find(".gallery_img");
  // 이미지 변수
  let itemImg1 = $(".gallery-item:nth-child(1)").find("img"),
    itemImg2 = $(".gallery-item:nth-child(2)").find("img"),
    itemImg3 = $(".gallery-item:nth-child(3)").find("img");

  // detach
  let Img1, Img2, Img3;

  $(".notice").click(function () {
    if ($(".gallery-wrap").hasClass("ani-news")) {
      $(".gallery-wrap").removeClass("ani-news");
    }
    // 애니메이션
    $(".gallery-wrap").addClass("ani-news");
    // 클래스명
    $(".tabs").find("a").removeClass("on");
    $(".tabs").find(".notice").addClass("on");
    // 본문 내용 변경
    itemTit1.text("[공지]8월 25일 주차관련 안내");
    Img1 = itemImg1.detach();
    itemTit2.text("[공지]8월 10일~12일 행사관련 출입 안내");
    Img2 = itemImg2.detach();
    itemTit3.text("[공연]조희창의 클래식 북살롱 콘서트 <흘러라, 눈물이여> 공연 태풍 카눈 북상에 따른 순연 안내");
    Img3 = itemImg3.detach();
  });
  $(".report").click(function () {
    if ($(".gallery-wrap").hasClass("ani-news")) {
      $(".gallery-wrap").removeClass("ani-news");
    }
    // 애니메이션
    $(".gallery-wrap").addClass("ani-news");
    $(".tabs").find("a").removeClass("on");
    $(".tabs").find(".report").addClass("on");
    itemTit1.text("영화로 떠나는 일상 속 특별한 여행");
    imgbox1.append(Img1);
    itemImg1.attr("src", "img/main-article01.jpg");
    itemTit2.text("제 7회 부산 인터시티 영화제 개막");
    imgbox2.append(Img2);
    itemImg2.attr("src", "img/main-article02.jpg");
    itemTit3.text("어린이대공원에서 ‘찾아가는 영화관’ 성공적 개최");
    imgbox3.append(Img3);
    itemImg3.attr("src", "img/main-article03.jpg");
  });
  $(".gall").click(function () {
    if ($(".gallery-wrap").hasClass("ani-news")) {
      $(".gallery-wrap").removeClass("ani-news");
    }
    // 애니메이션
    $(".gallery-wrap").addClass("ani-news");
    $(".tabs").find("a").removeClass("on");
    $(".tabs").find(".gall").addClass("on");
    itemTit1.text("무대인사 <여교사>");
    imgbox1.append(Img1);
    itemImg1.attr("src", "img/main-gallery1.jpg");
    itemTit2.text("1월 팝콘톡톡 플러스 <요요마와 실크로드 앙상블>");
    imgbox2.append(Img2);
    itemImg2.attr("src", "img/main-gallery2.jpg");
    itemTit3.text("부산국제영화제 20주년 기념 시네마 음악회");
    imgbox3.append(Img3);
    itemImg3.attr("src", "img/main-gallery3.jpg");
  });
});

$(".date-wrap li").click(function () {
  $(".date-wrap li").removeClass("select");
  $(this).addClass("select");
});
