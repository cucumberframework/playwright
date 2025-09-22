
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let input="Hi world";

function splitting(callback){
    let splitteddata=input.split(" ");
    callback(splitteddata);
}
function reverse(data){
    let reversedData=data.map(ind=>ind.split("").reverse().join(""));
    console.log(reversedData);
}

splitting(reverse);

