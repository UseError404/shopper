/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper

// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//  import 'swiper/css';
// Базовые стили
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.sellers__swiper')) {
        // Создаем слайдер
        new Swiper('.sellers__swiper', {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 90,

            // Эффекты
            // effect: 'fade',
            speed: 600,
            touchRatio: 0,
            lazy: true,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false, // продолжать после взаимодействия
                pauseOnMouseEnter: true // опционально - пауза при наведении
            },

            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },


            // Скроллбар
            /*
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            */

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.sellers__swiper-button-prev',
                nextEl: '.sellers__swiper-button-next',
            },

            // Брейкпоинты

            breakpoints: {
                320: {
                    touchRatio: 1,
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 20,
                    loop: true,
                    freeMode: false,
                    autoplay: {
                        delay: 2500, // 2.5 секунды
                        disableOnInteraction: false, // продолжать после взаимодействия
                        pauseOnMouseEnter: true // опционально - пауза при наведении
                    },
                },
                768: {
                    touchRatio: 1,
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 40,
                    loop: true,
                    freeMode: false,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                    touchRatio: 0,
                    autoplay: false,
                },
                1301: {
                    slidesPerView: 3,
                    spaceBetween: 90,
                },
            },

            // События
            on: {}
        });
    }

    if (document.querySelector('.trend__swiper')) {
        // Создаем слайдер
        new Swiper('.trend__swiper', {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 90,

            // Эффекты
            // effect: 'fade',
            speed: 600,
            touchRatio: 0,
            lazy: true,
            autoplay: {
                delay: 10000, // 2.5 секунды
                disableOnInteraction: false, // продолжать после взаимодействия
                pauseOnMouseEnter: true // опционально - пауза при наведении
            },

            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.trend__swiper-button-prev',
                nextEl: '.trend__swiper-button-next',
            },

            // Брейкпоинты

            breakpoints: {
                320: {
                    touchRatio: 1,
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 20,
                    loop: true,
                    freeMode: false,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false, // продолжать после взаимодействия
                        pauseOnMouseEnter: true // опционально - пауза при наведении
                    },
                },
                768: {
                    touchRatio: 1,
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 40,
                    loop: true,
                    freeMode: false,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                    touchRatio: 0,
                    autoplay: false,
                },
                1301: {
                    slidesPerView: 3,
                    spaceBetween: 90,
                },
            },

            // События
            on: {}
        });
    }

    if (document.querySelector('.launch__slider')) {
        // Создаем слайдер
        new Swiper('.launch__slider', {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 90,
            loop: true,

            // Эффекты
            // effect: 'fade',
            speed: 800,
            touchRatio: 0,
            lazy: true,
            // autoplay: {
            //     delay: 10000, // 2.5 секунды
            //     disableOnInteraction: false, // продолжать после взаимодействия
            //     pauseOnMouseEnter: true // опционально - пауза при наведении
            // },

            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.launch__swiper-button-prev',
                nextEl: '.launch__swiper-button-next',
            },

            // Брейкпоинты

           breakpoints: {
                320: {
                    touchRatio: true,
                    slidesPerView: 1,
                    spaceBetween: 90,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false, // продолжать после взаимодействия
                        pauseOnMouseEnter: true // опционально - пауза при наведении
                    },
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween: 90,
                    touchRatio: 0,
                }
            },

            // События
            on: {}
        });
    }
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }
}

window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});