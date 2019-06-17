/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
* started at 09/05/2019ele
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
// your code here

    document.getElementById("run").addEventListener("click", () =>{
        window.lib.getPosts((erreur,tableauArticles)=>{ // 2 parametres: erreur et un tableau; le getPosts() est comme un addevenetlistener()
            console.log(tableauArticles);
            // le tableau est deja crée precedemmement avec le window.lib et on le rappelle grace au getPosts()
            tableauArticles.forEach(elem => { // boucle pour selectionner chaque element du tableau
                window.lib.getComments(elem.id, (error, comments) => { // on crée une propriété comments(getcomments()) a chaque element du tableau
                    elem['comments'] = comments;
                })
            })
        });
    })
    
    
    
})();
