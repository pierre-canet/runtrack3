const images = [
  { name: "partie1", src: "assets/images/arc1.png" },
  { name: "partie2", src: "assets/images/arc2.png" },
  { name: "partie3", src: "assets/images/arc3.png" },
  { name: "partie4", src: "assets/images/arc4.png" },
  { name: "partie5", src: "assets/images/arc5.png" },
  { name: "partie6", src: "assets/images/arc6.png" },
];

const correctOrder = images.map((img) => img.name);
const source = document.getElementById("source");
const target = document.getElementById("target");
const message = document.getElementById("message");
const shuffleButton = document.getElementById("shuffle");

function displayImages(array) {
  source.innerHTML = "";
  target.innerHTML = "";
  message.textContent = "";

  array.forEach((img) => {
    const image = document.createElement("img");
    image.src = img.src;
    image.dataset.name = img.name;
    image.addEventListener("click", function () {
      target.appendChild(this);
      checkWin();
    });
    source.appendChild(image);
  });
}

function shuffleImages() {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  displayImages(shuffled);
}

function checkWin() {
  const imgs = target.querySelectorAll("img");
  if (imgs.length !== correctOrder.length) return;

  const currentOrder = Array.from(imgs).map((img) => img.dataset.name);

  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
    message.textContent = "Vous avez gagné 🎉";
  } else {
    message.textContent = "Ordre incorrect ❌";
  }
}

shuffleButton.addEventListener("click", shuffleImages);
