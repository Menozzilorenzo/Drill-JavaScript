/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let reponse = prompt("Tu veux du gâteau ?");
    if (reponse == "oui") {
        window.alert("Voilà un excellente réponse ;)");
    } else {
        window.alert("DU GATEAU, CA NE SE REFUSE PAS !!!!");
    }
})();
