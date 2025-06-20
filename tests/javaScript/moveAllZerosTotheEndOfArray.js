//Move all zeros to the end
//Input: [0, 1, 0, 3, 12] → Output: [1, 3, 12, 0, 0]
let input=[11, 1, 0, 3, 12,111,152,0,74,85,0];
input.push(100)
console.log(input.lenght)
for(let a=0;a<input.length;a++){
    if(input[a]===0){
        input.splice(a,1);
        input.push(0)
    }
}
console.log(input);
