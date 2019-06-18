// exo 1 manipulation classes
let body = document.body
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");
let firstParagraph = document.getElementById("first-paragraph");
firstParagraph.classList.remove("bg-lime", "gray");
firstParagraph.classList.add("aqua");
let silver = document.querySelectorAll(".bg-silver");
for(let i = 0; i < silver.length; i++){
    silver[i].classList.remove("bg-silver")
    silver[i].classList.add("bg-teal");
}
let blockquote = document.querySelector("blockquote");
blockquote.classList.add("bg-white");
blockquote.classList.add("bg-white");
// -------------------------------------------------------------------------------------------------------------------
/* exo 2 selecteur css */
let table = document.querySelector("#my-table");
table.classList.add("bg-purple");
let paragraph = document.querySelectorAll("p");
for(let i = 0; i < paragraph.length; i++){
    paragraph[i].classList.add("shadow");
}
// --------------------------------------------------------------------------------------------------------------------
/* exo 3 */
let pre = document.querySelector("pre");
pre.style.color = "darkgrey";
pre.style.backgroundColor = "green";
pre.style.borderTop = "3px solid red";
pre.style.borderBottom = "3px solid red";
let h3 = document.querySelector("h3");
h3.innerHTML = "<em>Itelic title ! yeah !</em>";
let h2 = document.querySelector("h2");
h2.innerHTML = "<strong>HTML doens't work !</strong>";
// --------------------------------------------------------------------------------------------------------------------
/* exo 4 création d'elements */
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
ul.appendChild(li);
let lia = document.querySelector("ul").querySelector("a");
lia.style.color = "red";
// ---------------------------------------------------------------------------------------------------------------------
/* exo 4bis création et suppresion de plusieurs elements */
let ol = document.querySelector("ol");
while(ol.firstChild){
    ol.removeChild(ol.firstChild);
};
let tableau = ["Silent Teacher","Code Monkey", "CodeCombat"];
for( let a = 0; a < tableau.length; a++){
    let each = document.createElement("li");
    each.innerHTML = tableau[a];
    ol.appendChild(each);
};
