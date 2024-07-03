const {test, expect}=require('@playwright/test')
let context;
let page;
test.describe('this is first describe',()=>{
    test.beforeEach('This is first each',async({browser})=>{
    context=await browser.newContext();
    page=await context.newPage();
    });
    test.skip('This is first test',async()=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    console.log(await page.locator("#opentab").isVisible());
    await expect(page.locator("#opentab")).toBeVisible();
    //user cliks on training centre 
   const [newPage]= await Promise.all(
    [context.waitForEvent('page'),
     page.locator("#opentab").click()]
   );
   await newPage.waitForLoadState();
    
   await newPage.getByText("Access all our Courses").click();

    });

    test('Checking multiple windows',async()=>{
      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
      const [newWindow]= await Promise.all([
        context.waitForEvent("page"),
        page.locator("#openwindow").click()
      ]);
      await newWindow.waitForLoadState();
      const pages = newWindow.context().pages();
      console.log('No.of tabs: ' + pages.length);
      //await newWindow.getByText("Access all our Courses").click();    
    });
});