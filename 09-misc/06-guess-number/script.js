/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let valeurMin = 1;
    let valeurMax = 100;
    let test = 1;

    let nombre = Math.round(Math.random()* 99 + valeurMin);
    console.log(nombre);

    let chiffre = null;
    while(chiffre != nombre){
        chiffre = window.prompt("Entrez un nombre");
        if(chiffre < nombre){
            window.alert(`C'est plus et c'est votre ${test}ème essai`);
        } else if(chiffre > nombre){
            window.alert(`C'est moins et c'est votre ${test}ème essai`);
        }
        test++;
        console.log(test);
        if(chiffre == nombre){
            window.alert("Bravo");
        }
        
    }
    /* code créé lors d'une journée de consolidation le 27/06/19 */
})();
