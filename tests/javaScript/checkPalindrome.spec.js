const { test, expect } = require("@playwright/test")

test.describe("DEscribe", () => {
    let context;
    let page;

    test.beforeAll("BeforeEach", async () => {
        

    });
    test("TestBlock", async ({ page }) => {
        console.log("Try programiz.pro");

        // check if string is palindrome or not 

        let input = "136317";
        let reversed = input.split("").reverse().join("");
        console.log(reversed)
        if (input === reversed) {
            console.log("Palindrome")
        } else {
            console.log("Not palindrome")
        } 

    })

});


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

// check if string is palindrome or not 

let input = "136317";
let reversed = input.split("").reverse().join("");
console.log(reversed)
if (input === reversed) {
    console.log("Palindrome")
} else {
    console.log("Not palindrome")
}