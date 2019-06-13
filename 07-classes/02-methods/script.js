/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        };
        sayHello(){
            console.log(`Hello, ${this.firstName} ${this.lastName} !`);
            // return `Hello, ${this.firstName} ${this.lastName} !`;
        }
    }

    document.getElementById("run").addEventListener("click", () =>{
        let instance = new Person("Lorenzo", "Menozzi");
        instance.sayHello(); // pas besoin de mettre console.log car c'est comme si on rappelait une fonction (on a deja mis console.log dans le sayhello)
    })
})();
