/* exo 1 objets PNJ 
let character = {
    name : "Franklin",
    age : 29,
    items_to_give : ["couteau", "fiole", "dent", "oeil"],
};

 // 1ère partie //
for(let key in character){
    console.log(character[key])
}

let giveItem = character.items_to_give[Math.floor(Math.random()*character.items_to_give.length)];

console.log(giveItem);
*/
// ------------------------------------------------------------------
/* exo 2 objets shop 
let item_to_sell = [
    {
        title : " Epée Excalibur",
        physic : 12,
        magic : 7,
        minLevel : 5,
        available : true,
    },
    {
        title : "Hâche Pourfendrice d'âme",
        physic : 17,
        magic : 2,
        minLevel : 10,
        available : true,
    },
    {
        title : "Sceptre Orfèvre",
        physic : 2,
        magic : 17,
        minLevel : 13,
        available : true,
    },
    {
        title : "Arc Legolas",
        physic : 16,
        magic : 11,
        minLevel : 16,
        available : true,
    },
    {
        title : "Lance Amstrong",
        physic : 16,
        magic : 1,
        minLevel : 7,
        available : true,
    }
]; */

/* afficher tous objets
for(let i = 0; i < item_to_sell.length; i++){
    console.log(item_to_sell[i]);
} */

/* afficher objets disponible
for(let i = 0; i < item_to_sell.length; i++){
    if(item_to_sell[i].available == true){
        console.log(item_to_sell[i]);
    }
} */

/* afficher objets lvl.10 min
for(let i = 0; i < item_to_sell.length; i++){
    if(item_to_sell[i].minLevel >= 10){
        console.log(item_to_sell[i]);
    }
} */
// ------------------------------------------------------------------
/* exo 3 objets personnage */
let mainCharacter = {
    "name" : "Attila_the_Hun",
    "level" : 150,
    "life" : 10000,
}


let weapon = {
    "name" : "Sabre sacré",
    "damage" : 500,
}

function attack() {
    let force = mainCharacter.name + " attaque avec son " + weapon.name + " les dégats sont de ";
    let forceDaryl = mainCharacter.level * weapon.damage; 
    console.log(force + forceDaryl + " points.");
}
attack();