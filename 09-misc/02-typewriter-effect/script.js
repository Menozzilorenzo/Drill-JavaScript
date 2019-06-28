/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let texte = document.getElementById("target");
    let nouveau = texte.innerText; // on place le texte dans une nouvelle variable et placer le contenu dans target et eviter un conflit; texte dans texte
    let i = 0;
    let vitesse = 80;
    texte.innerHTML = " ";

    function typeWriter(){
        if(i < nouveau.length){
            texte.innerHTML += nouveau.charAt(i);
            i++;
            setTimeout(typeWriter, vitesse);
        }
    }
    typeWriter();
    
    /* code créé lors d'une journée consolidation le 27/06/19
    */
})();
