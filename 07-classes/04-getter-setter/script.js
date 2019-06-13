/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get name(){ // il vient quand tu l'appelle, ca retourne les valeurs 
            return this.firstName + " " + this.lastName; // (`${this.firstName} ${this.lastName}`)
        }
        set name(nomComplet){ // il vient quand tu modifie une des valeurs
            nomComplet = nomComplet.split(` `); // on divise la chaine de caracteres (ici par un espace)
            this.firstName = nomComplet[0]; // avec le split ca devient un tableau, ensuite on transmet les valeurs dans les variables que l'on veut
            this.lastName = nomComplet[1];
        }
    }

    document.getElementById("run").addEventListener("click", () =>{
        let nom = new Person("Lorenzo", "Menozzi"); // argument pour constructor
        console.log(nom.name); // -> get name
        nom.name = "Rex Cesar" // on change les valeurs pour set name (une seule chaine de caracteres complet)
        console.log(nom.name); // -> get name
    })

})();
