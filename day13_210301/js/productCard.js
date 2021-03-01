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
