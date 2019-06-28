/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let word = document.getElementById("target");
    let lettre = word.innerText.split('');
    console.log(lettre);
    let size = ["60%", "80%", "100%", "120%", "140%"];
    let start = 0;
    word.innerText = " ";
    
    for(let i = 0; i < lettre.length; i++){ // boucle sur ce qu'on a spité
        let nouveau = document.createElement("span");
        nouveau.innerHTML = lettre[i];
        nouveau.style.fontSize = size[start];
        start++;
        if(start === size.length){
            size.reverse(); // fonction native qui permet de repartir dans l'autre sens dans un tableau
            start = 0;
        }
        word.appendChild(nouveau); // associe les lettres a la balise

    }
    /* code créé lors d'un journée de consolidation, le 27/06/2019 */
})();
