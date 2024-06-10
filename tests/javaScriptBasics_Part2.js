let marks=Array(6); //creating array with size of 6 
let newMarks=new Array(20,10,11,3,15,16);
console.log(newMarks[2]); //this will print the value present at index 2 

let finalMarks=[1,2,3,4,5,6,7,8]; //third way to create the array 
var mainArray =[1,2,3,4,5,6,7,8]; //
var subArray=mainArray.slice(mainArray.indexOf(5),mainArray.indexOf(6)); //splits array and create new array out of it 

console.log("subarray--->"+subArray);
console.log(finalMarks[0]);  //will print the value present @ index 0
console.log(finalMarks[1]);  //will print the value present at it dex 1

finalMarks[3]=555;      //assigning value to specic index 
console.log(finalMarks)
console.log(finalMarks.length); //it will give length of the array 

finalMarks.push(999) //this will add the element at the end of array
finalMarks.push(9999);
finalMarks.pop() //this will delete the last element from the array 

finalMarks.unshift(1) //this will add element at hte beginning of the aray 

console.log(finalMarks)
console.log(finalMarks.indexOf(999)); //this will give index od particular value

console.log(finalMarks.includes(7)); //checck if required value is present in array, returns true if available else return false
var sum=0;
for(var i=0;i<finalMarks.length;i++)
{
    console.log(finalMarks[i]);
    sum=sum+finalMarks[i];
    
};
console.log(sum);

//reduce, filter, and map inplementation in javaScript 
//reduce-- used to perform operation on all elements of array. 

var reduceArray =[1,2,3,4,5,6,7,8]; 
let finalReduce=reduceArray.reduce((sum,mark)=>sum+mark,0);
console.log("finalReduce-->"+finalReduce)

//Filter - it will filter the array based on the the filter criteria which is added 
var filteredArray=reduceArray.filter(scores=>scores%2===0);
console.log(filteredArray);

//Map array function 
//It will modify each and every value of array to new value 
var mappedArray=filteredArray.map(newScore=>newScore*3);
console.log(mappedArray);

//Added after fultiplying the filtered array
let addedAfterReducing=mappedArray.reduce((sum,total)=>sum+total,0);
console.log("addedAfterReducing-->"+addedAfterReducing)

let charSequence=["a","b","c","d","e","f"];

var stringOne ='geese'; 

let Character=stringOne.split("");

var characterWeGot=Character[Character.length-1];
var toReplaceIndex=charSequence.indexOf('e'+1);

//Character=charSequence.pop();
Character=Character.push(charSequence.indexOf(toReplaceIndex));
console.log(Character);


