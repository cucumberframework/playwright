// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
let input="AS&12DF312%67";
let splitted=input.split("");
console.log(splitted);
let replaced= input.replace(/[^a-zA-Z0-9]/g,"");
// ^- for matching all occourances
// g- to find in all classes

console.log(replaced);

//[^a-zA-Z0-9]/g

//AS&12DF312%67
let input="AS&12DF312%67"
let letters = input.replace(/[^A-Z]/g,"");
let numbers=input.replace(/[^0-9]/g,"");
let charcters = input.replace(/[A-Za-z0-9]/g,""); //it will remove all characrtes and keep only special characters 
//console.log(charcters);
console.log(letters+numbers+charcters);