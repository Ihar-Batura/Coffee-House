const cardsList = document.querySelectorAll('.coffee__card');
const buttonsList = document.querySelectorAll('.button_transparent');
const downloadBtn = document.querySelector('.button__refresh');
let isTeaOrDessert;

// Загрузка дополнительных карточек
function downloadCards() {
  cardsList.forEach((card) => card.classList.add('active'));
  downloadBtn.classList.add('active');
}

downloadBtn.addEventListener('click', downloadCards);

function changeCategory(category) {
  if (category !== 'Tea' && category !== 'Dessert') {
    deleteClass();
    cardsList.forEach((card) => card.classList.remove('active'));
    downloadBtn.classList.remove('active'); // включает кнопку дополнительной загрузки
    isTeaOrDessert = null;
  } else {
    // отключает кнопку дополнительной загрузки в категории чай и включает в остальных
    if (category === 'Tea') {
      downloadBtn.classList.add('active');
      cardsList.forEach((card) => card.classList.remove('active'));
      isTeaOrDessert = 'tea';
    } else {
      downloadBtn.classList.remove('active'); // включает кнопку дополнительной загрузки
      cardsList.forEach((card) => card.classList.remove('active'));
      isTeaOrDessert = 'dessert';
    }
    deleteClass();
    addClass(category);
  }
}

// Меняет внешний вид кнопки при нажатии
buttonsList.forEach((button) => {
  button.addEventListener('click', () => {
    buttonsList.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    changeCategory(button.innerText); //
    getData(button.innerText); // get api need category array
  });
});

// удаляет все классы у карточки товара
function deleteClass() {
  cardsList.forEach((card) => {
    card.classList.remove('tea', 'dessert');
  });
}

// добавляет нужный класс к катрочке товара
function addClass(name) {
  cardsList.forEach((card) => {
    card.classList.add(name.toLowerCase());
  });
}

// меняет содержимое катрочки товара

// получаем категорию и запрашиваем нужный нам массив
let array; // массив с информацией о товарах на открытой странице

async function getData(name = 'Coffee') {
  const quotes = '../data/products.json';
  const result = await fetch(quotes);
  const data = await result.json();
  if (name === 'Coffee') {
    array = data.Coffee;
  } else if (name === 'Tea') {
    array = data.Tea;
  } else if (name === 'Dessert') {
    array = data.Dessert;
  }
  changeCardText(array);
  //createModal(array); // прокидываем массив в сборку мадального окна что бы подтягивать ниформацию
}
getData();

// логика получаем массив с необходимой категорией, проходимся по карточкам и меняем содержимое
function changeCardText(data) {
  for (let i = 0; i < data.length; i++) {
    const cardTextChildren = cardsList[i].childNodes[3].children;
    for (let j = 0; j < cardTextChildren.length; j++) {
      if (j === 0) {
        cardTextChildren[j].innerText = data[i].name;
      }
      if (j === 1) {
        cardTextChildren[j].innerText = data[i].description;
      }
      if (j === 2) {
        cardTextChildren[j].innerText = `$${data[i].price}`;
      }
    }
  }
}

/* MODAL WINDOW */

//Открытие модального окна
const modal = document.querySelector('.modal');
const body = document.querySelector('.body');

function openModal() {
  modal.classList.add('active');
  body.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
  body.classList.remove('active');
}

cardsList.forEach((card) => {
  card.addEventListener('click', () => {
    const classImg = card.childNodes[1].classList[1]; // нужная нам картинка
    const title = card.childNodes[3].firstChild.nextElementSibling.innerText; // заголовок карточки он нам нужен для подтягивания остальной информации в модальное окно
    openModal();
    createModal(title, array);
    addImgToModal(classImg);
  });
});

function addImgToModal(classImg) {
  const modalImg = document.querySelector('.modal__img');
  if (isTeaOrDessert) {
    modalImg.classList.add(isTeaOrDessert);
  }
  modalImg.classList.add(classImg);
}

// переменные для изменения цены и добавления добавок
let priceSizeSmall;
let priceSizeMedium;
let priceSizeLarge;
let priceAdditiveOne;
let priceAdditiveTwo;
let priceAdditiveThree;
let startModalCost;

// функция принимает на вход начзавние товара и массив с категорией товаров. Проходится по массиву и находит нужные данные через название товара
function createModal(title, array) {
  let description;
  let sizeSmall;
  let sizeMedium;
  let sizeLarge;
  let additiveOne;
  let additiveTwo;
  let additiveThree;
  let total;

  for (let i = 0; i < array.length; i++) {
    if (array[i].name === title) {
      description = array[i].description;
      sizeSmall = array[i].sizes.s.size;
      sizeMedium = array[i].sizes.m.size;
      sizeLarge = array[i].sizes.l.size;
      additiveOne = array[i].additives[0].name;
      additiveTwo = array[i].additives[1].name;
      additiveThree = array[i].additives[2].name;
      total = array[i].price;

      // получили цены на добавки
      priceSizeSmall = array[i].sizes.s['add-price'];
      priceSizeMedium = array[i].sizes.m['add-price'];
      priceSizeLarge = array[i].sizes.l['add-price'];
      priceAdditiveOne = array[i].additives[0]['add-price'];
      priceAdditiveTwo = array[i].additives[1]['add-price'];
      priceAdditiveThree = array[i].additives[2]['add-price'];

      startModalCost = priceSizeSmall;
    }
  }

  const modalWrapper = document.querySelector('.modal__wrapper');
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal__window';
  modalWindow.innerHTML = `
        <div class="modal__img"></div>
          <div class="window__info-box">
            <h3 class="h3">${title}</h3>
            <p class="modal__text modal__text-main"> ${description} </p>
            <p class="modal__text modal__text-choice">Size</p>
            <div class="window__button-box">
              <button class="modal__button active btn-size">
                <p class="modal__button-icon active">S</p>
                ${sizeSmall}
              </button>
              <button class="modal__button btn-size">
                <p class="modal__button-icon ">M</p>
                ${sizeMedium}
              </button>
              <button class="modal__button btn-size">
                <p class="modal__button-icon ">L</p>
                ${sizeLarge}
              </button>
            </div>
            <p class="modal__text modal__text-choice text-choice__2">
              Additives
            </p>
            <div class="window__button-box">
              <button class="modal__button btn-addit">
                <p class="modal__button-icon ">1</p>
               ${additiveOne}
              </button>
              <button class="modal__button btn-addit">
                <p class="modal__button-icon ">2</p>
                ${additiveTwo}
              </button>
              <button class="modal__button btn-addit">
                <p class="modal__button-icon ">3</p>
                ${additiveThree}
              </button>
            </div>
            <div class="total__box">
              <h3 class="h3">Total:</h3>
              <h3 class="h3 total-price">$${total}</h3>
            </div>
            <div class="info-box">
              <img
                class="info-box__logo"
                src="../assets/icons/info-empty.svg"
                alt="logo info"
              />
              <p class="info-box__text">
                The cost is not final. Download our mobile app to see the final
                price and place your order. Earn loyalty points and enjoy your
                favorite coffee with up to 20% discount.
              </p>
            </div>
            <button class="modal__button modal__button-main btn-close">Close</button>
          </div>
`;
  modalWrapper.appendChild(modalWindow);

  //Закрытие модального окна через кнопку!
  const btnClose = document.querySelector('.btn-close');

  btnClose.addEventListener('click', () => {
    closeModal();
    modalWrapper.innerHTML = '';
  });

  // кнопки модального окна
  const modalBtnsSizes = document.querySelectorAll('.btn-size');
  const modalBtnsAdditives = document.querySelectorAll('.btn-addit');
  let isFirstAddit = false;
  let isSecondAddit = false;
  let isThirdAddit = false;

  modalBtnsAdditives.forEach((btnAddit) => {
    btnAddit.addEventListener('click', () => {
      btnAddit.classList.toggle('active');
      btnAddit.childNodes[1].classList.toggle('active');
      let numberBtn = btnAddit.childNodes[1].innerText;
      const additivePrice = addAdditivesPrice(numberBtn);
      if (numberBtn === '1') {
        if (!isFirstAddit) {
          changePrice('+', +additivePrice); // изменяем прайс
        } else {
          changePrice('-', +additivePrice); // изменяем прайс
        }
        isFirstAddit = !isFirstAddit;
      } else if (numberBtn === '2') {
        if (!isSecondAddit) {
          changePrice('+', +additivePrice); // изменяем прайс
        } else {
          changePrice('-', +additivePrice); // изменяем прайс
        }
        isSecondAddit = !isSecondAddit;
      } else if (numberBtn === '3') {
        if (!isThirdAddit) {
          changePrice('+', +additivePrice); // изменяем прайс
        } else {
          changePrice('', +additivePrice); // изменяем прайс
        }
        isThirdAddit = !isThirdAddit;
      }
    });
  });

  function addAdditivesPrice(additNumber) {
    if (additNumber === '1') {
      return priceAdditiveOne;
    } else if (additNumber === '2') {
      return priceAdditiveTwo;
    } else if (additNumber === '3') {
      return priceAdditiveThree;
    }
  }

  modalBtnsSizes.forEach((btnSize) => {
    btnSize.addEventListener('click', () => {
      deleteActiveBtnSize();
      changePrice('-', startModalCost); // удаляет разницу последнего выбранного товара
      btnSize.classList.add('active');
      btnSize.childNodes[1].classList.add('active');
      const addPrice = addPriceToTotale(btnSize.childNodes[1].innerText); // возвращает сумму которую нужно добавить к цене при изменеии обьема стакана
      startModalCost = addPrice; // сохраняем в переменную последнюю разницу
      changePrice('+', +addPrice); // изменяем прайс
    });
  });

  function deleteActiveBtnSize() {
    modalBtnsSizes.forEach((btnSize) => {
      btnSize.classList.remove('active');
      btnSize.childNodes[1].classList.remove('active');
    });
  }

  function addPriceToTotale(size) {
    if (size === 'S') {
      return priceSizeSmall;
    } else if (size === 'M') {
      return priceSizeMedium;
    } else if (size === 'L') {
      return priceSizeLarge;
    }
  }
}

function changePrice(action = '+', number) {
  const totalPrice = document.querySelector('.total-price');
  let cost = totalPrice.innerText.replace(/[$]/g, '');
  if (action === '+') {
    cost = +cost + number;
  } else {
    cost = +cost - number;
  }

  if (cost.toString().includes('.')) {
    if (cost.toString().split('.')[1].length === 1) {
      cost = cost + '0';
    }
  } else {
    cost = cost + '.00';
  }

  totalPrice.innerText = `$${cost}`;
}

// Закрытие модального окна при нажатии на затемнение

const closeShadow = document.querySelector('.modal__wrapper');
closeShadow.addEventListener('click', (event) => {
  // Проверяет на тот ли я элемент нажал!
  if (event.target.classList.contains('modal__wrapper')) {
    closeModal();
    const modalWrapper = document.querySelector('.modal__wrapper');
    modalWrapper.innerHTML = '';
  }
});
