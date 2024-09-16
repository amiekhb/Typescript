console.log("Hello Typesript");
var num = 20;
var str = "Hello";
var isBool = true;
console.log("Num value", num);
console.log("Str value", str);
console.log("Boolean value", isBool);
function add(a, b) {
    return a + b;
}
var y = add(100, 100);
console.log("ADD", y);
var add2 = function (a, b) {
    return a + b;
};
var myPrint = function (text) {
    console.log("Hello", myPrint);
};
var s = add2(200, 500);
myPrint("Welcome");
