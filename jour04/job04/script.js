const updateButton = document.getElementById("update");
const tableBody = document.getElementById("usersTable");

updateButton.addEventListener("click", () => {
  fetch("users.php")
    .then((response) => response.json())
    .then((users) => {
      tableBody.innerHTML = "";
      users.forEach((user) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                            <td>${user.id}</td>
                            <td>${user.nom}</td>
                            <td>${user.prenom}</td>
                            <td>${user.email}</td>
                        `;
        tableBody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Erreur :", error);
    });
});
