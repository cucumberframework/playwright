let input;

function sendInputString(callback){
    const message="Hi world";
    callback(message);
}
function reverseString(inputString){
    let reversed=inputString.split(' ').map(vol=>vol.split('').reverse().join(''));
    console.log(reversed);
}

sendInputString(reverseString);
