const sliderLine = document.querySelector('.layout-1-column');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const sliderIndicators = document.querySelectorAll('.indicator');
const sliderCard = document.querySelector('.favCoffee__card');
const sliderCards = document.querySelectorAll('.favCoffee__card');
let windowWidth;

let position = 0;
let sliderIndex = 0;

// Check width window and slider card
function initWindowWidth() {
  windowWidth = window.innerWidth;
  if (windowWidth < 650) {
    touchMoveSlider(); // включается мониторинг прикосновений к дисплею
  }
}
window.addEventListener('resize', initWindowWidth); //check change window width
initWindowWidth();

//Functions move slider

const nextSlide = () => {
  if (windowWidth >= 515) {
    if (position < 960) {
      position += 480;
      sliderIndex++;
    } else {
      position = 0;
      sliderIndex = 0;
    }
  } else {
    if (position < 696) {
      position += 348;
      sliderIndex++;
    } else {
      position = 0;
      sliderIndex = 0;
    }
  }
  sliderLine.style.left = -position + 'px';
  thisSlide(sliderIndex);
};

const prevSlide = () => {
  if (windowWidth >= 515) {
    if (position > 0) {
      position -= 480;
      sliderIndex--;
    } else {
      position = 960;
      sliderIndex = 2;
    }
  } else {
    if (position > 0) {
      position -= 348;
      sliderIndex--;
    } else {
      position = 696;
      sliderIndex = 2;
    }
  }
  sliderLine.style.left = -position + 'px';
  thisSlide(sliderIndex);
};

//Слайдер Индекс меняет цвет
const thisSlide = (index) => {
  for (let indicator of sliderIndicators) {
    indicator.classList.remove('indicator__progress');
  }
  sliderIndicators[index].classList.add('indicator__progress');
};

//EventListeners

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

//SetInterval

setInterval(() => {
  nextSlide();
}, 7000);

function touchMoveSlider() {
  let x1 = null;
  let y1 = null;

  function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  }

  function handleTouchMove(event) {
    if (!x1 || !y1) {
      return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    x1 = null;
    y1 = null;
  }

  sliderCards.forEach((card) => {
    card.addEventListener('touchstart', handleTouchStart);
    card.addEventListener('touchmove', handleTouchMove);
  });
}

touchMoveSlider();
