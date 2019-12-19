var form = document.querySelector(".main-form");

var login = form.querySelector("[name=name]");
var weight = form.querySelector("[name=weight]");
var email = form.querySelector("[name=email]");
var tel = form.querySelector("[name=tel]");

form.addEventListener("submit", function(evt) {
  if (!login.value || !weight.value || !email.value || !tel.value) {
    evt.preventDefault();
    login.setAttribute("required", "");
    weight.setAttribute("required", "");
    email.setAttribute("required", "");
    tel.setAttribute("required", "");
  } else {
    login.removeAttribute("required");
    weight.removeAttribute("required");
    email.removeAttribute("required");
    tel.removeAttribute("required");
  }
})
