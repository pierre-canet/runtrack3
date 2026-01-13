const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const postalCode = document.getElementById("postal_code");

firstname.addEventListener("input", () => {
  if (firstname.value.length < 2) {
    showError(
      "firstnameError",
      "Le prénom doit contenir au moins 2 caractères"
    );
  } else {
    clearError("firstnameError");
  }
});

lastname.addEventListener("input", () => {
  if (lastname.value.length < 2) {
    showError("lastnameError", "Le nom doit contenir au moins 2 caractères");
  } else {
    clearError("lastnameError");
  }
});

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
    showError("passwordError", "8 caractères minimum requis");
  } else {
    clearError("passwordError");
  }
});

address.addEventListener("input", () => {
  if (address.value.length < 5) {
    showError("addressError", "Adresse trop courte");
  } else {
    clearError("addressError");
  }
});

postalCode.addEventListener("input", () => {
  if (!/^\d{5}$/.test(postalCode.value)) {
    showError("postalCodeError", "Code postal invalide (5 chiffres)");
  } else {
    clearError("postalCodeError");
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}
