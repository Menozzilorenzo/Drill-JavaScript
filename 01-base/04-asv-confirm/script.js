/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function retry(){
        let age = prompt("Quel âge avez-vous ?");
        let sexe = prompt("Quel est votre sexe ?");
        let ville = prompt("Où habitez-vous ?");
        info(age, sexe, ville); // on a mis la fonction info dans l'autre fonction parce qu'on ne pouvait pas recevoir les infos rentrées 
    };
    retry();
    function info(age, sexe, ville){
        let reponse = confirm(`Vous avez ${age} ans, vous habitez à ${ville} et vous êtes un ${sexe}.`);
        if( reponse == true ){
            alert("OK, vous avez bien confirmé !");
        } else if( reponse == false){
            //document.location.reload();
            retry();
        }
    };

})();
