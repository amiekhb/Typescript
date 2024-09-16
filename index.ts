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
