// Подключение функционала "Чертогов Фрилансера"
import {isMobile} from "./functions.js";
// Подключение списка активных модулей
import {flsModules} from "./modules.js";


document.addEventListener("DOMContentLoaded", function () {
    // SECTION SELLERS, TREND
    // переключение активной кнопки по выбору категории
    const buttonsSellers = document.querySelectorAll(".sellers .sellers__buttons-switch .sellers__btn");
    const buttonsTrend = document.querySelectorAll(".trend .trend__buttons-switch .trend__btn");

    buttonsSellers.forEach(button => {
        button.addEventListener("click", function () {
            buttonsSellers.forEach(btn => {
                btn.classList.remove("sellers__btn--active");
            });

            this.classList.add("sellers__btn--active");
        })
    });
    buttonsTrend.forEach(button => {
        button.addEventListener("click", function () {
            buttonsTrend.forEach(btn => {
                btn.classList.remove("trend__btn--active");
            });

            this.classList.add("trend__btn--active");
        })
    });

    // SECTION LAUNCH
    // Переключение картинок по выбору цвета в слайдере
    const colorButtons = document.querySelectorAll('.launch__colors');
    const imageContainers = document.querySelectorAll('.launch__slide-container-images');

    // Обработчик клика на кнопки цветов
    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            const color = this.dataset.color;

            // Обновление активной кнопки
            colorButtons.forEach(btn => {
                btn.classList.remove('launch__colors-active');
            });
            this.classList.add('launch__colors-active');

            // Переключение видимого контейнера с изображениями
            imageContainers.forEach(container => {
                container.classList.remove('launch__slide-container-images-active');
                if (container.dataset.color === color) {
                    container.classList.add('launch__slide-container-images-active');
                }
            });
        });
    });


    const imagesLaunch = document.querySelectorAll('.launch__slide-container-images-active .launch__slide-image');
    let intervalId = null;
    const breakpoint = 992;

    function activeImageLaunch() {
        imagesLaunch.forEach(image => {
            image.addEventListener('click', function () {
                imagesLaunch.forEach(image => {
                    image.classList.remove('launch__slide-image-active');
                })
                this.classList.add('launch__slide-image-active');
            })
        })
    }


    function checkWindowsSize() {
        if (window.innerWidth < breakpoint) {
            activeImageLaunch();
        }
    }

    checkWindowsSize(); // проверка при загрузке сайта
    window.addEventListener('resize', checkWindowsSize); // проверка при изменении окна
});




