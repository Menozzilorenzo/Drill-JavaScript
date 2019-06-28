/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async function(){
        let supprime = await fetch("http://localhost:3000/heroes/" + document.getElementById("hero-id").value, {
            method: "delete",
        })
        console.log(supprime)
    });
    /* code fini lors d'une journée de consolidation le 27/06/19 */
})();
