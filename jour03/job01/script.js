const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const text = document.getElementById("text");

showButton.addEventListener("click", function () {
  text.style.display = "block";
});

hideButton.addEventListener("click", function () {
  text.style.display = "none";
});
