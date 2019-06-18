let character = document.getElementById("character");
document.addEventListener("keydown", function(touche){
    //console.log(touche.key)

    // (touche.key) car on doit aller rechercher la valeur du "tableau" que l'on doit comparer.
    switch (touche.key) {
        case "0":
            character.style.backgroundColor = "blue"
            break;
        case "1":
            character.style.backgroundColor = "brown"
            break;
        case "2":
            character.style.backgroundColor = "red"
            break;
        case "3":
            character.style.backgroundColor = "green"
            break;
        case "4":
            character.style.backgroundColor = "yellow"
            break;
        case "5":
            character.style.backgroundColor = "orange"
            break;
        case "6":
            character.style.backgroundColor = "purple"
            break;
        case "7":
            character.style.backgroundColor = "gray"
            break;
        case "8":
            character.style.backgroundColor = "silver"
            break;
        case "9":
            character.style.backgroundColor = "teal"
            break;
        default:
            break;
    }
});
// --------------------------------------------------------------------------------------------------------------------

let haut = document.getElementById("up");
let bas = document.getElementById("down");
let gauche = document.getElementById("left");
let droite = document.getElementById("right");

document.addEventListener("keydown", function(event){
    let fleche = event.key;
    switch (fleche) {
        case "ArrowUp":
            haut.classList.add("highlight");
            break;
        case "ArrowDown":
            bas.classList.add("highlight");
            break;
        case "ArrowLeft":
            gauche.classList.add("highlight");
            break;
        case "ArrowRight":
            droite.classList.add("highlight");
            break;
        default:
            break;
    }
});

document.addEventListener("keyup", function(event){
    let fleche = event.key;
    switch (fleche) {
        case "ArrowUp":
            haut.classList.remove("highlight");
            break;
        case "ArrowDown":
            bas.classList.remove("highlight");
            break;
        case "ArrowLeft":
            gauche.classList.remove("highlight");
            break;
        case "ArrowRight":
            droite.classList.remove("highlight");
            break;
        default:
            break;
    }
});


// autre façon de faire, chaque touche a la fois
/* let haut = document.getElementById("up");
document.addEventListener("keydown", function(event){
    let fleche = event.key;
    console.log(fleche);
    switch (fleche) { //(fleche) car nom variable
        case "ArrowUp":
            haut.classList.add("highlight");
            break;
    
        default:
            break;
    }

});
document.addEventListener("keyup", function(event){
    let fleche = event.key;
    switch (fleche) {
        case "ArrowUp":
            haut.classList.remove("highlight");
            break;
    
        default:
            break;
    }
})
*/
