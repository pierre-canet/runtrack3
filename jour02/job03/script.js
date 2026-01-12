function addone() {
  const compteur = document.getElementById("compteur");
  compteur.textContent = parseInt(compteur.textContent) + 1;
}
const button = document.getElementById("button");
button.addEventListener("click", addone);
