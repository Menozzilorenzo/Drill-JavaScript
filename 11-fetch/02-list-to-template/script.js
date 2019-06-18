/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function fetchApi(){
        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(data => {
            let template = document.getElementById("tpl-hero")
            let item = template.content.querySelector(".hero")
            
            for(i = 0; i < data.length; i++){
                let clone = document.importNode(item, true); 
                clone.getElementsByClassName("name")[0].innerHTML = data[i].name;
                clone.getElementsByClassName("alter-ego")[0].innerHTML = data[i].alterEgo;
                clone.getElementsByClassName("powers")[0].innerHTML = data[i].abilities;
                let cible = document.getElementById("target");
                cible.appendChild(clone); // on le met là car tout est dans le then
            };
        })
        .catch(error => {
            console.error(error)
        });
    };
    document.getElementById("run").addEventListener("click", () =>{
        fetchApi();
    });
})();
