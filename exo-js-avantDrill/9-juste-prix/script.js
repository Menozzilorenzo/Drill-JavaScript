/* exo juste-prix */
let test = 10;
let valeurMin = 20;
let valeurMax = 80;

let justePrix = Math.round(Math.random()* 60 + valeurMin);
console.log(justePrix);

let prix = null;
while(test > 0 && prix != justePrix){
    prix = window.prompt("Quel est votre prix ?");
    if(prix < justePrix){
        window.alert("C'est plus");
    } else if(prix > justePrix){
        window.alert("C'est moins");
    }
    test--;
    console.log(test);
    if(prix == justePrix){
        window.alert("Bravo");
    }
    if(test == 0){
        window.alert("Dsl vous n'avez plus d'essais")
    }
}