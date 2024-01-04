function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnHtml = document.querySelector(".change-color");

const widgetDivHtml = document.querySelector(".widget");

const colorSpanHtml = document.querySelector(".color");

changeColorBtnHtml.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorSpanHtml.textContent = randomColor;
})