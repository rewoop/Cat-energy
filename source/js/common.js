var catalogBtn = document.querySelectorAll(".catalog-list__order-btn");
var moreBtn = document.querySelector(".show-more__show-btn");
var goodsBtn = document.querySelectorAll(".additional-goods__order-btn");


for (var i = 0; i < catalogBtn.length; i++) {
  catalogBtn[i].addEventListener("click", function openPopup(evt) {
    evt.preventDefault();
    alert("Модальное окно оформление заказа");
  })
}

moreBtn.addEventListener("click", function getProducts(evt) {
  evt.preventDefault();
  alert("Идет загрузка новых товаров");
})

for (var i = 0; i < goodsBtn.length; i++) {
  goodsBtn[i].addEventListener("click", function openPopup(evt) {
    evt.preventDefault();
    alert("Модальное окно оформление заказа");
  })
}
