/* exo tableaux addition
let nombre = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
for(i = 0; i < nombre.length; i++){
    total += (nombre[i]);
}
console.log(total)
*/

/* exo tableau acteurs test
let text = function(acteurName){
    return "Le" + " " + (nbre) + " " + "est" + " " + acteurName;
}
let acteur = ["DiCaprio", "Smith", "Downey-Jr"];
let nbre = ["premier", "deuxième", "troisième"];
for(i = 0; i < acteur.length; i++){
    let phrase = text(acteur[i]);
    console.log(phrase);
}
for(i = 0; i < nbre.length; i++);
*/

/* exo tableaux acteur
let acteurs = ["DiCaprio", "Smith", "Downey-Jr"];

for (let i = 0; i < acteurs.length; i++){
total = "le numero" + " " + [i + 1] + " " + "est" + " " + acteurs[i];
console.log(total)
}
*/

/* exo tableux clone */
let marioBros = ["Mario", "Luigi", "Peach"];
let clone = marioBros.slice();
console.log(marioBros);
let total = clone.push("Bowser");
console.log(clone);
