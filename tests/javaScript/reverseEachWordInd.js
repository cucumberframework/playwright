// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//console.log("Flip the words in a sentence, not the letters.");
let input= "flip the words in sentence";
console.log(input.split(" "));
let splitted=input.split(" ")
let length=0;
splitted.forEach(indword=>{
    length=indword.length;
    for(let a=length-1;a>=0;a--){
        
        process.stdout.write(indword[a])
    }
    process.stdout.write(" ");
})
