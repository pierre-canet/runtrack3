window.addEventListener("scroll", function () {
  const footer = document.getElementById("footer");

  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;

  const scrollPercent = scrollTop / (bodyHeight - windowHeight);

  const red = Math.floor(scrollPercent * 255);
  const green = Math.floor((1 - scrollPercent) * 255);

  footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
});
