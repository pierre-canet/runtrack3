function jourtravaille(date) {
  const jour = date.getDate().toString().padStart(2, '0');
  const mois = (date.getMonth() + 1).toString().padStart(2, '0');
  const annee = date.getFullYear();
  const dateFormatee = `${annee}-${mois}-${jour}`;

  const joursFeries2020 = [
    "2020-01-01", // Jour de l’an
    "2020-04-13", // Lundi de Pâques
    "2020-05-01", // Fête du travail
    "2020-05-08", // Victoire 1945
    "2020-05-21", // Ascension
    "2020-06-01", // Lundi de Pentecôte
    "2020-07-14", // Fête nationale
    "2020-08-15", // Assomption
    "2020-11-01", // Toussaint
    "2020-11-11", // Armistice
    "2020-12-25"  // Noël
  ];

  const jourSemaine = date.getDay();

  if (joursFeries2020.includes(dateFormatee)) {
    console.log(`Le ${date.toLocaleDateString('fr-FR')} est un jour férié`);
  } else if (jourSemaine === 0 || jourSemaine === 6) {
    console.log(`Non, ${date.toLocaleDateString('fr-FR')} est un week-end`);
  } else {
    console.log(`Oui, ${date.toLocaleDateString('fr-FR')} est un jour travaillé`);
  }
}

jourtravaille(new Date("2020-01-01")); // jour férié
jourtravaille(new Date("2020-06-09")); // jour travaillé
jourtravaille(new Date("2020-06-27")); // week-end

