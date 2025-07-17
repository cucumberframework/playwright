// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
let input=[10,90,30,84];
let finalop={};
let array1=[];
//[1,4,2,3]
let inputobject={};
input.forEach(char=>{
    if(!inputobject[char]){
        inputobject[char]=1;
    }else{
        inputobject[char]+=1;
    }
});
console.log(inputobject)
let keys=Object.keys(inputobject);
let ranking=1;
console.log(keys);
keys.forEach(charind=>{
    if(!finalop[charind]){
        finalop[charind]=ranking;
        ranking++;
    }
    console.log(finalop)
});
console.log(array1);

