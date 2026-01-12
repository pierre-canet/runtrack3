document.addEventListener("keydown", function (event) {
  const textarea = document.getElementById("keylogger");
  const key = event.key;
  if (key.length === 1 && key >= "a" && key <= "z") {
    if (document.activeElement === textarea) {
      textarea.value += key + key;
    } else {
      textarea.value += key;
    }
  }
});
