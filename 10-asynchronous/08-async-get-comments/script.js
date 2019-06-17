/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        async function commentsCall(){
            await window.lib.getPosts().then((tableauArticles)=>{ // ici retirer les "erreur" car c'est une promesse
                console.log(tableauArticles);
                // le tableau est deja crée precedemmement avec le window.lib et on le rappelle grace au getPosts()
                tableauArticles.forEach(elem => { // boucle pour selectionner chaque element du tableau
                    window.lib.getComments(elem.id).then((comments) => { // on crée une propriété comments(getcomments()) a chaque element du tableau; on retire "erreur" car c'est une promesse
                        elem['comments'] = comments;
                    })
                })
            });
        };
        commentsCall();
        
    })
})();
