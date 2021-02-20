/*class Product {
  constructor(imgName, name, price) {
    (this.imgName = imgName), (this.name = name), (this.price = price);
  }
}*/

/*const productList = [
  new Product("cake-1", "Cake Item", 5),
  new Product("cake-2", "Cake Item", 10),
  new Product("cake-3", "Cake Item", 5),
  new Product("cupcake-1", "Cupcake Item", 10),
  new Product("cupcake-2", "Cupcake Item", 5),
  new Product("cupcake-3", "Cupcake Item", 15),
  new Product("doughnut-1", "Doughnut Item", 5),
  new Product("doughnut-2", "Doughnut Item", 5),
  new Product("doughnut-3", "Doughnut Item", 10),
  new Product("sweets-1", "Sweets Item", 10),
  new Product("sweets-2", "Sweets Item", 15),
  new Product("sweets-3", "Sweets Item", 15),
];*/

/*const paintItem = (item) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("our-store__product");
  const picContainer = document.createElement("div");
  picContainer.classList.add("our-store__product-pic");
  const productInfo = document.createElement("div");
  productInfo.classList.add("")

};*/

const productGrid = document.querySelector(".jsProductGrid");
const products = document.querySelectorAll(".jsProduct");
const btns = document.querySelectorAll(".jsBtn");
const input = document.querySelector(".jsInput");

const handleBtnClick = (e) => {
  const dataset = e.target.dataset.item;
  products.forEach((product) => {
    const productDataset = product.dataset.item;
    if (dataset === "all") {
      product.style.display = "block";
    } else if (productDataset === dataset) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const handleInput = () => {
  const inputValue = input.value.toLowerCase();
  products.forEach((product) => {
    const text = product.innerText.toLowerCase();
    console.log(text);
    if (inputValue === "") {
      product.style.display = "block";
    } else if (text.includes(inputValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const init = () => {
  btns.forEach((btn) => btn.addEventListener("click", handleBtnClick));
  input.addEventListener("input", handleInput);
};

init();
