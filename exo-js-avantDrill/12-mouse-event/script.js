let hover = document.querySelectorAll(".hoverMe");
for(let i = 0; i < hover.length; i++){
    hover[i].addEventListener("mouseover", function(){
        this.style.display = "none";
    })
};
let click = document.getElementById("reset");
click.addEventListener("click", function(){
    for(let i = 0; i < hover.length; i++){
        hover[i].style.display = "block";
    }
});
window.addEventListener("mousemove", function(e){
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById("axe-x").innerHTML = x + " x";
    document.getElementById("axe-y").innerHTML = y + " y";
});