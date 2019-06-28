/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let chiffre = document.getElementById("target");
    let nombre = chiffre.innerText;
    chiffre.innerText = "";
    let nouveau = document.createElement("span");
    nouveau.innerText = nombre = "00";
    target.appendChild(nouveau);
    let i = localStorage.getItem("addition");

    document.getElementById("target").innerHTML = i;

    let addition = 0;
    document.querySelector("#increment").addEventListener("click", ()=>{

        if (i < 500) {
            i++;
        }
        document.getElementById("target").innerHTML = i;
        localStorage.setItem("addition", i);
    })
    /* code créé lors d'une journée de consolidation le 27/06/19 */
})();
