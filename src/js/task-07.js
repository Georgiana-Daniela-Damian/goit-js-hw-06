const size = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

size.addEventListener("input", handler);

function handler() {
  const fontSize = this.value + "px";
  span.style.fontSize = fontSize;
}
