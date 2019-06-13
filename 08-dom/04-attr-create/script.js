/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let image = document.getElementById("source").getAttribute("data-image"); // j'aurais pu separer les 2 actions de cette ligne
    let target = document.querySelector("#target"); // d'abord se mettre dans la balise où on veut en créer une
    let photo = document.createElement("img"); // créer la balise souhaitée
    photo.setAttribute("src", image); // d'abord ce que tu veux créer et après sa valeur
    target.appendChild(photo); // on lie la balise qu'on a créée avec celle déjà existante
    document.getElementById("source").remove(); // selectionner ce qu'on veut supprimer puis appliquer un remove()

})();
