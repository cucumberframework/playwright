const {test}=require('@playwright/test')
let context;
let page;
test.describe('this is first describe',()=>{
    test.beforeEach('This is first each',async({browser})=>{
    context=await browser.newContext();
    page=await context.newPage();
    });
    test('This is first test',async()=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    
    //user cliks on training centre 
   const [newPage]= await Promise.all(
    [context.waitForEvent('page'),
     page.locator("#opentab").click()]
   );
   await newPage.waitForLoadState();
   await newPage.getByText("Access all our Courses").click();

    });
});