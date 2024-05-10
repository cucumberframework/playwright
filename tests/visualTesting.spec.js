const { expect,test } = require("@playwright/test");

test('Visual testing',async({page})=>
{
await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
expect(await page.screenshot()).toMatchSnapshot();


});