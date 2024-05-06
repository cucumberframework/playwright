
const {test,expect} =require('@playwright/test')
test('First playwright test execution', async ({browser})=>
{
    const context= await browser.newContext();
    const page=await context.newPage();
   await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
   console.log(await page.title());
   await expect(page).toHaveTitle('SmartOffice');
   //Switch to frame of the creadentials 
   const loginPageFrame = await page.frameLocator('#frame_cache_0');
   const officeName=loginPageFrame.locator('#Office'); 
   const userName=loginPageFrame.locator("#User");
   const password=loginPageFrame.locator("#Pwd");
   const rememberMeCheckBox=loginPageFrame.locator("#remember");
   const submitButton=loginPageFrame.locator("#submit");
   const advancedSearch= page.locator("#searchAdvanced");
   const searchBox=page.locator("#search_value");
   const searchIcon=page.locator(".icon-search");
   const userDropDown= page.locator("#toplinkUserName");
   const trainingCentre= page.locator("a[href*='training_centre']");


   // Enter In correct office name , user name and password and then click on Submit
   await officeName.fill('bobbyms')
   await userName.fill('Bobby');
   await password.fill('sod3mo');
   await submitButton.click();
   await rememberMeCheckBox.waitFor()
   await rememberMeCheckBox.click();
   await submitButton.click();

   //switch to mainframe
   await page.mainFrame(); 
   await userDropDown.waitFor();
   await userDropDown.click(); 

  /* 
  //user cliks on training centre 
   const [newpage]= Promise.all(
    [context.waitForEvent('page'),
    await trainingCentre.click(),]
   );
*/
});