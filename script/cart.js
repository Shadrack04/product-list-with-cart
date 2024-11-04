export const cart = [];

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
  console.log(cart);
}
