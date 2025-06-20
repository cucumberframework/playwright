// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//14.Find common elements of 2 array
// I/p: a1={1,2,3,4,5} a2={4,5,6,7,8} O/p: {4,5}
let one=[1,2,3,4,5] 
let two=[4,5,6,7,8]

//O/p: {4,5}
let objectrec={}
let twolength=two.length
one.push(...two);
//console.log(one);
let onelength=one.length
//console.log(onelength);
one.forEach((indchar=>{
    if(!objectrec[indchar]){
        objectrec[indchar]=1;
    }else{
        objectrec[indchar]+=1;
    }
}))
//console.log(Object.keys(objectrec))
let allkeys=Object.keys(objectrec)
allkeys.forEach(indkeys=>{
    if(objectrec[indkeys]===2){
        console.log(indkeys)
    }
})
//console.log(objectrec)
