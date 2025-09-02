const bookingBtn = document.getElementById("btnBook");
const exploreBtn = document.getElementById("btnExplore");
const cardTurkey = document.getElementById("cardTurkey");
const cardMalaysia = document.getElementById("cardMalaysia");

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
