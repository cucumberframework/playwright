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

//all three map, reduce and filter can be done in single line 
let inputArrayOne=[1,2,3,4,5,6,7,8]; 
let finalResult=inputArrayOne.filter(score1=>score1%2==0).map(score2=>score2*3).reduce((sum,acc)=>sum+acc,0);
console.log("This is result of all three operations==>"+finalResult);

let charSequence=["a","b","c","d","e","f"];

var stringOne ='geese'; 

let Character=stringOne.split("");

var characterWeGot=Character[Character.length-1];
var toReplaceIndex=charSequence.indexOf('e'+1);

//Character=charSequence.pop();
Character=Character.push(charSequence.indexOf(toReplaceIndex));
console.log(Character);

//this will stort the string in ascending order
let str=["one","two","three","four","five"];
console.log(str.sort());
console.log(str.sort().reverse());
let charArray="he@#llowo^&*rld";

console.log(charArray.split(""));
console.log(charArray.split("").sort().reverse().join());



//sorting of the ineger values in of the array 
let integerArr1=['5','001','003','004','012'];

console.log(integerArr1.sort((a,b)=>a-b));

//what are functions and how to declare the functions in javascript 
let sumofNumbers = (a,b)=>a+b;
console.log(sumofNumbers(5,10));

//strings and its method in javascript 
let day='tuesday   ';
console.log(day.length); //will give length of the string
console.log(day.slice(0,5)); //will give the string from index 0 to 5
console.log(day[4]); //will give the character at index 4
console.log(day);
let splittedDay=day.split("s");  //will split the string based on the character 's' and return array
console.log(splittedDay); 
console.log(splittedDay[1].trim()); //will split the string based on the character 's' and return array and trim the spaces

//converting strings to number and 
let firstStringdate="27";
let seconfStringDate="10";
let finalDateDiffrence= parseInt(firstStringdate)-parseInt(seconfStringDate);
console.log("Final Diffrence between dates are-->"+finalDateDiffrence);
let integerFormatOfString=finalDateDiffrence.toString(); //this will convert the number to string format
console.log(typeof(integerFormatOfString));// this will convert back the numbeer back to string format 

//concanitation of two strings 
let stringone= "hello";
let stringtwo=" this is second String";
console.log(stringone+stringtwo);

let stringValue="hi this is the great day and hi i am rahul hi i am resigning , hi i am done with hi";
let index=stringValue.indexOf("hi"); //this will give the index of first occurance of the string 'hi'
let count=0;
while(index!=-1){
count++;
index=stringValue.indexOf("hi",index+1);
}
console.log("Count of hi in the string is-->"+count);