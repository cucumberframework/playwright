
const { test: base, expect } = require('@playwright/test');
export const test = base.extend({

    login: async ({ page }, use) => {
        await page.goto('https://selectorshub.com/xpath-practice-page/');
        await page.locator('input[name="email"]').fill('Test Rahul Message');
        await page.locator('input[name="Password"]').fill('Filling the report password');
        const data = {
            userName: 'rahul.barapatre@test.com',
            password: 'test1234'
        };
        
        await use(data);
    
    }

});
module.exports = { test, expect };