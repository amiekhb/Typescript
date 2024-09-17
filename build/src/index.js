"use strict";
console.log("Hello Typesript");
const num = 20;
const str = "Hello";
const isBool = true;
console.log("Num value", num);
console.log("Str value", str);
console.log("Boolean value", isBool);
function add(a, b) {
    return a + b;
}
const y = add(100, 100);
console.log("ADD", y);
const add2 = (a, b) => {
    return a + b;
};
const myPrint = (text) => {
    console.log("Hello", myPrint);
};
const s = add2(200, 500);
myPrint("Welcome");
const p1 = {
    name: "Naraa",
    age: 20,
    huis: "em",
};
const arr = [];
console.log(arr);
console.log(p1);
const st = "Hello";
st.toLocaleLowerCase();
const t = {
    name: "Uka",
    age: 22,
    huis: "er",
    lesson: "JS",
};
//oop
class Person {
    constructor(name) {
        this.name = "";
        this.age = 0;
        this.regNum = "";
        this.name = name;
    } //person
    walk() { }
    think() { }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
        this.lesson = "";
    }
}
const p9 = new Person("Naraa"); //instance
const p8 = new Person("Saraa");
const t8 = new Teacher("Uka");
p9.name;
p9.walk();
p9.name;
p8.walk();
