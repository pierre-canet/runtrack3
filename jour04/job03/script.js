const filterButton = document.getElementById("filter");
const resultDiv = document.getElementById("result");

filterButton.addEventListener("click", () => {
  const idValue = document.getElementById("id").value;
  const nameValue = document.getElementById("name").value.toLowerCase();
  const typeValue = document.getElementById("type").value;
  fetch("pokemon.json")
    .then((response) => response.json())
    .then((pokemons) => {
      resultDiv.innerHTML = "";
      const filteredPokemons = pokemons.filter((pokemon) => {
        return (
          (idValue === "" || pokemon.id == idValue) &&
          (nameValue === "" ||
            pokemon.name.french.toLowerCase().includes(nameValue)) &&
          (typeValue === "" || pokemon.type.includes(typeValue))
        );
      });
      if (filteredPokemons.length === 0) {
        resultDiv.textContent = "Aucun Pokémon trouvé.";
        return;
      }
      filteredPokemons.forEach((pokemon) => {
        const p = document.createElement("p");
        p.textContent = `#${pokemon.id} - ${
          pokemon.name.french
        } (${pokemon.type.join(", ")})`;
        resultDiv.appendChild(p);
      });
    })
    .catch((error) => {
      console.error("Erreur lors du fetch :", error);
    });
});
