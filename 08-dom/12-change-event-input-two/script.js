/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("pass-one").addEventListener("input", () =>{
        let input = document.querySelector("input");
        //let max = input.setAttribute("minlength", 8);
        
        let value = document.getElementById("pass-one").value;
        let valueLength = value.length;

        let valide = document.getElementById("validity");
        if(valueLength >= 8){
            let nbre = 0;
            for(i = 0; i < valueLength; i++){
                if(!isNaN(value[i])){ // ! => false
                    nbre++
                }
            }
            if(nbre >= 2){
                valide.innerText = "Ok"
            } else {
                valide.innerText = "Pas ok"
            }
            //console.log(nbre)
        } else {
            valide.innerText = "Pas ok"
        }

    })
})();
