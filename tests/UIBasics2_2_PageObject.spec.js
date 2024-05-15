
const {test,expect} =require('@playwright/test')
const { CreateStep2 } = require('./pageObjects/CreateStep2');
test('First playwright test execution', async ({page})=>
{
const step2= new CreateStep2(page);
   
   await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
   await step2.login('bobbyms', 'Bobby', 'sod3mo')
   
   
});