//let input="this is the test function";
let indOp;
let upperchar;
let upperCase=(callback,input)=>{
    let splitted= input.split(" ");
    callback(splitted);
}
let splitAndChangeCase=(splittedInput)=>{
    console.log(splittedInput);
    let upperCase=splittedInput.map(ind=>{
        indOp=ind.split("");
        //console.log(indOp);
        upperchar=indOp[0].toUpperCase();
        indOp.splice(0,1);
        //console.log(indOp);
        indOp.unshift(upperchar);
        process.stdout.write(indOp.join("")+" ")
        
    })
}
upperCase(splitAndChangeCase,"this is the test function");