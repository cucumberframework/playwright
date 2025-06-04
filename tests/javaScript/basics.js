

let a=10; 
console.log(a);

a=20;
console.log(a);

var b=30;
console.log(b);
var b=40;
console.log(b);

let arr=[1,2,3,4,5,6,7,8,9];

arr.push(10); //add new element to array at the last
arr.pop(); // it will remove the element from the array at the last
arr.unshift(105);  //this will add new element to the array at the first
console.log(arr);

//reduce function od javascript 

let finalMarks =arr.reduce((sum,totalmaraks)=>sum+totalmaraks,0);
console.log("final Total of array-->"+finalMarks);

//filter method 
let oneArr=[11,12,13,14,15,16];

let filterdArray=oneArr.filter(score=>score%2==0);
console.log(filterdArray);
