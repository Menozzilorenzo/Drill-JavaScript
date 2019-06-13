/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById("run").addEventListener("click", () =>{
        let one = document.getElementById("pass-one").value;
        let two = document.getElementById("pass-two").value;
        if(one === two){
            window.alert("OK, ca correspond");
        }
        if(one != two) {
            let inputs = document.querySelectorAll("input");
            for(i = 0; i < inputs.length; i++){
                inputs[i].style.borderColor = "red";
            }
        }
    })
})();
