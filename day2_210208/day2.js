const body = document.querySelector("body");
const btn = document.querySelector("button");
const h2 = document.querySelector("h2");
const colorArray = ["#B23A48","#03045E","#5E6973","#6ABEA7","#FFFD98","#7A9CC6","#EF5D60","#F5853F","#db3a34","#FF858D","#454ADE","#574D68","#2D4654","#EFA48B","#C6D8AF","#E09F3E","#9CEC5B","#F7B801","#283618","#323031","#DAC3E8","#F0F0C9",
];

const handleClick = () => {
  const index = colorArray[Math.floor(Math.random() * colorArray.length)];
  body.style.backgroundColor = index;
  h2.innerText = `HEX COLOR : ${index}`;
};

body.style.backgroundColor = "#F7B801";
btn.addEventListener("click", handleClick);
