
function Person(name) {
    this.name = name;
};


var p1 = new Person("John");
var p2 = new Person("Rachel");

console.log(p1.name); 
console.log(p2.name); 


class Person {

    constructor(name) {
        this.name = name;
    };
};


let p1 = new Person("John");
let p2 = new Person("Rachel");


console.log(p1.name); 
console.log(p2.name);  