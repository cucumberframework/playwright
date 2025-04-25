const { test, expect } = require('@playwright/test');

test('Browser playwright test execution', async ({ browser }) => {
    // newContext() is used to create a new context of the browser.
    // It is equivalent to creating a new WebDriver instance and is used when we need to set cookies.

    const context = await browser.newContext();

    // Open a new page
    const page = await context.newPage();
    await page.goto("https://www.google.com");
});

test('Test1 from UI basics file', async ({ page }) => {
    await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
    console.log(await page.title());
    await expect(page).toHaveTitle('SmartOffice');

    // Switch to the frame containing the login credentials
    const loginPageFrame = await page.frameLocator('#frame_cache_0');

    // Locate elements using various strategies
    const officeName = loginPageFrame.getByPlaceholder("Office Name");
    const userName = loginPageFrame.locator("#User");
    const password = loginPageFrame.locator("#Pwd");
    const rememberMeCheckBox = loginPageFrame.locator("#remember");
    const submitButton = loginPageFrame.getByRole('button', { name: 'Sign in' });
    const advancedSearch = page.locator("#searchAdvanced");
    const searchBox = page.locator("#search_value");
    const searchIcon = page.locator(".icon-search");

    // Fill in login credentials and submit
    await officeName.fill('bobbyms');
    await userName.fill('Bobby');
    await password.fill('sod3mo');
    await rememberMeCheckBox.waitFor();
    await rememberMeCheckBox.click();
    await submitButton.click();

    // Switch to the main frame
    await page.mainFrame();
    await advancedSearch.waitFor();
    console.log(await advancedSearch.textContent());
    await expect(advancedSearch).toContainText('Advanced Search');
    await searchBox.fill("Test1");
    await searchIcon.click();

    // Switch to a nested frame
    const pageFrame = await page.frameLocator('#frame_cache_0');
    const topHeaderTab = await pageFrame.locator('.CURRENTTAB');
    await expect(topHeaderTab).toContainText('Personal');

    // Click on Advanced Search and select a dropdown
    await page.mainFrame();
    await page.waitForLoadState("networkidle");
    await advancedSearch.waitFor();
    await advancedSearch.click();

    // Navigate through nested frames
    const frameOne = await page.frameLocator(".embed-responsive-item");
    const frameTwo = await frameOne.frameLocator("#ebRealModalFrame");
    await frameTwo.locator(".RADIO").first().waitFor();

    // Click on a radio button and assert it is checked
    await frameTwo.locator(".RADIO").nth(1).click();
    await expect(await frameTwo.locator(".RADIO").nth(1)).toBeChecked();
    await frameOne.frameLocator("#ebRealModalFrame").locator("#nm").fill("bobby");

    console.log(await frameTwo.locator("#ipID_65627").isVisible());

    // Find an element by role and click it
    await frameTwo.getByRole("button", { name: 'Search' }).click();

    // Hard wait for 3 seconds
    await page.waitForTimeout(3000);

    // Validate the last name field
    const lastName = await pageFrame.locator('#lastname').getAttribute('value');
    console.log(lastName);
    await expect(lastName).toBe('Bobby');

    // Fill in the source field
    const sourceField = pageFrame.locator("#source");
    await sourceField.waitFor();
    await sourceField.fill('SourceField');
    await page.waitForTimeout(3000);

    // Interact with dropdowns
    await pageFrame.locator("img[ezsubclass='dropdown']").nth(0).click();
    await pageFrame.locator("#sc65547").selectOption('1');
});