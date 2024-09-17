console.log("Hello Typesript");

const num: number = 20;
const str: string = "Hello";
const isBool: boolean = true;

console.log("Num value", num);
console.log("Str value", str);
console.log("Boolean value", isBool);

function add(a: number, b: number): number {
  return a + b;
}

const y: number = add(100, 100);
console.log("ADD", y);

const add2 = (a: number, b: number): number => {
  return a + b;
};

const myPrint = (text: string): void => {
  console.log("Hello", myPrint);
};

const s = add2(200, 500);
myPrint("Welcome");

type HuisType = "er" | "em";
type StringOrNumber = String | Number;

type PersonType =
  | {
      name: string;
      age: number;
      huis: HuisType;
      hairColor?: string;
    }
  | string;

const p1: IPerson = {
  name: "Naraa",
  age: 20,
  huis: "em",
};

type myArray = (string | number)[];

const arr: myArray = [];
console.log(arr);
console.log(p1);

const st = "Hello";
st.toLocaleLowerCase();

interface IPerson {
  name: string;
  age: number;
  huis: HuisType;
  hairColor?: string;
}

interface ITeacher extends IPerson {
  lesson: string;
}

interface IStudent extends IPerson {
  gpa: number;
}

const t: ITeacher = {
  name: "Uka",
  age: 22,
  huis: "er",
  lesson: "JS",
};

//oop
class Person {
  public name = "";
  public age = 0;
  private regNum = "";

  constructor(name: string) {
    this.name = name;
  } //person

  walk() {}
  think() {}
}

class Teacher extends Person {
  public lesson = "";
  constructor(name: string) {
    super(name);
  }
}

const p9 = new Person("Naraa"); //instance
const p8 = new Person("Saraa");
const t8 = new Teacher("Uka");

p9.name;
p9.walk();
p9.name;
p8.walk();
