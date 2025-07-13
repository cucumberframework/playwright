const {test, expect}=require('@playwright/test');
let context;
let page;
test.describe('Describe block',()=>{
    test.beforeEach('Beforeall',async({browser})=>{
        context=await browser.newContext();
        page=await context.newPage();
    });
    test('@reg1 First Test',async({page})=>{
        
        await page.goto("https://selectorshub.com/xpath-practice-page/");
        //await page.getByRole('textbox',{name:'user password field'}).fill("Rahul");
    });
    test.fixme('Second Test',async({page})=>{
        tag:'@smoke';
        Console.log('This is second test record');
    });
});