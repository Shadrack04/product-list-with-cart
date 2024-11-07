import { cart, getTotalAmount } from "./cart.js";
import { fetchData } from "./products.js";
import {
  renderEmptyOrder,
  renderOrders,
  removeOrder,
  hideConfirmSection,
  showConfirmSection,
} from "./order-utils.js";

const cartItemsContainer = document.querySelector(".js-cart-items-container");
const totalAmount = document.querySelector(".total-amount");

export async function renderOrder(cart) {
  const products = await fetchData();
  let html = "";
  let itemsAmount = 0;
  if (cart.length === 0) {
    hideConfirmSection();
    html = renderEmptyOrder();
  }
  cart.forEach((cartItem) => {
    let matchingItem;
    products.forEach((product) => {
      if (cartItem.productName === product.name) {
        matchingItem = product;
      }
    });
    if (matchingItem) {
      itemsAmount += getTotalAmount(cartItem, matchingItem);
      totalAmount.textContent = `$${itemsAmount}`;
      showConfirmSection();
      html += renderOrders(cartItem, matchingItem);
    } else {
      hideConfirmSection();
      html = renderEmptyOrder();
    }
  });

  cartItemsContainer.innerHTML = html;
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-cart-item-btn"));
    const productName = e.target.dataset.matchingItemName;
    removeOrder(productName, cart);
  });
}
