var menu = document.querySelector("#menu-bar");
var navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  menu.classList.add("fa-times");
  menu.classList.toggle("fa-bars");
  navbar.classList.toggle('active');
});

let slides = document.querySelectorAll(".slider-content");
let index = 0;

let next = document.querySelector("#next");

next.addEventListener("click", function () {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
});

let prev = document.querySelector("#prev");

prev.addEventListener("click", function () {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
});