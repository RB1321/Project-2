"use strict";

//////faq tabs
let questionFaq = document.querySelectorAll(".faq-item-question");
let answerFaq = document.querySelectorAll(".faq-item-answer");
let faqSection = document.querySelector(".faq");
let plusMinusFaq = document.querySelectorAll(".faq-item-plus-minus");
console.log(plusMinusFaq);

function hideAnswerFaq() {
  answerFaq.forEach((item) => {
    item.classList.add("hide");
  });
}
function showAnswerFaq(i) {
  answerFaq[i].classList.remove("hide");
}
hideAnswerFaq();

faqSection.addEventListener("click", function (e) {
  let target = e.target;
  if (
    target.classList.contains("faq-item-question") ||
    target.classList.contains("faq-item-plus-minus")
  ) {
    questionFaq.forEach((item, i) => {
      if (
        (item === target || plusMinusFaq[i] === target) &&
        answerFaq[i].classList.contains("hide")
      ) {
        showAnswerFaq(i);
      } else if (
        (item === target || plusMinusFaq[i] === target) &&
        !answerFaq[i].classList.contains("hide")
      ) {
        answerFaq[i].classList.add("hide");
      }
    });
  }
});

//......................SWIPER
const articklesSwiper = new Swiper(".swiper", {
  enabled: true,
  direction: "horizontal",
  // loop: true,
  speed: 500,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    clickable: true,
    el: ".slider-pagination",
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
      spaseBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaseBetween: 30,
    },
  },
});

//.........SLICK
$(document).ready(function () {
  $(".slick-reviews").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: document.querySelector(".slick-prev"),
    nextArrow: document.querySelector(".slick-next"),
  });
});
