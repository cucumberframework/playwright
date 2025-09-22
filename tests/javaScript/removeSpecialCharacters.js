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