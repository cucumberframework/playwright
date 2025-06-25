
console.log("Remove duplicates from a string — efficiently.");
//let arr = [1, 2, 2, 3, 4, 4, 5];
let arr = [1, 2, 2, 3, 4, 4, 5];
let obj={};
let index=null
arr.forEach(char=>{
    if(!obj[char]){
        obj[char]=1
    }else{
        index=arr.indexOf(char)
       // console.log(index)
        arr.splice(index,1)
        console.log(arr)
    }
})