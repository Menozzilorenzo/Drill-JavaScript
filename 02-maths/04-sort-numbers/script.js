/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let nbrs = document.getElementById("numbers").value;
    let nbr = nbrs.split(`,`); // une virgule entre parenthèses car c'est cet élément qui sépare les valeurs
    console.log(nbr[0]);
    

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        nbr.sort( function(a,b){
        return a - b
    });
    alert(nbr);
    });
})();
 
// il faut utiliser le sort()
// mais d'abord il faut separer les chaines de valeurs , et ensuite les mettre dans tableau.
// renseignements sur -> split()