function citation() {
  const article = document.getElementById("citation");
  console.log(article.textContent);
}

const button = document.getElementById("button");
button.addEventListener("click", citation);
