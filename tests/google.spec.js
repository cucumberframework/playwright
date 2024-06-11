const {test,expect} =require('@playwright/test')
const { chromium } = require('playwright');  // Import Playwright

let context;
let page;
test.describe("Google.com testing", ()=>{

    test.beforeAll(async({browser})=>{
         context = await browser.newContext();
         page = await context.newPage();
    });

test(`Opening google.com`,async ()=>{

    await page.goto("https://www.google.com");
});

test(`Closing the chrome browser`,async ()=>{

});



});