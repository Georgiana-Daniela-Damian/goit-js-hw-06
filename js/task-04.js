const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const spanValue = document.querySelector("#value");
let counterValue = 0;

const incrementValue = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};

const decrementValue = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementValue);
decrementBtn.addEventListener("click", decrementValue);
