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
page.on("dialog",dialog=>dialog.dismiss());

await page.locator("#confirmbtn").click();

});
