let mot = ["B", "O", "N", "J", "O", "U", "R"];
let nbre = 0;
let trouve = ["", "", "", "", "", "", ""];
let test = 15;
let utilise = []

while(test > 0 && nbre != 7){
    console.log(trouve)
    let lettre = prompt("Donnez une lettre");
    if(utilise.indexOf(lettre) > -1 ){
        console.error("La lettre à déjà été entrée");
    } else {
        for(i = 0; i < mot.length; i++){
            if(lettre == mot[i]){
                trouve[i] = lettre;
                nbre++;
            }
        }
    }
    test--;
    console.log(test)
    if(nbre == 7){
        console.log("Bravo, vous avez gagné")
    }
    utilise.push(lettre);
}