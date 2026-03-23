const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { allure } = require('allure-playwright');

test.describe('SauceDemo Login Tests @smoke @regression', () => {

    test('Login with standard user', async ({ page }) => {
        const pomanager = new POManager(page);
        const sauceDemoPage = pomanager.sauceDemoPage;

        await allure.step('Navigate to SauceDemo homepage', async () => {
            await sauceDemoPage.goto();
        });

        await allure.step('Login with standard user credentials', async () => {
            await sauceDemoPage.login('standard_user', 'secret_sauce');
        });

        await allure.step('Verify successful login', async () => {
            await expect(sauceDemoPage.inventoryContainer).toBeVisible();
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        });
    });

    test('Login with locked out user', async ({ page }) => {
        const pomanager = new POManager(page);
        const sauceDemoPage = pomanager.sauceDemoPage;

        await allure.step('Navigate to SauceDemo homepage', async () => {
            await sauceDemoPage.goto();
        });

        await allure.step('Attempt login with locked out user', async () => {
            await sauceDemoPage.login('locked_out_user', 'secret_sauce');
        });

        await allure.step('Verify error message for locked user', async () => {
            await expect(sauceDemoPage.errorMessage).toBeVisible();
            await expect(sauceDemoPage.errorMessage).toContainText('Sorry, this user has been locked out');
            await expect(page).toHaveURL('https://www.saucedemo.com/');
        });
    });

    test('Login with problem user', async ({ page }) => {
        const pomanager = new POManager(page);
        const sauceDemoPage = pomanager.sauceDemoPage;

        await allure.step('Navigate to SauceDemo homepage', async () => {
            await sauceDemoPage.goto();
        });

        await allure.step('Login with problem user credentials', async () => {
            await sauceDemoPage.login('problem_user', 'secret_sauce');
        });

        await allure.step('Verify login succeeds for problem user', async () => {
            await expect(sauceDemoPage.inventoryContainer).toBeVisible();
        });
    });

    test('Login with invalid credentials', async ({ page }) => {
        const pomanager = new POManager(page);
        const sauceDemoPage = pomanager.sauceDemoPage;

        await allure.step('Navigate to SauceDemo homepage', async () => {
            await sauceDemoPage.goto();
        });

        await allure.step('Attempt login with invalid credentials', async () => {
            await sauceDemoPage.login('invalid_user', 'wrong_password');
        });

        await allure.step('Verify error message for invalid credentials', async () => {
            await expect(sauceDemoPage.errorMessage).toBeVisible();
            await expect(sauceDemoPage.errorMessage).toContainText('Username and password do not match');
            await expect(page).toHaveURL('https://www.saucedemo.com/');
        });
    });

    test('Login and logout flow', async ({ page }) => {
        const pomanager = new POManager(page);
        const sauceDemoPage = pomanager.sauceDemoPage;

        await allure.step('Navigate to SauceDemo homepage', async () => {
            await sauceDemoPage.goto();
        });

        await allure.step('Login with standard user', async () => {
            await sauceDemoPage.login('standard_user', 'secret_sauce');
        });

        await allure.step('Verify successful login', async () => {
            await expect(sauceDemoPage.inventoryContainer).toBeVisible();
        });

        await allure.step('Logout from application', async () => {
            await sauceDemoPage.logout();
        });

        await allure.step('Verify back to login page after logout', async () => {
            await expect(page).toHaveURL('https://www.saucedemo.com/');
        });
    });
});