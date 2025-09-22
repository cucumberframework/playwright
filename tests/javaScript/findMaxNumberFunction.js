console.log("This is the test record and need to be recorded ");
//Find a Peak Element in an Array
let input=[10,20,90,70,50];
let max=0;
//console.log(input);
let findlargest=(inputarray)=>{
  //console.log(inputarray);
inputarray.map(indchar=>{
  if(indchar>max){
    max=indchar;
  }
});
console.log("Max number is ::"+max);
};

findlargest(input);