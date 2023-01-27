$("#news-flash").vTicker({
  speed: 600,
  pause: 3000,
  animation: "fade",
  mousePause: true,
  showItems: 1,
});
// Start Header Search Categories
let dropdownItem = document.querySelectorAll(
  ".header-middel .header-wrap__right__search__categories .dropdown-item"
);
let dropdownToggle = document.querySelector(
  ".header-middel .header-wrap__right__search__categories .dropdown-toggle"
);
dropdownItem.forEach((ele) => {
  ele.addEventListener("click", function (el) {
    dropdownToggle.textContent = ele.textContent;
  });
});
// End Header Search Categories
// Start Header Browse Categories
let showMore = document.querySelector(".header-bottom__categories .show-more");
let headerCategories = document.querySelector(
  ".header-bottom__categories__sub-menu .categories"
);
let categoriesBtn = document.querySelector(".header-bottom__categories div");
let categoriesSumMenu = document.querySelector(
  ".header-bottom__categories__sub-menu "
);
showMore.addEventListener("click", () => {
  if (headerCategories.style.height != "auto") {
    headerCategories.style.height = "auto";
  } else if ((headerCategories.style.height = "auto")) {
    headerCategories.style.height = "165px";
  }
  console.log(headerCategories.style.height);
});
categoriesBtn.addEventListener("click", () => {
  console.log(categoriesSumMenu.classList);
  if (categoriesSumMenu.classList.contains("invisible", "opacity-0")) {
    categoriesSumMenu.classList.remove("invisible", "opacity-0");
    categoriesSumMenu.classList.add("visible", "opacity-100");
  } else {
    categoriesSumMenu.classList.add("invisible", "opacity-0");
    categoriesSumMenu.classList.remove("visible", "opacity-100");
  }
});
// End Header Browse Categorie
// Start Popular
$(document).ready(function () {
  $(".popular-cards").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    loop: true,
    adaptiveHeight: true,
    // variableWidth: true,
    prevArrow: '<span ><i class="bi bi-chevron-left"></i></span>',
    nextArrow: '<span ><i class="bi bi-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// End Popular
// Start CountDown
const countDown = new Date("2023-3-30").getTime();
count = setInterval(() => {
  now = new Date().getTime();
  distance = countDown - now;
  days = Math.floor(distance / (24 * 60 * 60 * 1000));
  hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  seconds = Math.floor((distance % (60 * 1000)) / 1000);
  document.getElementById("minuts").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minuts-1").innerHTML = minutes;
  document.getElementById("seconds-1").innerHTML = seconds;
}, 1000);

// End CountDown

$(document).ready(function () {
  $(".brands").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    loop: true,
    adaptiveHeight: true,
    // variableWidth: true,
    prevArrow: '<span ><i class="bi bi-chevron-left"></i></span>',
    nextArrow: '<span ><i class="bi bi-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".monthly-card").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    loop: true,
    adaptiveHeight: true,
    // variableWidth: true,
    prevArrow: '<span ><i class="bi bi-chevron-left"></i></span>',
    nextArrow: '<span ><i class="bi bi-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
