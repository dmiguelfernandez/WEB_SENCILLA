let btnPrev = document.querySelector(".slider_btn-prev");
let btnNext = document.querySelector(".slider_btn-next");
let sliders = document.querySelector(".slider_slides");
let articles = sliders.querySelectorAll(".slides__slide");

let sliderIndex = 0;

btnNext.addEventListener("click", () => {
  if (sliderIndex < articles.length - 1) {
    articles[sliderIndex].classList.remove("slides__slide--active");
    sliderIndex++;
    s;
    articles[sliderIndex].classList.add("slides__slide--active");
  } else {
    articles[sliderIndex].classList.remove("slides__slide--active");
    sliderIndex = 0;
    articles[sliderIndex].classList.add("slides__slide--active");
  }
});

btnPrev.addEventListener("click", () => {
  if (sliderIndex > 0) {
    articles[sliderIndex].classList.remove("slides__slide--active");
    sliderIndex--;
    articles[sliderIndex].classList.add("slides__slide--active");
  } else {
    articles[sliderIndex].classList.remove("slides__slide--active");
    sliderIndex = articles.length - 1;
    articles[sliderIndex].classList.add("slides__slide--active");
  }
});
