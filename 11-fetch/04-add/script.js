/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function addingHero(){
        let adding = {
            method: 'POST',
            data:{
                nom: document.getElementById("hero-name").value,
                alterEgo: document.getElementById("hero-alter-ego").value,
                abilities: document.getElementById("hero-powers").value,
            },
            credentials: 'include',
            headers: {}
        };

        fetch('http://localhost:3000/heroes')
        .then(response => response.json)
        .then(data => {
            console.log(data)
        })
        .catch(error =>{
            console.error(error)
        })
    };

    document.getElementById("run").addEventListener("click", () =>{
        addingHero();
    })
})();
