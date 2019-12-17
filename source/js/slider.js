var mobileSize = window.matchMedia("(max-width: 767px)");
var beforePic = document.querySelector(".before-after__image--before-mobile");
var afterPic = document.querySelector(".before-after__image--after-mobile");

var beforeBtn = document.querySelector(".before-after__btn[name=before]");
var afterBtn = document.querySelector(".before-after__btn[name=after]");
var switchBtn = document.querySelector(".before-after__switch");

if (mobileSize.matches) {
  afterBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    beforePic.style.display = "none";
    afterPic.style.display = "block";
    switchBtn.style.margin = "0 0 0 auto";
  });
  beforeBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    beforePic.style.display = "block";
    afterPic.style.display = "none";
    switchBtn.style.margin = "0 auto 0 0";
  });
} else {
  // СЮДА ВСТАВИТЬ СКРИПТ ДЛЯ ПЛАНШЕТА И ДЕСКТОПА
}
