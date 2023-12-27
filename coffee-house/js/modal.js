//Открытие модального окна
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("card-1").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });
    document.getElementById("card-2").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });
    document.getElementById("card-3").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });
    document.getElementById("card-4").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });
    document.getElementById("card-5").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });
    document.getElementById("card-6").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });
    document.getElementById("card-7").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });
    document.getElementById("card-8").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });

    //Закрытие модального окна через кнопку!
    document.querySelector(".modal__button-main").addEventListener("click", function() {
        document.querySelector(".modal").classList.toggle("active");
        document.querySelector(".body").classList.toggle("active");
    });
   // document.querySelector(".modal__wrapper").addEventListener("click", function() {
   //     document.querySelector(".modal").classList.remove("active");
   //     document.querySelector(".body").classList.remove("active");
   // });
});

