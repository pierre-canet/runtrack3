const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let index = 0;
document.addEventListener("keydown", function (event) {
  if (event.key === konamiCode[index]) {
    index++;
    if (index === konamiCode.length) {
      document.body.classList.add("konami");
      index = 0;
    }
  } else {
    index = 0;
  }
});
