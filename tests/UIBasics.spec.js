const {test} =require('@playwright/test')

test('Browser  playwright test execution', async ({browser})=>
{
    //newContext() is used to create new context of the browser , it is equivalen
    //webDriver driver = new chromeDirver (), it is used when we need to set cookies 
    
    const context =await browser.newContext();

    //it is used to open new page 
    const page= await context.newPage();
    await page.goto("https://www.google.com");
});

test('First playwright test execution', async ({page})=>
{
   await page.goto("https://www.surveymonkey.com");
});
