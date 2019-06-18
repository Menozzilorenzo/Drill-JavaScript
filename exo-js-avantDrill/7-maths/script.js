/* exo maths min. et max.
let plusPetit = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
let plusGrand = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
let addition = plusPetit + plusGrand

console.log(addition);
*/
// -----------------------------------------------------------
/* exo maths aléatoire 1 
let floatBateau = 10.4;
let couleBateau = Math.floor(floatBateau);
let voleBateau = Math.ceil(floatBateau);

console.log(voleBateau);
*/
// ----------------------------------------------------------
/* exo maths aléatoire 2
let random1 = Math.random()* 50 + 50
let random2 = Math.round(Math.random());
let random3 = Math.round(Math.random()*10);

console.log(random3);
*/
// ---------------------------------------------------------
/* exo maths aléatoire 3 */
let perso = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
let randomTableau = perso[Math.floor(Math.random()*perso.length)];

console.log(randomTableau);