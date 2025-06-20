// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Find the first non-repeating character in a string-- Done.//swiss");
let input ="swiss";
let newArray={};
let firstNonRepeated=null;
let splitted=input.split('')
console.log(splitted);
splitted.forEach((char)=>{
    if(!newArray[char]){
        newArray[char]=1;
        console.log(newArray);
    }else{
        newArray[char]=newArray[char]+1;
    }
    console.log(newArray);
})
splitted.forEach((char)=>{
    if(newArray[char]===1 && firstNonRepeated==null){
        console.log("First non repeated character is::"+char);
        firstNonRepeated=char;
       
    }
})