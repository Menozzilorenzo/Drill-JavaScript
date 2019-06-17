/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        window.lib.getPosts((erreur,tableauArticles)=>{ // 2 parametres: erreur et un tableau; le getPosts() est comme un addevenetlistener()
            console.log(tableauArticles);
            // le tableau est deja crée precedemmement avec le window.lib et on le rappelle grace au getPosts()
        });
    })

})();
