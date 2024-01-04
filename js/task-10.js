function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDivHtml = document.getElementById("controls");
const createBtnHtml = controlsDivHtml.querySelector("button[data-create]");
const destroyBtnHtml = controlsDivHtml.querySelector("button[data-destroy]");
const boxesDivHtml = document.getElementById("boxes");

destroyBtnHtml.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesDivHtml.innerHTML = "";
}

createBtnHtml.addEventListener("click", () => {
  const amount = Number(controlsDivHtml.querySelector("input").value);
  createBoxes(amount);
});

function createBoxes(amount) {
  const boxSizeHtml = 30;
  const fragmentHtml = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const sizeHtml = boxSizeHtml + i * 10;
    const divHtml = document.createElement("div");
    divHtml.style.cssText = `height: ${sizeHtml}px; width: ${sizeHtml}px; background-color: ${getRandomHexColor()}`;

    fragmentHtml.appendChild(divHtml);
  }

  boxesDivHtml.appendChild(fragmentHtml);
}

