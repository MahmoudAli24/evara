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

showMore.addEventListener("click", () => {
  if (headerCategories.style.height != "auto") {
    headerCategories.style.height = "auto";
  } else if ((headerCategories.style.height = "auto")) {
    headerCategories.style.height = "165px";
  }
  console.log(headerCategories.style.height);
});

// End Header Browse Categories
