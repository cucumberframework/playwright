
let obj={};
let nonrepeatableCharacter=(callback,input)=>{
    //console.log(input);
    let splitted=input.split("");
    callback(splitted);
}
let calculatefirstnonrepeatable=(toSplit)=>{
    toSplit.map(char=>{
        if(!obj[char]){
            obj[char]=1;
        }else{
            obj[char]+=1;
        }
      
    })
    let keys=Object.keys(obj);
      keys.map(indkeys=>{
          if(obj[indkeys]==1){
              console.log(indkeys);
          }
      })
    //console.log(toSplit);
}
nonrepeatableCharacter(calculatefirstnonrepeatable,"swiss");
