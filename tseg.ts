var message : string ="Hello World"
console.log("Hello world")
//creating class
class Greeting 
{
     greet():void{
     console.log("HELLO World")
     }
}
var obj=new Greeting();
obj.greet();
//declares variables
var names:string="Sabari"
var a:number=10
var b:number=20
var c=a+b
console.log(names)
console.log(names + names)
console.log(a)
console.log(b)
console.log(c)
//Type Assertion
var s:string ='5'
var s1:number=<number> <any> s// change the type string-number r passing the str-number type 
console.log(s)
console.log(s1)
console.log(typeof(s))
console.log(typeof(s1))
//inferred typing
var n=10
console.log(n)
//n="sab" error
console.log(n)
//variables are declared as global,local,static'
var num=20  //global variable
class Numb
{
      nu=10  //cls variable
     static sval=30 //static variable
     storenum():number{
         var lc=40   //local variable
         return lc   
  }
     
}
console.log("Global variable "+num)
//console.log("local variable"+lc) its a  fn so call the function name(params:type)

console.log("static variables "+Numb.sval)
var numb= new Numb
console.log("Class variable"+numb.nu)
console.log("Local Variable "+numb.storenum())
 //condition operation
var a=3
var p=a>0?"possitive":"non possitive";
console.log(p)
//elseif ladder
var l=0
if(l>0){
   console.log(l+" Positive")
}
else if(l<0){
  console.log(l+" Negative")
}
else{
  console.log(l+" neither positive or negative")
}
//function return
function hlo():string{
  return "SHANKAR"
}
function caller(){
   var msg=hlo() 
   console.log(msg)
}
caller()