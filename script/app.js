import { fetchData, renderItems } from "./products.js";

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
