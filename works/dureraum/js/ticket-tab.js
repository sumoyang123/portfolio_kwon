const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // a

    tabContent.forEach((content) => {
      content.classList.remove("on");
    });

    tabItem.forEach((content) => {
      content.classList.remove("on");
    });

    tabItem[index].classList.add("on");
    tabContent[index].classList.add("on");
    tabContent[index].classList.add("top-opacity");
  });
});
