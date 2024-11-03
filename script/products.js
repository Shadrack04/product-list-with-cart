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
              <img src="${product.image.desktop}" alt="${product.name}" />
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
            <div class="details">
              <p>${product.category}</p>
              <p class="food-name">${product.name}</p>
              <p class="price">${product.price}</p>
            </div>
          </div>
    `;
  });
  dishGrid.innerHTML = html;
};
