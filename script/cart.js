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
