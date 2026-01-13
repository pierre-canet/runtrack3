<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Job 03</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <form id="filterForm">
        <input type="text" id="id" placeholder="ID">

        <input type="text" id="name" placeholder="Nom">

        <select id="type">
            <option value="">-- Type --</option>
            <option value="Fire">Feu</option>
            <option value="Water">Eau</option>
            <option value="Grass">Plante</option>
            <option value="Electric">Électrik</option>
            <option value="Poison">Poison</option>
        </select>

        <input type="button" id="filter" value="Filtrer">
    </form>

    <div id="result"></div>
    <script src="script.js"></script>
</body>

</html>