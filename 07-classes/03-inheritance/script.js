/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name){
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {
        constructor(name){
            super(name);
            this.constructor.greeting = "miaou!";
        };
    };

    class Dog extends Animal {
        constructor(name){ // pas mettre greeting car variable deja definie
            super(name);
            this.constructor.greeting = "waouf!";
        }
    };

    document.getElementById("run").addEventListener("click", () =>{
        let chat = new Cat("Felix");
        let chien = new Dog("Rex");
        console.log(chat.sayHello());
        console.log(chien.sayHello());
    })
})();
