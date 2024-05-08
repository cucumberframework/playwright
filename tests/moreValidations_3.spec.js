const { expect,test } = require("@playwright/test");

test('More validations for elements, popups',async({page})=>
{
await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
//await page.goto("https://golfoy.com/golf-accessories.html");

const loginPageFrame = await page.frameLocator('#frame_cache_0');
const officeNameIcon=loginPageFrame.locator("i[class*='icon-briefcase text-primary']");
const userNameIcon=loginPageFrame.locator("i[class*='icon-user']");
const rememberMeCheckBox=loginPageFrame.locator("#remember");
expect(await officeNameIcon.isVisible()).toBeTruthy();
expect (await userNameIcon.isVisible()).toBeTruthy();

//another method to cehck the visiblity of hte element is 
await expect(officeNameIcon).toBeVisible();
await expect (userNameIcon).toBeVisible();

//assert that checkbox is cehcked /not
expect(await rememberMeCheckBox.isChecked()).toBeFalsy();

//assert that checkbox is unchecked 
expect(await rememberMeCheckBox.isChecked()).toBeFalsy();



//await page.goBack(); // this will take us back 
//await page.goForward(); //this will take us forward in the 

});

