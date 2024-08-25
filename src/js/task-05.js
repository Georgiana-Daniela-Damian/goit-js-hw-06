const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handler);

function handler() {
  if (nameInput.value) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
