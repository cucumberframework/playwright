// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
/*
11.Print the difference between two strings. 
I/p: Str1="Have a nice day" str2="Have a good day" O/p: nice, good
*/
let one="Have a nice day"
let onesorted=one.split(" ").sort()
let objectRec={};
console.log(onesorted)
let two="Have a good day";
let twosorted=two.split(" ").sort()
console.log(twosorted)
for(let a=0;a<onesorted.length;a++){
    if(!objectRec[onesorted[a]]){
        objectRec[onesorted[a]]=1;
    }else{
        objectRec[onesorted[a]]=objectRec[onesorted[a]]+1
    }
}
for(let b=0;b<twosorted.length;b++){
    if(!objectRec[twosorted[b]]){
        objectRec[twosorted[b]]=1;
    }else{
        objectRec[twosorted[b]]=objectRec[twosorted[b]]+1
    }
}
let keyss=Object.keys(objectRec)
let valuess=Object.values(objectRec)
console.log(keyss)
console.log(valuess)
keyss.forEach((indValue)=>{
    if(objectRec[indValue]===1){
        console.log(indValue)
    }
})
//console.log(objectRec)








