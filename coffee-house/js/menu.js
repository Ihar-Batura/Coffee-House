// Загрузка дополнительных карточек 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("download").addEventListener("click", function() {
        document.querySelector(".coffee__card-5").classList.toggle("active");
        document.querySelector(".coffee__card-6").classList.toggle("active");
        document.querySelector(".coffee__card-7").classList.toggle("active");
        document.querySelector(".coffee__card-8").classList.toggle("active");
        document.querySelector(".button__refresh").classList.toggle("active");
        document.querySelector(".layout-2-column").classList.toggle("active");
    });
});

// Переменные для карточек
const cardName1 = document.getElementById('cardName-1');
const cardName2 = document.getElementById('cardName-2');
const cardName3 = document.getElementById('cardName-3');
const cardName4 = document.getElementById('cardName-4');
const cardName5 = document.getElementById('cardName-5');
const cardName6 = document.getElementById('cardName-6');
const cardName7 = document.getElementById('cardName-7');
const cardName8 = document.getElementById('cardName-8');

const cardText1 = document.getElementById('cardText-1');
const cardText2 = document.getElementById('cardText-2');
const cardText3 = document.getElementById('cardText-3');
const cardText4 = document.getElementById('cardText-4');
const cardText5 = document.getElementById('cardText-5');
const cardText6 = document.getElementById('cardText-6');
const cardText7 = document.getElementById('cardText-7');
const cardText8 = document.getElementById('cardText-8');

const carPrice1 = document.getElementById('carPrice-1');
const carPrice2 = document.getElementById('carPrice-2');
const carPrice3 = document.getElementById('carPrice-3');
const carPrice4 = document.getElementById('carPrice-4');
const carPrice5 = document.getElementById('carPrice-5');
const carPrice6 = document.getElementById('carPrice-6');
const carPrice7 = document.getElementById('carPrice-7');
const carPrice8 = document.getElementById('carPrice-8');

// Переключение кнопок меню с категориями 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buttonCoffee").addEventListener("click", function() {
        document.getElementById("buttonCoffee").classList.toggle("active");
        document.getElementById("backImg-1").classList.toggle("active");
        document.getElementById("backImg-2").classList.remove("active");
        document.getElementById("backImg-3").classList.remove("active");
        document.getElementById("buttonTea").classList.remove("active");
        document.getElementById("buttonDessert").classList.remove("active");

        // Удаление классов tea and dessert
        document.getElementById("card-1").classList.remove("tea", "dessert");
        document.getElementById("card-2").classList.remove("tea", "dessert");
        document.getElementById("card-3").classList.remove("tea", "dessert");
        document.getElementById("card-4").classList.remove("tea", "dessert");
        document.getElementById("card-5").classList.remove("tea", "dessert");
        document.getElementById("card-6").classList.remove("tea", "dessert");
        document.getElementById("card-7").classList.remove("tea", "dessert");
        document.getElementById("card-8").classList.remove("tea", "dessert");

        // Изменяем техт в карточках
        cardName1.textContent = "Irish coffee";
        cardName2.textContent = "Kahlua coffee";
        cardName3.textContent = "Honey raf";
        cardName4.textContent = "Ice cappuccino";
        cardName5.textContent = "Espresso";
        cardName6.textContent = "Latte";
        cardName7.textContent = "Latte macchiato";
        cardName8.textContent = "Coffee with cognac";

        cardText1.textContent = "Fragrant black coffee with Jameson Irish whiskey and whipped milk";
        cardText2.textContent = "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk";
        cardText3.textContent = "Espresso with frothed milk, cream and aromatic honey";
        cardText4.textContent = "Cappuccino with soft thick foam in summer version with ice";
        cardText5.textContent = "Classic black coffee";
        cardText6.textContent = "Espresso coffee with the addition of steamed milk and dense milk foam";
        cardText7.textContent = "Espresso with frothed milk and chocolate";
        cardText8.textContent = "Fragrant black coffee with cognac and whipped cream";

        carPrice1.textContent = "$7.00";
        carPrice2.textContent = "$7.00";
        carPrice3.textContent = "$5.50";
        carPrice4.textContent = "$5.00";
        carPrice5.textContent = "$4.50";
        carPrice6.textContent = "$4.50";
        carPrice7.textContent = "$5.50";
        carPrice8.textContent = "$6.50";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buttonTea").addEventListener("click", function() {
        document.getElementById("buttonCoffee").classList.remove("active");
        document.getElementById("buttonTea").classList.toggle("active");
        document.getElementById("backImg-2").classList.toggle("active");
        document.getElementById("backImg-1").classList.remove("active");
        document.getElementById("backImg-3").classList.remove("active");
        document.getElementById("buttonDessert").classList.remove("active");

        // Удаление класса dessert и добавление tea
        document.getElementById("card-1").classList.add("tea");
        document.getElementById("card-2").classList.add("tea");
        document.getElementById("card-3").classList.add("tea");
        document.getElementById("card-4").classList.add("tea");
        document.getElementById("card-5").classList.add("tea");
        document.getElementById("card-6").classList.add("tea");
        document.getElementById("card-7").classList.add("tea");
        document.getElementById("card-8").classList.add("tea");
        document.getElementById("card-1").classList.remove("dessert");
        document.getElementById("card-2").classList.remove("dessert");
        document.getElementById("card-3").classList.remove("dessert");
        document.getElementById("card-4").classList.remove("dessert");
        document.getElementById("card-5").classList.remove("dessert");
        document.getElementById("card-6").classList.remove("dessert");
        document.getElementById("card-7").classList.remove("dessert");
        document.getElementById("card-8").classList.remove("dessert");

        document.getElementById("download").classList.add("hidden");

        // Изменяем техт в карточках
        cardName1.textContent = "Moroccan";
        cardName2.textContent = "Ginger";
        cardName3.textContent = "Cranberry";
        cardName4.textContent = "Sea buckthorn";

        cardText1.textContent = "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint";
        cardText2.textContent = "Original black tea with fresh ginger, lemon and honey";
        cardText3.textContent = "Invigorating black tea with cranberry and honey";
        cardText4.textContent = "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon";

        carPrice1.textContent = "$4.50";
        carPrice2.textContent = "$5.00";
        carPrice3.textContent = "$5.00";
        carPrice4.textContent = "$5.50";
        
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buttonDessert").addEventListener("click", function() {
        document.getElementById("buttonCoffee").classList.remove("active");
        document.getElementById("buttonTea").classList.remove("active");
        document.getElementById("buttonDessert").classList.toggle("active");
        document.getElementById("backImg-3").classList.toggle("active");
        document.getElementById("backImg-1").classList.remove("active");
        document.getElementById("backImg-2").classList.remove("active");
        // Удаление класса tea и добавление dessert
        document.getElementById("card-1").classList.remove("tea");
        document.getElementById("card-2").classList.remove("tea");
        document.getElementById("card-3").classList.remove("tea");
        document.getElementById("card-4").classList.remove("tea");
        document.getElementById("card-5").classList.remove("tea");
        document.getElementById("card-6").classList.remove("tea");
        document.getElementById("card-7").classList.remove("tea");
        document.getElementById("card-8").classList.remove("tea");
        document.getElementById("card-1").classList.add("dessert");
        document.getElementById("card-2").classList.add("dessert");
        document.getElementById("card-3").classList.add("dessert");
        document.getElementById("card-4").classList.add("dessert");
        document.getElementById("card-5").classList.add("dessert");
        document.getElementById("card-6").classList.add("dessert");
        document.getElementById("card-7").classList.add("dessert");
        document.getElementById("card-8").classList.add("dessert");

        // Изменяем техт в карточках
        cardName1.textContent = "Marble cheesecake";
        cardName2.textContent = "Red velvet";
        cardName3.textContent = "Cheesecakes";
        cardName4.textContent = "Creme brulee";
        cardName5.textContent = "Pancakes";
        cardName6.textContent = "Honey cake";
        cardName7.textContent = "Chocolate cake";
        cardName8.textContent = "Black forest";

        cardText1.textContent = "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam";
        cardText2.textContent = "Layer cake with cream cheese frosting";
        cardText3.textContent = "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar";
        cardText4.textContent = "Delicate creamy dessert in a caramel basket with wild berries";
        cardText5.textContent = "Tender pancakes with strawberry jam and fresh strawberries";
        cardText6.textContent = "Classic honey cake with delicate custard";
        cardText7.textContent = "Cake with hot chocolate filling and nuts with dried apricots";
        cardText8.textContent = "A combination of thin sponge cake with cherry jam and light chocolate mousse";

        carPrice1.textContent = "$3.50";
        carPrice2.textContent = "$4.00";
        carPrice3.textContent = "$4.50";
        carPrice4.textContent = "$4.00";
        carPrice5.textContent = "$4.50";
        carPrice6.textContent = "$4.50";
        carPrice7.textContent = "$5.50";
        carPrice8.textContent = "$6.50";
    });
});






