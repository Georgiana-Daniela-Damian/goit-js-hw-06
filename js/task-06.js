const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", handler);

function handler() {
  const currentLength = textInput.value.length;

  if (currentLength === 6) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
