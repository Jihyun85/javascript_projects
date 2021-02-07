const body = document.querySelector("body");
const btn = document.querySelector("button");
const colorArray = [
  "#B23A48",
  "#FED0BB",
  "#5E6973",
  "#6ABEA7",
  "#FFFD98",
  "#7A9CC6",
  "#EF5D60",
  "#F5853F",
  "#2D4654",
  "#988F2A",
  "#454ADE",
  "#574D68",
  "#FFE8D1",
  "#EFA48B",
  "#C6D8AF",
  "#E09F3E",
  "#9E2A2B",
];

const handleClick = () => {
  body.style.backgroundColor =
    colorArray[Math.floor(Math.random() * colorArray.length)];
};

body.style.backgroundColor = "#335C67";
btn.addEventListener("click", handleClick);
