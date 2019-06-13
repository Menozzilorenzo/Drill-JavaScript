/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        let random1 = Math.round(Math.random() * birds.length);
        let table = Array.from(adjectives); // permet de tranformer le set en array
        let random2 = Math.round(Math.random() * table.length);
        //console.log(random1, random2);
        let mot ;
        if(birds[random1].fem === true){
            mot = table[random2] += "e"
        } else {
            mot = table[random2];
        }
        document.getElementById("target").innerHTML = (`${birds[random1].name} ${mot}`);
    });
})();
