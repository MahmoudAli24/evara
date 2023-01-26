// let cardsBox = document.querySelector(".popular .box");
// let next = document.querySelector(".popular .next");
// let content = [
//   {
//     img: "content/assets/images/shop/featured/product-1-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-2-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-3-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-4-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-5-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-6-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-7-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-8-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-1-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-2-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-3-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-4-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-5-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-6-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-7-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-8-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-1-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-2-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-3-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-4-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-5-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-6-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-7-1.jpg",
//     titel: "lorem",
//   },
//   {
//     img: "content/assets/images/shop/featured/product-8-1.jpg",
//     titel: "lorem",
//   },
// ];
// content.forEach((el, i) => {
//   cardsBox.innerHTML += `<div class="card-box col-2">
//   <img src="${el.img}" alt="..." class="img-fluid">
//   <h4>${el.titel}</h4>
//   </div>`;
// });
// let cards = document.querySelectorAll(".popular .box .card");
// let arr = Array.from(cardsBox.children);

// console.log(arr);
// // cardsBox.style.transform = `translateX(0px)`;
// console.log(Array.isArray(arr));
// let num = 1;
// let cardWidth = arr[1].clientWidth;
// next.addEventListener("click", () => {
//   cardsBox.style.transform = `translateX(-${cardWidth * num}px)`;
//   if (cardWidth * num == 1914) {
//     cardWidth = 0;
//   }
//   cardsBox.children[cardsBox.children.length] = arr[1];
//   num++;
//   // cardsBox.appendChild(cardsBox.children[1]);
// });
