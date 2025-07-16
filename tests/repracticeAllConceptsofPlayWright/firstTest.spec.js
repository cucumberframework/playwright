const { test, expect } = require('@playwright/test');
const { pomanagerone } = require('../../tests/repracticeAllConceptsofPlayWright/pomanagerOne')
let context;
let page;
var poManagerone;
test.describe('Describe block', () => {
    test.beforeEach('Beforeall', async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();

    });

    test('@practice Checkbox checking ', async ({ page }) => {
        poManagerone = new pomanagerone(page);
        await page.goto("https://selectorshub.com/xpath-practice-page/");
        await poManagerone.checkbox.waitFor();
        await poManagerone.checkbox.click();
        await expect(poManagerone.checkbox).toBeChecked();
    });
    test('@practicefill  filltest', async ({ page }) => {
        poManagerone = new pomanagerone(page);
        await page.goto("https://selectorshub.com/xpath-practice-page/");
        await poManagerone.username.waitFor();
        await poManagerone.username.type("This is test recordd")
    });
    test.fixme('Second Test', async ({ page }) => {
        tag: '@smoke';
        console.log('This is second test record');
    });
    test('@practiceRoleLocator  filltesttest', async ({ page }) => {
        poManagerone = new pomanagerone(page);
        await page.goto("https://selectorshub.com/xpath-practice-page/");
        await poManagerone.username.waitFor();
        console.log(await poManagerone.checkoutButton.textContent());
        console.log(await poManagerone.chooseACar.nth(0).textContent());
       await poManagerone.choosecardropdown.selectOption("Saab");
       await poManagerone.usernameplaceholder.type("Test placeholder");

    });
});