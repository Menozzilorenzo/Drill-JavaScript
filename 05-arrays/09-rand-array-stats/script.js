/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let tableau = []; // mettre tableau la car sinon les valeurs vont s'accumuler et ca va pas rester a 10 elements
        for(i = 0; i <= 9; i++){
            let random = Math.round(Math.random()* 99 + 1);
            tableau.push(random);
            document.getElementById(`n-${i + 1}`).innerHTML = tableau[i]; //i + 1 car le i commence à 0. ou alors j'aurais du faire 10 ligne en changeant à chaque fois (tableau[0], [1], ...)
        }

        console.log(tableau);

        let mini = Math.min(...tableau);
        document.getElementById("min").innerHTML = mini; // a la place de mettre nom variable, on aurait pu faire l'opération du dessus à cette place (ici)
        let maxi = Math.max(...tableau);
        document.getElementById("max").innerHTML = maxi;
        let somme = tableau.reduce((a,b) => a + b);
        document.getElementById("sum").innerHTML = somme;
        let moyenne = somme / 10;
        document.getElementById("average").innerHTML = moyenne;
    });
})();
