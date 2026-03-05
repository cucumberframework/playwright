const { test, expect } = require('@playwright/test');
const { golfyPOManager } = require('../../pageObjects/golfyPOManager');
const { allure } = require('allure-playwright');


test.skip('@dryrun repracticing', async ({ page }) => {
    const golfyManager = new golfyPOManager(page);
    await allure.step('Navigate to the URL  ', async () => {
        await page.goto("https://golfoy.com/");
    });
    await allure.step('Fill in the name with Rahul', async () => {
        await golfyManager.search.fill('Rahul');
    });
    await allure.step('Wait for login to appear', async () => {
        await golfyManager.login.waitFor();
        await golfyManager.login.click();
        await page.waitForTimeout(5000);
    });

    await allure.step('Wait for SignIn option to appear and then click on the sign in option', async () => {
        await golfyManager.signInWithEmail.waitFor();
        await golfyManager.signInWithEmail.click();
    });
    await allure.step('Enter eamilId and password and then click on login button', async () => {
        await golfyManager.emailAddress.nth(1).fill('mailme.rahul09@gmail.com');
        await golfyManager.password.fill('9892338563');
        await golfyManager.loginButton.click();
        await golfyManager.userNameAfterLogin.waitFor();
        await expect(golfyManager.userNameAfterLogin).toBeVisible();
        console.log(await golfyManager.userNameAfterLogin.textContent());
        expect(await golfyManager.userNameAfterLogin).toContainText('rahul barapatre');
    });
    await allure.step('Click on the balls from homepage', async () => {
        await golfyManager.homepage.balls.waitFor();
        await golfyManager.homepage.balls.click();
    });

    await allure.step('Storing the storage state in auth.json file', async () => {
        await page.waitForURL('**/golf-balls');
        await page.context().storageState({ path: 'auth.json' });
    });

});

test('Running storage state Test cases ', async ({ page }) => {
    const golfyManager = new golfyPOManager(page);
    await allure.step('Navigate to the URL  ', async () => {
        await page.goto("https://golfoy.com/");
    });
    

});