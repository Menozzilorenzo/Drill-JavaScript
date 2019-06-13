/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let first = document.getElementById("pass-one").addEventListener("input", () =>{
        let input = document.querySelector("input");
        let max = input.setAttribute("maxlength", 10);
        
        let value = document.getElementById("pass-one").value;
        let valueLength = value.length;

        let compteur = document.getElementById("counter");
        compteur.innerText = valueLength + "/10";
    })
})();
