// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Com
let anagram=(callback,input1,input2)=>{
    
    callback(input1,input2)
}
let withoutsorting=(inp1,inp2)=>{
    let sortedinp1=inp1.split("").sort().join("");
    let sortedinp2=inp2.split("").sort().join("");
    if(sortedinp1===sortedinp2){
        console.log("Anagram");
    }
    
}
let withsorting=(inp1,inp2)=>{
    let splittedinp=inp1.split("");
    console.log(splittedinp);
    let testanagram=splittedinp.map(char=>{
        if(!inp2.includes(char)){
            console.log("Not anagram");
        }else{
            console.log("String is anagram");
        }
    })
}




anagram(withsorting,"silent","listen");
anagram(withoutsorting,"silent","listen");