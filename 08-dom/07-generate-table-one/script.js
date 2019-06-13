/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let tableau = document.getElementById("target");
    let tag = document.createElement("table");
    tableau.appendChild(tag);
    let test = document.getElementsByTagName("table")[0];
    console.log(test);
    let ro = 10;
    let col = 1;
    function table(){
        for(let r = 0; r < ro; r++){
            let x = document.createElement("tr"); //mettre tag name quand on crée un element
            test.appendChild(x); // faire appenChild(variable qui comprend le createElement)
            for(let c = 0; c < col; c++){
                let y = document.createElement("td");
                x.appendChild(y);
            }
        }
    }
    table();
})();
