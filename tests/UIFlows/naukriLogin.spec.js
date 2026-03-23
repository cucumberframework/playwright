const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

test('Naukri Login Test', async ({ page }) => {
    const pomanager = new POManager(page);

    // Navigate to Naukri homepage
    await page.goto("https://www.naukri.com");

    // Click on Login button
    await pomanager.naukriobj.loginButton.click();

    // Enter username
    await pomanager.naukriobj.username.fill('rbrahulbarapatre@gmail.com');

    // Enter password
    await pomanager.naukriobj.password.fill('Ra9892338563@');

    // Click submit button
    await pomanager.naukriobj.submitbutton.click();

    // Wait for login to complete - check for some element that appears after login
    await page.waitForURL('**/mnjuser/homepage');
    expect(page.url()).toContain('mnjuser/homepage');
});