/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let increment = document.querySelectorAll("button");

    increment.forEach(function(e){
        e.addEventListener("click", event =>{
            
            let minimum = event.target.getAttribute("data-min");
            let maximum = event.target.getAttribute("data-max");
            let valeur = event.target.innerHTML;
            
            if(valeur != maximum){
                valeur++
            } else{
                valeur = minimum
            };
            if(valeur < 10){
                valeur = `0${valeur}`
            };
            event.target.innerHTML = valeur;
            
            let target = document.getElementById("target");
            let one = document.getElementById("part-one").innerHTML;
            let two = document.getElementById("part-two").innerHTML;
            let three = document.getElementById("part-three").innerHTML;
            let vivaLalgerie = document.getElementById("part-four").innerHTML;
            target.innerHTML = `+${one}${two}${three}${vivaLalgerie}`;
        })
    })

    /* code fini avec l'aide de frederic le 28/06/19 */
})();
