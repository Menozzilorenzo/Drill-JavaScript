/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let balise = document.getElementsByTagName("img")[0]; // comme c'est mis en "tableau", sélectionner ce lui qu'on veut avec [0]
    let data = balise.getAttribute("data-hover");
    let src = balise.getAttribute("src");
    //console.log(src);
    balise.addEventListener("mouseover", () =>{
        balise.setAttribute("src", data);
    });
    balise.addEventListener("mouseout", () =>{
        balise.setAttribute("src", src);
    })
})();
