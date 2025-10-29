function sommenombrespremiers(i, j){
    // Fonction interne pour tester si un nombre est premier
    function estPremier(n) {
        if (n < 2) return false;
        for (let k = 2; k <= Math.sqrt(n); k++) {
        if (n % k === 0) return false;
        }
        return true;
    }

    // Vérifie les deux nombres
    if (estPremier(i) && estPremier(j)) {
        return i + j;
    } else {
        return false;
    }

}
console.log(sommenombrespremiers(2, 4))