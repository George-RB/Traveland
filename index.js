const bookingBtn = document.getElementById("btnBook");
const exploreBtn = document.getElementById("btnExplore");
const cardTurkey = document.getElementById("cardTurkey");
const cardMalaysia = document.getElementById("cardMalaysia");
const cardSeul = document.getElementById("cardSeul");

// Обработка по кнопкам в хедере
bookingBtn.addEventListener("click", function () {
  alert(
    "Заявка на бронирование принята! Мы свяжемся с вами в ближайшее время."
  );
});

exploreBtn.addEventListener("click", function () {
  alert("Больше информации на отдельной форме");
});

// Перенаправление по карточкам
cardTurkey.addEventListener("click", function () {
  const userConfirmed = confirm(
    "Вы будете перенаправлены на сайт для заказа билетов. Перейти?"
  );
  if (userConfirmed) {
    window.location.href = "https://www.tez-tour.com/";
  } else {
    alert("Перенаправление отменено");
  }
});

cardMalaysia.addEventListener("click", function () {
  const userConfirmed = confirm(
    "Вы будете перенаправлены на сайт для заказа билетов. Перейти?"
  );
  if (userConfirmed) {
    window.location.href = "https://www.malaysia.travel/";
  } else {
    alert("Перенаправление отменено");
  }
});

cardSeul.addEventListener("click", function () {
  const userConfirmed = confirm(
    "Вы будете перенаправлены на сайт для заказа билетов. Перейти?"
  );
  if (userConfirmed) {
    window.location.href = "https://www.aviasales.by/countries/south-korea-kr";
  } else {
    alert("Перенаправление отменено");
  }
});

// Slider

const slider = document.getElementById("slider-container");
const btnLeft = document.getElementById("slide-left");
const btnRight = document.getElementById("slide-right");

// Ширина одной карточки + gap между карточками (gap: 6, значит 1.5rem * 16 = 24px)
const cardWidth = 262;
const gap = 24;
const slideWidth = cardWidth + gap;

let currentPosition = 0;

btnRight.addEventListener("click", () => {
  // Максимально допустимый сдвиг, чтобы не уйти за край
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  currentPosition = Math.min(currentPosition + slideWidth, maxScroll);
  slider.style.transform = `translateX(-${currentPosition}px)`;
});

btnLeft.addEventListener("click", () => {
  currentPosition = Math.max(currentPosition - slideWidth, 0);
  slider.style.transform = `translateX(-${currentPosition}px)`;
});
