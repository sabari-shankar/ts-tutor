var message = "Hello World";
console.log("Hello world");
//creating class
var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("HELLO World");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
//declares variables
var names = "Sabari";
var a = 10;
var b = 20;
var c = a + b;
console.log(names);
console.log(names + names);
console.log(a);
console.log(b);
console.log(c);
//Type Assertion
var s = '5';
var s1 = s; // change the type string-number r passing the str-number type 
console.log(s);
console.log(s1);
console.log(typeof (s));
console.log(typeof (s1));
//inferred typing
var n = 10;
console.log(n);
//n="sab" error
console.log(n);
//variables are declared as global,local,static'
var num = 20; //global variable
var Numb = (function () {
    function Numb() {
        this.nu = 10; //cls variable
    }
    Numb.prototype.storenum = function () {
        var lc = 40; //local variable
        return lc;
    };
    return Numb;
}());
Numb.sval = 30; //static variable
console.log("Global variable " + num);
//console.log("local variable"+lc) its a  fn so call the function name(params:type)
console.log("static variables " + Numb.sval);
var numb = new Numb;
console.log("Class variable" + numb.nu);
console.log("Local Variable " + numb.storenum());
//condition operation
var a = 3;
var p = a > 0 ? "possitive" : "non possitive";
console.log(p);
//elseif ladder
var l = 0;
if (l > 0) {
    console.log(l + " Positive");
}
else if (l < 0) {
    console.log(l + " Negative");
}
else {
    console.log(l + " neither positive or negative");
}
//function return
function hlo() {
    return "SHANKAR";
}
function caller() {
    var msg = hlo();
    console.log(msg);
}
caller();
//# sourceMappingURL=tseg.js.map