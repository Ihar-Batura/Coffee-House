const cardsList = document.querySelectorAll('.coffee__card');
const buttonsList = document.querySelectorAll('.button_transparent');
const downloadBtn = document.querySelector('.button__refresh');

// Загрузка дополнительных карточек
function downloadCards() {
  menuCard5.classList.add('active');
  menuCard6.classList.add('active');
  menuCard7.classList.add('active');
  menuCard8.classList.add('active');
  downloadBtn.classList.add('active');
}

downloadBtn.addEventListener('click', downloadCards);

function changeCategory(category) {
  console.log(category);
  if (category !== 'Tea' && category !== 'Dessert') {
    deleteClass();
  } else {
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
async function getData(name) {
  let array;
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
}

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
  const cardText = cardsList[0].childNodes[3].children.length;
}
