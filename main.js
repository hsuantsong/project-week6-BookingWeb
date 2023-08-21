import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

const swiper = new Swiper(".mySwiper", {
    // 避免使用者移動到
    allowTouchMove: false,

    //能呈現幾個.swiper-slide
    slidesPerView: "auto",

    // 是否重複
    loop: true,

    // 跑馬燈速度
    speed: 20000,

    // 自動播放
    autoplay: {
        // 動畫延遲時間
        delay: 0,
        //避免點擊造成跑馬燈失效，視情況增加
        disableOnInteraction: false,
    },

    centeredSlides: true,
});

// 要調整 cost
const reverseSwiper = new Swiper(".reverseSwiper", {
    // 避免使用者移動到
    allowTouchMove: false,

    //能呈現幾個.swiper-slide(內容不換行)
    slidesPerView: "auto",

    // 是否重複
    loop: true,

    // 跑馬燈速度
    speed: 20000,

    // 自動播放
    autoplay: {
        // 動畫延遲時間
        delay: 0,
        //避免點擊造成跑馬燈失效，視情況增加
        disableOnInteraction: false,
        // 方向調整
        reverseDirection: true,
    },

    centeredSlides: true,
});