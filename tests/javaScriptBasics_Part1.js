console.log("Hello world");

// comments 
/*multi line comment 
comment 2
*/
//==============================================================

//variables in javascript
var a=10; 
let b="Rahul";
var c=false;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

//==============================================================
//assignment operators 
var a=a+b
console.log(typeof(a));
/*==============================================================
diffrence var and let 
we cannot redeclare variable with 'let' but it is possible with 'var' 
we can redeclare and reassign with var,
==============================================================*/
/*Not Operator*/
var c=false;
console.log("What is NOT operator="+!c);  //NOT aoperator

let e=true;
//let e=false //redeclaration NOT allowed
e=false;

var f=true;
var f=false;
f=true;


const g='rahul'; //cannot redeclare and cannot reassign;
//const g='megha'; //this is NOT allowed 
g='shimla';

//============================loops on java script==================================
const flag=true;
flag=false;
console.log(flag)
