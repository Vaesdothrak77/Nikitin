const images = document.querySelectorAll(".slider");
const sliderImg = document.querySelectorAll(".slide");
const sliderLine = document.querySelector(".slider-line");

let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * sliderImg.length + "px";
  sliderImg.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
}

window.addEventListener("resize", init);
init();

document.querySelector(".button-next").addEventListener("click", function () {
  count++;
  if (count >= sliderImg.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector(".button-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = sliderImg.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

// Находим все элементы с классом "reviews-img"
var imagees = document.querySelectorAll(".reviews-img");

// Находим модальное окно и его содержимое
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

// Добавляем обработчики событий для открытия и закрытия модального окна
imagees.forEach(function (image) {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

var close = document.querySelector(".close");
close.addEventListener("click", function () {
  modal.style.display = "none";
});

// Закрываем модальное окно, если пользователь кликает вне его
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// JavaScript для плавной прокрутки от кнопки до контейнера с курсами

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn__header");
  const buttons = document.querySelectorAll(".anchor__btn");
  const container = document.querySelector(".cards__container");

  if (button && container) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      let containerPosition = container.offsetTop;

      // Плавная анимация прокрутки с заданной скоростью (2 секунды)
      scrollSmoothly(containerPosition, 2000);
    });
  }

  if (buttons.length > 0 && container) {
    buttons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();

        let containerPosition = container.offsetTop;

        // Плавная анимация прокрутки с заданной скоростью (2 секунды)
        scrollSmoothly(containerPosition, 2000);
      });
    });
  }

  function scrollSmoothly(targetPosition, duration) {
    let start = window.scrollY;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let scrollY = easeInOutQuad(
        progress,
        start,
        targetPosition - start,
        duration
      );
      window.scrollTo(0, scrollY);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
});

// Видео с ютуб
document.addEventListener("DOMContentLoaded", function () {
  const playVideoButton = document.getElementById("playVideo");
  const closeVideoButton = document.getElementById("closeVideo");
  const youtubeIframe = document.getElementById("youtube-iframe");

  if (playVideoButton && closeVideoButton && youtubeIframe) {
    playVideoButton.addEventListener("click", function () {
      let newSrc =
        "https://www.youtube.com/embed/cIEBtxVOVmM?si=FlxJ_348D1kPcdF-";
      youtubeIframe.src = newSrc;

      youtubeIframe.style.display = "block";
      closeVideoButton.style.display = "block";
      playVideoButton.style.display = "none";
    });

    closeVideoButton.addEventListener("click", function () {
      youtubeIframe.style.display = "none";
      closeVideoButton.style.display = "none";
      playVideoButton.style.display = "block";

      youtubeIframe.src = "";
    });
  }
});

// Находим все якорные ссылки на странице
var anchorLinks = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик события для каждой ссылки
anchorLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки

    var targetId = this.getAttribute("href").substring(1); // Получаем id цели
    var targetElement = document.getElementById(targetId); // Находим целевой элемент

    if (targetElement) {
      // Используем метод scrollIntoView для плавной прокрутки
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Модалка с отзывами и сертами
var imagesData = [{ id: "image1", position: 0 }];

// Находим модальное окно и его содержимое
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");

// Добавляем обработчики событий для открытия модального окна
imagesData.forEach(function (imageData) {
  var image = document.getElementById(imageData.id);
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;

    // Устанавливаем положение модального окна в соответствии с позицией изображения
    var position = imageData.position;
    var slideWidth = document.querySelector(".swiper-slide").offsetWidth;
    modal.style.left = position * slideWidth + "px";
  });
});

// Добавляем обработчик события для закрытия модального окна
var close = document.querySelector(".close");
close.addEventListener("click", function () {
  modal.style.display = "none";
});

// Закрываем модальное окно, если пользователь кликает вне его
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Слайдер
let mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 3, // Устанавливаем количество слайдов на экране
  spaceBetween: 5, // Устанавливаем расстояние между слайдами
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    667: {
      slidesPerView: 2,
    },
    684: {
      slidesPerView: 2,
    },
    734: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 1,
    },
  },
  // Добавляем свайп для сенсорных экранов
  touch: true,
  // Эмулируем свайп мышкой при мелких разрешениях
  simulateTouch: true,
  // Определяем чувствительность свайпа мышкой
  touchRatio: 0.2, // Можете изменить это значение по вашему усмотрению
});





document.addEventListener("DOMContentLoaded", function () {
  const helpButton = document.getElementById("helpButton");
  const modal = document.getElementById("modalHelp");
  const closeButton = document.getElementById("closeButton");

  helpButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Находим элементы по их id
var openModalButton = document.getElementById("openModalButton");
var modalHelp = document.getElementById("modalHelp");
var closeButton = document.getElementById("closeButton");

// Добавляем обработчик события для открытия модального окна
openModalButton.addEventListener("click", function () {
  modalHelp.style.display = "block";
});

// Добавляем обработчик события для закрытия модального окна
closeButton.addEventListener("click", function () {
  modalHelp.style.display = "none";
});

