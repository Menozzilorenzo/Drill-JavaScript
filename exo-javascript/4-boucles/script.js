/* exo boucle pair impair
for(let i = 0; i < 21; i++){
    if (i % 2){
        console.log(i , "est impair")
    } else {
        console.log(i , "est pair");
    }
}
*/

/* exo boucle multiplication table
let x9 = "*9";
for(let i = 0; i < 11; i++){
    console.log(i + x9 + "=" + i*9);
}
*/

/* exo boucle assigner grades
for(let i = 0; i < 101; i++){
    console.log(i);
    if (i >= 90){
        console.log("vous avez le grade A");
    } else if (i <= 64){
        console.log("vous avez le grade F");
    } else if (i <= 69){
        console.log("vous avez le grade D");
    } else if (i <= 79){
        console.log("vous avez le grade C");
    } else if (i <= 89){
        console.log("vous avez le grade B");
    }
}
*/

let height = 5;
let pyramide = "";
for(let i = 1; i <= height ; i++){
    pyramide += "*" /* pyramide = pyramide + "*" */
    console.log(pyramide);
}

/* autre facon pyramide
let i = 1
while(i < height){
    pyramide += "*"
    console.log(pyramide)
    i++
}
*/