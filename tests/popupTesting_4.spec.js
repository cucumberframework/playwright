const { expect,test } = require("@playwright/test");

test('More validations for elements, popups',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//await page.goto("https://golfoy.com/golf-accessories.html");
await page.locator("#confirmbtn").click();

// this will wait for the dialog event to trigger and once it i triggered, it will take that dialogue and accept it ,
// point to note here is that we need to set triggers first and then we can click on button to open the dialogue then event will be triggered automatically
page.on('dialog',dialog=>dialog.accept());

//If we want to click cancel from the dialogue box then
//page.on("dialog",dialog=>dialog.dismiss());

await page.locator("#confirmbtn").click();

//Mouse hover on element 
const mouseHoverElement= page.locator("#mousehover");
await mouseHoverElement.hover();

// handeling iframes with playwright , 
const pageFrame=await page.frameLocator('#courses-iframe');
console.log(await pageFrame.locator("a[href='consulting']:visible").textContent());
await pageFrame.locator("a[href='consulting']:visible").click();

//code to find list of all the courses taken by Rahul shetty 
const home=pageFrame.locator("a[href='/']").nth(1);
const homePageContent=pageFrame.locator("div[class='header-text hidden-xs'] h3 span");
await home.click();
const homePageTextContent=await homePageContent.textContent()
const splittedContent=homePageTextContent.split("on");
const finalContent= await splittedContent[1].split("and");
console.log(finalContent[0]);

});
