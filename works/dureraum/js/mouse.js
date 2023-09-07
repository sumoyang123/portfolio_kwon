gsap.set(".mouse__cursor", { xPercent: -40, yPercent: -430 });
gsap.set(".mouse__cursor2", { xPercent: -45, yPercent: -240 });

let xTo = gsap.quickTo(".mouse__cursor", "x", { ease: "power1" }),
  yTo = gsap.quickTo(".mouse__cursor", "y", { ease: "power1" });
let cursorX2 = gsap.quickTo(".mouse__cursor2", "x", { ease: "power1" }),
  cursorY2 = gsap.quickTo(".mouse__cursor2", "y", { ease: "power1" });

window.addEventListener("mousemove", (e) => {
  // xTo(e.pageX);
  // yTo(e.pageY);
  xTo(e.clientX);
  yTo(e.clientY);
  cursorX2(e.clientX);
  cursorY2(e.clientY);
});

// section.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     mouseCursor.classList.add("cursor_more");
//   });
//   link.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("cursor_more");
//   });
// });

var mouse__cursor = $(".mouse__cursor");

$("a, button, .cont_tit")
  .on("mouseenter", function () {
    mouse__cursor.addClass("active");
    $(".tabs a, .tab a, header, .quick, .date-wrap, footer, .breadcrumb, td, .filter_wrap, .sub_search, .swiper")
      .on("mouseenter", function () {
        mouse__cursor.addClass("tab");
      })
      .on("mouseleave", function () {
        mouse__cursor.removeClass("tab");
      });
  })
  .on("mouseleave", function () {
    mouse__cursor.removeClass("active");
  });

// $(window)
//   .resize(function () {
//     if (window.innerWidth >= 1080) {
//       // 다바이스 크기가 1080이상일때

//       /* 스크립트내용*/
//       $(".swiper2")
//         .on("mouseenter", function () {
//           mouse__cursor.addClass("drag");
//         })
//         .on("mouseleave", function () {
//           mouse__cursor.removeClass("drag");
//         });
//     } else {
//       /* 스크립트내용*/
//       $(".swiper")
//         .on("mouseenter", function () {
//           mouse__cursor.addClass("drag");
//         })
//         .on("mouseleave", function () {
//           mouse__cursor.removeClass("drag");
//         });
//     }
//   })
//   .resize();
