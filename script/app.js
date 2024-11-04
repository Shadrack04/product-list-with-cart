import { fetchData, renderItems } from "./products.js";
import { addToCart } from "./cart.js";

export class Product {
  constructor(product) {
    this.imageSrc = product.image.desktop;
    this.name = product.name;
    this.category = product.category;
    this.price = product.price;
  }
}

const useData = async () => {
  const data = await fetchData();
  renderItems(data);
};
useData();
const container = document.querySelector(".list-grid");
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productName = e.target.dataset.productName;
    addToCart(productName);
  }
});
