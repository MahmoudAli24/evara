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
// End Header Browse Categories