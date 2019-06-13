/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    function chiffre(){
        let chiffre1 = document.getElementById("op-one").value;
        let chiffre2 = document.getElementById("op-two").value;
        return [chiffre1, chiffre2] // mettre dans un tableau car il ne retourne qu'une seule valeur
    };
    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let addition = chiffre();
        alert(parseInt(addition[0]) + parseInt(addition[1])); // on appele la variable qui contient la fonction, et non la fonction directement 
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform a substraction
        let soustraction = chiffre();
        alert(parseInt(soustraction[0]) - parseInt(soustraction[1]));
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform a multiplication
        let multipli = chiffre();
        alert(parseInt(multipli[0]) * parseInt(multipli[1]));
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform a division
        let division = chiffre();
        alert(parseInt(division[0]) / parseInt(division[1]));
    });
})();
