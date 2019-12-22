var list = document.querySelector(".site-list");
var toggle = document.querySelector(".page-header__toggle");
var burger = document.querySelector(".page-header__toggle-image--burger");
var cross = document.querySelector(".page-header__toggle-image--cross");
var mobileSize = window.matchMedia("(max-width: 767px)");

if (mobileSize.matches) {
  toggle.style.display = "block";
  list.style.display = "none";
} else {
  list.style.display = "flex";
}

burger.addEventListener("click", function(evt) {
  evt.preventDefault();
  list.style.display = "flex";
  burger.style.display = "none";
  cross.style.display = "block";
})

cross.addEventListener("click", function(evt) {
  evt.preventDefault();
  list.style.display = "none";
  cross.style.display = "none";
  burger.style.display = "block";
})
