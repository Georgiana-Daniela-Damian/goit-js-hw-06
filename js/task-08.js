const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handler);
function handler(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Toate câmpurile trebuie completate!");
    return;
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
