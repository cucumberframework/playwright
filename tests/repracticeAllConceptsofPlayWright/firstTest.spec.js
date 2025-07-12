const {test, expect}=require('@playwright/test');
let context;
let page;
test.describe('Describe block',()=>{
    test.beforeEach('Beforeall',async({browser})=>{
        context=await browser.newContext();
        page=await context.newPage();
    });
    test('First Test',async({page})=>{
        await page.goto("https://selectorshub.com/xpath-practice-page/");
    })
});