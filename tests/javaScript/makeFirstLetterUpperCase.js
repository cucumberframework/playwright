// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Convert text to Title Case — properly.");
let input="convert text to title case properly."
let splitted=input.split(" ");
//console.log(splitted);
let length=0;
let c=null
let charUp=null
splitted.forEach(ind=>{
    length=ind.length
    //console.log(length);
    
    let indsplitted= ind.split("")
    charUp=indsplitted[0].toUpperCase()
   indsplitted.splice(0,1)
   indsplitted.unshift(charaUp)
   //console.log(indsplitted.join("").toString())
   process.stdout.write(indsplitted.join("").toString())
   
})