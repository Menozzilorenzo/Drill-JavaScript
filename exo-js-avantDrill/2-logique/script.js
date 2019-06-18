/*  exercice 1 logique
let langueFr = "Bonjour tout le monde";
let langueEn = "Hello World";
let langueEs = "Hola, Mundo";


let message = prompt("Enter your language: fr, es or en");

if (message == "fr") {
    console.log(langueFr);
} else if (message == "en"){
    console.log(langueEn);
}   else if (message == "es"){
    console.log(langueEs);
}    else{
        console.log("error");
    } */

/* exercice 2 logique
let a = "Vous avez le Rang A";
let b = "Vous avez le Rang B";
let c = "Vous avez le Rang C";

let score = prompt("Quel est votre score ?");

if (score >= 90){
    console.log(a);
} else if (score <=50){
    console.log(c);
} else if (score <90){
    console.log(b);
} */

/* exercice 3 logique */
let sing = "pomme";
let plu = "pommes";

let result = prompt("Combien de pommes as-tu ?");

if (result >= 2){
    console.log("je possède" + " " + result + " " + plu);
} else if (result < 2){
    console.log("je possède" + " " + result + " " + sing);
}