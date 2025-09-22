//I/p: Str1="Have a nice day" str2="Have a good day" O/p: nice, good

let splitarray = (one, two) => {
    console.log(one);
    console.log(two);
    let newArrayAfterfilter = one.filter(onearray => !two.includes(onearray));
    let newArrayFilter2 = two.filter(twoarray => !one.includes(twoarray))

    console.log(newArrayAfterfilter);
    console.log(newArrayFilter2);
}
let commonelement = (callback, input1, input2) => {
    //console.log("calling commonelement");
    let onesplitted = input1.split(" ");
    let twosplitted = input2.split(" ");
    callback(onesplitted, twosplitted);


}

commonelement(splitarray, "Have a nice day", "Have a good day")