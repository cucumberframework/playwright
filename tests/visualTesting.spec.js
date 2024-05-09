const { expect,test } = require("@playwright/test");

test('More validations for elements, popups',async({page})=>
{
await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
expect(await page.screenshot()).toMatchSnapshot({path:'screenshots/expected.png'});


});