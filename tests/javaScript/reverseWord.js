// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Reverse a string");

let input="rahul";
//o/p:: luhar
let length=input.length
let split=input.split("");
console.log(split)
for(let a=length-1;a>=0;a--){
       process.stdout.write(split[a]);
    
}