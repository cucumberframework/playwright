const {test,expect} =require('@playwright/test')

test('Browser  playwright test execution', async ({browser})=>
{
    //newContext() is used to create new context of the browser , it is equivalen
    //webDriver driver = new chromeDirver (), it is used when we need to set cookies 
    
    const context =await browser.newContext();

    //it is used to open new page 
    const page= await context.newPage();
    await page.goto("https://www.google.com"); 
})

test.only('First playwright test execution', async ({page})=>
{
   await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
   console.log(await page.title());
   await expect(page).toHaveTitle('SmartOffice');
   //Switch to frame 
   const loginPageFrame = await page.frameLocator('#frame_cache_0');
   const officeName=loginPageFrame.locator('#Office'); 
   const userName=loginPageFrame.locator("#User");
   const password=loginPageFrame.locator("#Pwd");
   const rememberMeCheckBox=loginPageFrame.locator("#remember");
   const submitButton=loginPageFrame.locator("#submit");
   const advancedSearch= page.locator("#searchAdvanced");
   const searchBox=page.locator("#search_value");
   const searchIcon=page.locator(".icon-search");
   await officeName.fill('bobbyms1')
   await userName.fill('Bobby');
   await password.fill('sod3mo');
   await submitButton.click();
   const errorMesage = await loginPageFrame.locator('form[id="loginForm"] div[style*="margin-bottom"] span[reason*="Your sign-in information"]').textContent();
   await expect(await loginPageFrame.locator('form[id="loginForm"] div[style*="margin-bottom"] span[reason*="Your sign-in information"]')).toContainText('Your sign-in information is incorrect. Please try again.');
   console.log(errorMesage);
   // if i want to perform action on the first element  out of hte list of elements then 
    console.log(await loginPageFrame.locator('form[id="loginForm"] div[class="input-group addon-left"]').first().textContent()); //this will give the first element 
    console.log(await loginPageFrame.locator('form[id="loginForm"] div[class="input-group addon-left"]').last().textContent()); //this will give the last element from hte list of element
    console.log(await loginPageFrame.locator('form[id="loginForm"] div[class="input-group addon-left"]').nth(1).textContent()); //this will give the element of nth index 
   await officeName.fill("");
   await officeName.fill('bobbyms')
   console.log('Added correct user name');
   await userName.fill("");
   await userName.fill("Bobby");
   await password.fill("");
   await password.fill('sod3mo');
   console.log('Added correct credentials and clicked ');
   await rememberMeCheckBox.waitFor()
   await rememberMeCheckBox.click();
   await submitButton.click();
   //switch to mainframe
   await page.mainFrame(); 
   console.log(await advancedSearch.textContent());
   await expect(advancedSearch).toContainText('Advanced Search');  //this will conpare the actual and expected text
   await searchBox.fill("Test1");
   await searchIcon.click();
   const pageFrame= await page.frameLocator('#frame_cache_0');
   const topHeaderTab= await pageFrame.locator('td[reflinkbarid="_window_id1-linkbar"]');
  //  await page.waitForLoadState('networkidle'); // it will wait for all network call to get complete 
   await topHeaderTab.last().waitFor(); // it will wait for the last element to load from the list of element 
   console.log(await topHeaderTab.allTextContents());

  /* //click on Adavance search and then select the dropdown 
   await page.mainFrame();
   
   await advancedSearch.click();
   const frameOne = await page.frameLocator("#iHFl9");
   await frameOne.frameLocator("#ebRealModalFrame").locator("#both_nm").fill("Rahul");
   
   console.log(await page.locator("#both_nm").isVisible());
   const typeDropdown= await page.locator("#sc65627").waitFor();
   await typeDropdown.selectOption('106');
   */


});
