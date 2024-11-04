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
