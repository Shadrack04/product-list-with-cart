export const cart = [
  { productName: "Waffle with Berries", quantity: 1 },
  { productName: "Vanilla Bean Crème Brûlée", quantity: 2 },
];

export function addToCart(productName) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productName === productName) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productName: productName,
      quantity: 1,
    });
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

export function updateBtn() {
  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
      0
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
  `;
}
