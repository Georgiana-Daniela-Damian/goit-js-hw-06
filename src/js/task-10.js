function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement("div");
    boxes.append(divElement);
    divElement.style.width = size + "px";
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.height = size + "px";

    size += 10;
  }
  return;
}

createBtn.addEventListener("click", handler);
function handler() {
  createBoxes(input.value);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
