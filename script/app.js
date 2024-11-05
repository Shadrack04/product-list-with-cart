import { cartButton, fetchData, renderItems } from "./products.js";
import { cart, addToCart, getNumberOfItemsInCart } from "./cart.js";
import { renderOrder } from "./order.js";
import { renderCheckoutPage } from "./order-utils.js";

const confirmOrderBtn = document.querySelector(".confirm-order-btn");
const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");

export class Product {
  constructor(product) {
    this.imageSrc = product.image.desktop;
    this.name = product.name;
    this.category = product.category;
    this.price = product.price;
  }
}

// get the product in an array of object form
const getProductData = async () => {
  const data = await fetchData();
  renderItems(data);
};
getProductData();
renderOrder(cart);
getNumberOfItemsInCart(cart);

// using delegation to add event listener to the addToCartBtn
const dishContainer = document.querySelector(".list-grid");
dishContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productName = e.target.dataset.productName;
    addToCart(productName);
    renderOrder(cart);
    getNumberOfItemsInCart(cart);
  }
});

confirmOrderBtn.addEventListener("click", () => {
  console.log(cart);
  if (cart.length !== 0) {
    modal.classList.add("open");
    overlay.classList.add("open");
    renderCheckoutPage(cart);
  }
});
