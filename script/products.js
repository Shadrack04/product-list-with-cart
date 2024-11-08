import { cart, addToCart } from "./cart.js";

export const fetchData = async () => {
  try {
    const response = await fetch("../data.json");
    if (!response) {
      throw new Error("Couldn't fetch product data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
let dishGrid = document.querySelector(".list-grid");
export const renderItems = (data) => {
  let html = "";
  data.forEach((product) => {
    html += `
      <div class="food-card">
            <div class="image-container">
              <img src="${
                window.innerWidth <= 600
                  ? product.image.desktop
                  : product.image.mobile
              }" alt="${product.name}" />
              <button class="add-to-cart-btn" data-product-name = '${
                product.name
              }'>
                <svg  xmlns="http://www.w3.org/2000/svg" width="21" height="20"  viewBox="0 0 21 20"><g class="icon-shopping-cart"  clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path  d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                Add to Cart
              </button>
            </div>
            <div class="details">
              <p>${product.category}</p>
              <p class="food-name">${product.name}</p>
              <p class="price">$${product.price}</p>
            </div>
          </div>
    `;
  });
  dishGrid.innerHTML = html;
};

export let cartButton = `
  <button><svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
  <span class="select-quantity">0</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
  </button>
`;
