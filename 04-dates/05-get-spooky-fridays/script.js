/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    document.getElementById("run").addEventListener("click", () => {
        let donnee = document.getElementById("year").value; // ca va aller rechercher l'annee que l'on rentre
        let result = []; // tableau vide pour y insérer les mois avec vendredi 13
        for(month = 1; month < 12; month++){ // boucle sur les mois pour rechercher les vendredi 13
            let date = new Date(donnee, month, 13); // on y spécifie les jours qui sont des 13 (format: année, mois, jour)
            if(date.getDay() === 5){ // si le 13 correspond à un vendredi,
                result.push(mois[month]); // on le pousse dans le tableau
            }
        };
        alert(result); // on affiche le tableau avec les résultats
    });
})();