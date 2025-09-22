const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { allure } = require('allure-playwright');

let context = null;
let page = null;

test.describe('Sample describe', () => {

    test.beforeEach('Sample beforeeach', async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    })
    test('Sampletest', async ({ page }) => {
        const poManager = new POManager(page);
        await page.goto("https://naukri.com");
        await poManager.naukriobj.loginButton.waitFor();
        await poManager.naukriobj.loginButton.click();
        await poManager.naukriobj.username.fill("rahulbarapatre2712@gmail.com");
        await poManager.naukriobj.password.fill("Ra9892338563@");
        await poManager.naukriobj.submitbutton.waitFor();
        await poManager.naukriobj.submitbutton.click();
        await poManager.naukriobj.viewprofile.waitFor();
        await poManager.naukriobj.viewprofile.click();
        await poManager.naukriobj.editprofile.nth(0).waitFor();
        await poManager.naukriobj.editprofile.nth(0).click();
        await poManager.naukriobj.resumeheadline.waitFor();
        await poManager.naukriobj.resumeheadline.click();
        let headline = await poManager.naukriobj.resumeheadline.textContent();
        let parts  = headline.split(".");

        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split("T")[0];

        // Append date to each part
        const updatedParts = parts.map(part => part.trim() + " " + today);

        // Join back with "."
        const output = updatedParts.join(".");

        console.log(output);
        await poManager.naukriobj.resumeheadline.fill(output);
        await poManager.naukriobj.savebutton.nth(1).waitFor();
        await poManager.naukriobj.savebutton.nth(1).click();




    })

});