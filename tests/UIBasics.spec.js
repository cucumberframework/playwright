const {test,expect} =require('@playwright/test')

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
   console.log(await page.title());
   await expect(page).toHaveTitle('SurveyMonkey: The World’s Most Popular Free Online Survey Tool');
   await page.locator('a[class*="2-982"]').click();
   await page.locator('#username').fill('rbrahulbarapatre@gmail.com');
   await page.locator('button[type="submit"]').click();
   
});
