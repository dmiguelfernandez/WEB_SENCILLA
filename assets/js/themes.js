let theme_green = document.querySelector(".theme_green");
let theme_blue = document.querySelector(".theme_blue");
let theme_red = document.querySelector(".theme_red");

let page = document.querySelector("html");

theme_red.addEventListener("click", () => {
  page.removeAttribute("class");
  page.classList.add("page-red");
});

theme_blue.addEventListener("click", () => {
  page.removeAttribute("class");
  page.classList.add("page-blue");
});

theme_green.addEventListener("click", () => {
  page.removeAttribute("class");
  page.classList.add("page-green");
});
