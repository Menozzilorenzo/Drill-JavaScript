/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        window.lib.getPersons().then((tableauArticles)=>{ // 2 parametres: erreur et un tableau; le getPosts() est comme un addevenetlistener()
            console.log(tableauArticles);
            // le tableau est deja crée precedemmement avec le window.lib et on le rappelle grace au getPosts()
            /*if(erreur){ // si yen a avant ca devient true, si yen a pas ca devient false
                console.error("erreur")
            } else {
                console.log(tableauArticles) // si on decide d'appliquer cette methode, il faudra retirer le console.log() plus haut
            }*/
        });
    })
})();
