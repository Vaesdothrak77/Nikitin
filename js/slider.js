const imagesAdvice = document.querySelectorAll(".slider-advice");
const sliderImgAdvice = document.querySelectorAll(".slide-advice");
const sliderLineAdvice = document.querySelector(".slider__line-advice");

let counts = 0;
let widthh;

function inits() {
  widthh = document.querySelector(".slider-advice").offsetWidth;
  sliderLineAdvice.style.width = widthh * sliderImgAdvice.length + "px";
  sliderImgAdvice.forEach((item) => {
    item.style.width = widthh + "px";
    item.style.height = "auto";
  });
}

window.addEventListener("resize", inits);
inits();

document.querySelector(".button-next__advice").addEventListener("click", function () {
  counts++;
  if (counts >= 3) {
    counts = 0;
  }
  rollSliders();
});

document.querySelector(".button-prev__advice").addEventListener("click", function () {
  counts--;
  if (counts < 0) {
    counts = 2;
  }
  rollSliders();
});

function rollSliders() {
  if (counts >= sliderImgAdvice.length) {
    counts = 0;
  }
  sliderLineAdvice.style.transform = "translate(-" + counts * widthh + "px)";
}








