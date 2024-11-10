import { renderOrder } from "./order.js";
import { removeOrder } from "./order-utils.js";

export let cart =
  getFromLocalStorage() ||
  [
    // { productName: "Waffle with Berries", quantity: 1 },
    // { productName: "Vanilla Bean Crème Brûlée", quantity: 2 },
  ];

export function updateCart(newCart) {
  cart = newCart;
}

export function addToCart(productName) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productName === productName) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity++;
    savetoLocalStorage(cart);
  } else {
    cart.push({
      productName: productName,
      quantity: 1,
    });
    savetoLocalStorage(cart);
  }
}
export function getNumberOfItemsInCart(cart) {
  const cartQuantity = document.querySelector(".cart-quantity");
  let quantity = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );
  cartQuantity.textContent = quantity;
}

export function getTotalAmount(cartItem, matchingItem) {
  return matchingItem.price * cartItem.quantity;
}

export function savetoLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("cart"));
}

export let cartButton = `
  <button><svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
  <span class="select-quantity">0</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
  </button>
`;

export function appendSvg(e, cart, productName) {
  console.log("clicked");
  e.target.innerHTML = `
    <div class='second-btn'><svg class='decrease-quantity' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
    <span class="select-quantity">0</span>
    <svg class='increase-quantity' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
    </div>
  `;
  let selectedItemQuantity;
  cart.forEach((cartItem) => {
    if (cartItem.productName === productName) {
      selectedItemQuantity = cartItem.quantity + 1;
    }
  });

  const secondBtn = document.querySelector(".second-btn");
  const selectQuantity = document.querySelector(".select-quantity");
  selectQuantity.textContent = selectedItemQuantity || 1;

  secondBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("decrease-quantity")) {
      decreaseCart(productName);
      selectQuantity.textContent--;
    } else if (e.target.classList.contains("increase-quantity")) {
      increaseCart(productName);
      selectQuantity.textContent++;
    }
  });
}

function decreaseCart(productName) {
  let found = false;
  cart.forEach((cartItem) => {
    if (cartItem.productName === productName) {
      if (cartItem.quantity <= 1) {
        removeOrder(productName);
        console.log("decrease", cart);
      } else {
        cartItem.quantity -= 1;
      }
      found = true;
    }
  });
  if (!found) {
    cart.push({
      productName: productName,
      quantity: 1,
    });
  }
  getNumberOfItemsInCart(cart);
  savetoLocalStorage(cart);
  renderOrder(cart);
}

function increaseCart(productName) {
  let found = false;
  cart.forEach((cartItem) => {
    if (cartItem.productName === productName) {
      cartItem.quantity++;
      found = true;
    }
  });
  if (!found) {
    cart.push({
      productName: productName,
      quantity: 1,
    });
  }
  savetoLocalStorage(cart);
  renderOrder(cart);
}
