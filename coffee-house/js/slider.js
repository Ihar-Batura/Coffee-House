const sliderLine = document.querySelector('.layout-1-column');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const sliderIndicators = document.querySelectorAll('.indicator');
const sliderCard = document.querySelector('.favCoffee__card').offsetWidth;
let position = 0;
let sliderIndex = 0;


//Functions

const nextSlide = () => {
    if (position < 696 && sliderCard === 348) {
        position += 348;
        sliderIndex++;
    }
    else if(position < 960 && sliderCard === 480) {
        position += 480;
        sliderIndex++;  
    }
    else {
        position = 0;
        sliderIndex = 0;
    }
    sliderLine.style.left = -position + "px";
    thisSlide(sliderIndex);

    
}
const prevSlide = () => {
    if(position > 0 && sliderCard === 348) {
        position -= 348;
        sliderIndex--;
    }
    else if(position > 0 && sliderCard === 480) {
        position -= 480;
        sliderIndex--;  
    }
    else {
        position = 960; //Здесь могут быть вопросы при мобильном экране!!! Позиция 696
        sliderIndex = 2;
    }
    sliderLine.style.left = -position + "px";
    thisSlide(sliderIndex);
}

//Слайдер Индекс меняет цвет
const thisSlide = (index) => {
    for (let indicator of sliderIndicators) {
        indicator.classList.remove("indicator__progress");
    }
    sliderIndicators[index].classList.add("indicator__progress");
}


//EventListeners

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);


//SetInterval

setInterval( ()=> {
    nextSlide()
   
},7000)


//Touch работает но криво, нужно доделать!!!
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

const slider = document.querySelector('.favCoffee__card');

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    console.log(x1, y1);
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
        }
        else {
            prevSlide();
        }
    }
    x1 = null;
    y1 = null;
}





