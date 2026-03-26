const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

test.describe('Naukri Login Tests @smoke @regression', () => {

    test('Login to Naukri', async ({ page }) => {
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

        // Wait for login to complete
        await page.waitForURL('**/mnjuser/homepage');
        expect(page.url()).toContain('mnjuser/homepage');

        // Click on View Profile
        await pomanager.naukriobj.viewprofile.click();

        // Wait for profile page to load
        await page.waitForLoadState('load');
        await page.waitForTimeout(2000);

        // Click on Resume Headline edit button
        await pomanager.naukriobj.editprofile.click();

        // Get today's date in format (DD-MM-YYYY)
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-GB', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric' 
        }).replace(/\//g, '-');

        // Get current resume headline content
        const currentHeadline = await pomanager.naukriobj.resumeheadline.inputValue();
        
        // Remove previous date (DD-MM-YYYY pattern) from existing content
        let updatedHeadline = currentHeadline.replace(/\s*\d{2}-\d{2}-\d{4}\s*$/g, '').trim();
        
        // If no content exists, add a default prefix
        if (!updatedHeadline) {
            updatedHeadline = 'Updated Resume';
        }
        
        // Append today's date
        updatedHeadline = `${updatedHeadline} - ${formattedDate}`;

        // Fill the resume headline field with updated content
        await pomanager.naukriobj.resumeheadline.fill(updatedHeadline);

        // Click Save button
        await pomanager.naukriobj.savebutton.click();

        // Wait for the save to complete
        await page.waitForTimeout(2000);

        // Verify the save was successful
        expect(page.url()).toContain('profile');
    });
});