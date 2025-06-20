//Remove duplicates from an ArrayList

let arr = [1, 2, 2, 3, 4, 4, 5];
let length= arr.length
console.log(length)
for(let i=0;i<length;i++){
    for(let j=i+1;j<length;j++){
        if(arr[i]===arr[j]){
           arr.splice(j,1);
        }
    }
}
console.log(arr)