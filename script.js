/*------------------Fixed Navbar---------------------*/
let header = document.querySelector('.header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let cross = document.querySelector('.fa-xmark');
// let mainListDiv = document.getElementById("mainListDiv"),
let mediaButton = document.getElementById("mediaButton");
 
mediaButton.onclick = function () {
    
  // "use strict";
  
  navbar.classList.toggle("show_me");
  mediaButton.classList.toggle("active");
  
};
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
// menu.onclick = () => {
//     navbar.classList.toggle('active');
// }

// cross.onclick = () => {
//   navbar.classList.toggle('active');
// }
window.onscroll = () => {
    navbar.classList.remove('show_me');
    navbar.classList.remove('active');
}

// AOS animation
AOS.init({
  duration:1000,
  delay:400
});


// Countup Animation
let valueDisplays = document.querySelectorAll(".num");
let interval = 9000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
     startValue += 1;
     valueDisplay.textContent = startValue;
     if (startValue == endValue) {
       clearInterval(counter);
     }
   }, duration);
 });


// Swiper Introduction




//  Swiper Testimonials

const swiperEl = document.querySelector('.swiper-2')

    const params = {
      injectStyles: [`
      .swiper-pagination-bullet {
        width: 57px;
        height: 57px;
        // padding: 0.5rem;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #222;
        // opacity: 1;
        // background: rgba(0, 0, 0, 0.2);
      }

      .swiper-pagination-bullet:first-child{
        background: url(https://mobirise.com/extensions/jewelrym5/perfume-shop/assets/images/team3.jpg);
        background-size: cover;
        margin: 0 20px !important;
      }

      .swiper-pagination-bullet:nth-child(2){
        background: url(https://mobirise.com/extensions/jewelrym5/perfume-shop/assets/images/team1.jpg);
        background-size: cover;
        margin: 0 20px !important;
      }

      .swiper-pagination-bullet:nth-child(3){
        background: url(https://mobirise.com/extensions/jewelrym5/perfume-shop/assets/images/team2.jpg);
        background-size: cover;
        margin: 0 20px !important;
      }

      .swiper-pagination-bullet-active {
        // opacity: 1;
        transform: scale(1.3);
        transition: 0.1s;
      }
      `],
      pagination: {
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
      },
    }

    Object.assign(swiperEl, params)

    swiperEl.initialize();