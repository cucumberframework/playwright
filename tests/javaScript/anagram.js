let one = "silent";
let two = "listen";
if (one.length != two.length) {
    console.log("Not an anagram")
} else {
    one = one.split("").sort().join();
    two = two.split("").sort().join();
    if (one === two) {
        console.log("Both are anagram strings")
    }
}