//count vowels in string
let input="this are i out eve";
let splitted=input.split("");
let count=0;
console.log(splitted);
splitted.forEach((char)=>{
    if((char=='a')||(char=='e')||(char=='i')||(char=='o')||(char=='u')){
        count++
        console.log(char+"::"+count);
    }
    
})
