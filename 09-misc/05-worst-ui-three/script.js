/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    /* aidé par balthazar */

    let target = document.getElementById("target");
    // timer n°1 -----------------------------------------------------------------------------------------------------------------------
    let one = document.getElementById("part-one");
    let buttonOne = document.getElementById("fix-part-one");
    let compteurOne = one.getAttribute("data-min");

    function timer1(){
        if(compteurOne >= one.getAttribute("data-max")){
            compteurOne = one.getAttribute("data-min");
            one.value = compteurOne;
        } else {
            compteurOne++;
            one.value = compteurOne;
        }
    }
    let interval1 = setInterval(timer1, 100);       
    let majOne = true;
    buttonOne.addEventListener("click", () =>{
        if(majOne){
            clearInterval(interval1);
            majOne = false;
        } else {
            interval1 = setInterval(timer1, 100);
            majOne = true;
        }
    })

    // timer n°2 ----------------------------------------------------------------------------------------------------------------------------
    let two = document.getElementById("part-two");
    let buttonTwo = document.getElementById("fix-part-two");
    let compteurTwo = two.getAttribute("data-min");

    function timer2(){
        if(compteurTwo >= two.getAttribute("data-max")){
            compteurTwo = two.getAttribute("data-min");
            two.value = compteurTwo;
        } else {
            compteurTwo++;
            
        }
        if(compteurTwo != 0 && compteurTwo < 10){
            compteurTwo = `0${compteurTwo}`;
        }
        two.value = compteurTwo;
    }
    let interval2 = setInterval(timer2, 100);       
    let majTwo = true;
    buttonTwo.addEventListener("click", () =>{
        if(majTwo){
            clearInterval(interval2);
            majTwo = false;
        } else {
            interval2 = setInterval(timer2, 100);
            majTwo = true;
        }
    })

    // timer n°3 ---------------------------------------------------------------------------------------------------------------------------
    let three = document.getElementById("part-three");
    let buttonThree = document.getElementById("fix-part-three");
    let compteurThree = three.getAttribute("data-min");

    function timer3(){
        if(compteurThree >= three.getAttribute("data-max")){
            compteurThree = three.getAttribute("data-min");
            three.value = compteurThree;
        } else {
            compteurThree++;
            
        }
        if(compteurThree != 0 && compteurThree < 10){
            compteurThree = `0${compteurThree}`;
        }
        three.value = compteurThree;
    }
    let interval3 = setInterval(timer3, 100);       
    let majThree = true;
    buttonThree.addEventListener("click", () =>{
        if(majThree){
            clearInterval(interval3);
            majThree = false;
        } else {
            interval3 = setInterval(timer3, 100);
            majThree = true;
        }
    })

    // timer n°4 ----------------------------------------------------------------------------------------------------------------------------
    let four = document.getElementById("part-four");
    let buttonFour = document.getElementById("fix-part-four");
    let compteurFour = four.getAttribute("data-min");

    function timer4(){
        if(compteurFour >= four.getAttribute("data-max")){
            compteurFour = four.getAttribute("data-min");
            four.value = compteurFour;
        } else {
            compteurFour++;
            
        }
        if(compteurFour != 0 && compteurFour < 10){
            compteurFour = `0${compteurFour}`;
        }
        four.value = compteurFour;
    }
    let interval4 = setInterval(timer4, 100);       
    let majFour = true;
    buttonFour.addEventListener("click", () =>{
        if(majFour){
            clearInterval(interval4);
            majFour = false;
        } else {
            interval4 = setInterval(timer4, 100);
            majFour = true;
        }
    })

    // target
    function numero(){
        target.innerHTML = `+${compteurOne}${compteurTwo}${compteurThree}${compteurFour}`;
    }
    setInterval(numero, 100);
})();
