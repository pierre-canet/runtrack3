const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    showError("emailError", "Email invalide");
  } else {
    clearError("emailError");
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    showError("passwordError", "Mot de passe trop court");
  } else {
    clearError("passwordError");
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}
