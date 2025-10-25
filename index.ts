const bookingBtn = document.getElementById('btnBook');
const exploreBtn = document.getElementById('btnExplore');
const cardTurkey = document.getElementById('cardTurkey');
const cardMalaysia = document.getElementById('cardMalaysia');
const cardSeul = document.getElementById('cardSeul');

// Обработка по кнопкам в хедере
bookingBtn: html.addEventListener('click', function () {
  alert(
    'Заявка на бронирование принята! Мы свяжемся с вами в ближайшее время.'
  );
});

exploreBtn.addEventListener('click', function () {
  alert('Больше информации на отдельной форме');
});

// Перенаправление по карточкам
cardTurkey.addEventListener('click', function () {
  const userConfirmed = confirm(
    'Вы будете перенаправлены на сайт для заказа билетов. Перейти?'
  );
  if (userConfirmed) {
    window.location.href = 'https://www.tez-tour.com/';
  } else {
    alert('Перенаправление отменено');
  }
});

cardMalaysia.addEventListener('click', function () {
  const userConfirmed = confirm(
    'Вы будете перенаправлены на сайт для заказа билетов. Перейти?'
  );
  if (userConfirmed) {
    window.location.href = 'https://www.malaysia.travel/';
  } else {
    alert('Перенаправление отменено');
  }
});

cardSeul.addEventListener('click', function () {
  const userConfirmed = confirm(
    'Вы будете перенаправлены на сайт для заказа билетов. Перейти?'
  );
  if (userConfirmed) {
    window.location.href = 'https://www.aviasales.by/countries/south-korea-kr';
  } else {
    alert('Перенаправление отменено');
  }
});

// Slider

const slider = document.getElementById('slider-container');
const btnLeft = document.getElementById('slide-left');
const btnRight = document.getElementById('slide-right');

// Ширина одной карточки + gap между карточками (gap: 6, значит 1.5rem * 16 = 24px)
const cardWidth = 262;
const gap = 24;
const slideWidth = cardWidth + gap;

let currentPosition = 0;

btnRight.addEventListener('click', () => {
  // Максимально допустимый сдвиг, чтобы не уйти за край
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  currentPosition = Math.min(currentPosition + slideWidth, maxScroll);
  slider.style.transform = `translateX(-${currentPosition}px)`;
});

btnLeft.addEventListener('click', () => {
  currentPosition = Math.max(currentPosition - slideWidth, 0);
  slider.style.transform = `translateX(-${currentPosition}px)`;
});

// Cards

// sdfsdf
document.addEventListener('DOMContentLoaded', function () {
  // Получаем главную карточку
  const mainCard = document.getElementById('mainCard');

  // Получаем все маленькие карточки
  const otherCards = document.querySelectorAll('.other-card');

  // Добавляем обработчик клика на каждую маленькую карточку
  otherCards.forEach((card) => {
    card.addEventListener('click', function () {
      // Создаем временный контейнер для хранения содержимого главной карточки
      const tempContent = document.createElement('div');
      tempContent.innerHTML = mainCard.innerHTML;

      // Заменяем содержимое главной карточки содержимым выбранной маленькой карточки
      // Но адаптируем его к структуре главной карточки
      const otherImg = this.querySelector('img').src;
      const otherTitle = this.querySelector('h4').textContent;
      const otherDesc = this.querySelector('p').textContent;
      const otherLink = this.querySelector('a').textContent;

      // Обновляем главную карточку
      mainCard.querySelector('img').src = otherImg;
      mainCard.querySelector('h4').textContent = otherTitle;
      mainCard.querySelector('p').textContent = otherDesc;
      mainCard.querySelector('a').textContent = otherLink;

      // Обновляем маленькую карточку данными из главной карточки
      this.querySelector('img').src = tempContent.querySelector('img').src;
      this.querySelector('h4').textContent =
        tempContent.querySelector('h4').textContent;
      this.querySelector('p').textContent =
        tempContent.querySelector('p').textContent;
      this.querySelector('a').textContent =
        tempContent.querySelector('a').textContent;

      // Добавляем анимацию для визуального feedback
      mainCard.classList.add('ring-2', 'ring-blue-500');
      this.classList.add('ring-2', 'ring-gray-400');

      // Убираем выделение через короткое время
      setTimeout(() => {
        mainCard.classList.remove('ring-2', 'ring-blue-500');
        this.classList.remove('ring-2', 'ring-gray-400');
      }, 500);
    });
  });
});
// sdfsdf
