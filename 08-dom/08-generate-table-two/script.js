/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let test = document.getElementById("target");
    let tag = document.createElement("table");
    test.appendChild(tag);
    let tableau = document.getElementsByTagName("table")[0];
    console.log(tableau);
    let ro = 10;
    let col = 10;
    function table(){
        for(r = 1; r <= ro; r++){
            let a = document.createElement("tr");
            tableau.appendChild(a);
            let result = r; // on fait les tables de multipli en lien avec les boucles (ex: r)
            for (c = 1; c <= col; c++){
                let b = document.createElement("td");
                let resultat = result * c; // je multiplie la table avec le numero de la colonne
                b.innerHTML = resultat; // on aurait pu faire directement b.innerHTML = r * c
                a.appendChild(b);
            }
        }
    }
    table();

    /*for(i = 1; i <= 10; i++){
        let result = i;

        console.log(result);
        for(y = 2; y <= 10; y++){
            let resultat = result * y;
            console.log(resultat);
        }
    }*/
})();
