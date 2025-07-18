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
        console.log('This is second test record');
    });
    test('@practiceRoleLocator  filltesttest', async ({ page }) => {
        poManagerone = new pomanagerone(page);
        await page.goto("https://selectorshub.com/xpath-practice-page/");
        await poManagerone.username.waitFor();
        console.log(await poManagerone.checkoutButton.textContent());
        console.log(await poManagerone.chooseACar.nth(0).textContent());
        await poManagerone.choosecardropdown.selectOption("Saab");
        await poManagerone.choosecardropdown.hover();
        await poManagerone.choosecardropdown.click();
        await poManagerone.usernameplaceholder.type("Test placeholder");
        await expect(poManagerone.disabledInput).toBeDisabled();
        await expect(poManagerone.usernameplaceholder).toContainClass("selectors-input jsSelector");
        await expect(poManagerone.usernameplaceholder).toHaveAttribute("dataid", "sh_email1");
        await expect(poManagerone.checkoutHereButton).toBeAttached();
        await expect(poManagerone.considerSmallDonationLink).toBeVisible();
        await expect(poManagerone.selectersHubyouTubeChannel.first()).toHaveAttribute("rel", "noopener");
        await expect(poManagerone.alertButton).toBeVisible();
        await poManagerone.alertButton.click();
        await page.on('alert', alert => alert.close());
    });
    test('@Iframe Iframetesting', async ({ page }) => {
        poManagerone = new pomanagerone(page);
        await page.goto("https://selectorshub.com/iframe-scenario/");
        await poManagerone.firstCrushField.type("This is first crush");
        await poManagerone.currentCrushName.type("Current Crush Name");
    });
});