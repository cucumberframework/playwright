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

test('@smoke Test1 from UI basics file', async ({page})=>
{
   await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
   console.log(await page.title());
   await expect(page).toHaveTitle('SmartOffice');
   //Switch to frame of the creadentials 
   const loginPageFrame = await page.frameLocator('#frame_cache_0');
   // const officeName=loginPageFrame.locator('#Office'); 

   // we can get the element with the hellp of placeholder also 
   const officeName=loginPageFrame.getByPlaceholder("Office Name");
   const userName=loginPageFrame.locator("#User");
   const password=loginPageFrame.locator("#Pwd");
   const rememberMeCheckBox=loginPageFrame.locator("#remember");

   //Locating element with getByRole, which accepts two arguments , 1st is type of element and other is name of the actial element which is displayed in the screen
   const submitButton=loginPageFrame.getByRole('button',{name: 'Sign in'});
   const advancedSearch= page.locator("#searchAdvanced");
   const searchBox=page.locator("#search_value");
   const searchIcon=page.locator(".icon-search");

   // Enter In correct office name , user name and password and then click on Submit
   // Enter In correct office name , user name and password and then click on Submit
   await officeName.fill('bobbyms')
   await userName.fill('Bobby');
   await password.fill('sod3mo');
   await rememberMeCheckBox.waitFor()
   await rememberMeCheckBox.click();
   await submitButton.click();
   /*
   // Check the error message which is displayed and assert the same 
   const errorMesage = await loginPageFrame.locator('form[id="loginForm"] div[style*="margin-bottom"] span[reason*="Your sign-in information"]').textContent();
   await expect(await loginPageFrame.locator('form[id="loginForm"] div[style*="margin-bottom"] span[reason*="Your sign-in information"]')).toContainText('Your sign-in information is incorrect. Please try again.');
   console.log(errorMesage);

   // if I want to perform action on the first element  out of hte list of elements then 
   console.log(await loginPageFrame.locator('form[id="loginForm"] div[class="input-group addon-left"]').first().textContent()); //this will give the first element 
   console.log(await loginPageFrame.locator('form[id="loginForm"] div[class="input-group addon-left"]').last().textContent()); //this will give the last element from hte list of element
   console.log(await loginPageFrame.locator('form[id="loginForm"] div[class="input-group addon-left"]').nth(1).textContent()); //this will give the element of nth index 
   
   // Removing the Incorrect credentials and enter correct credentials 
   await officeName.fill("");
   await officeName.fill('bobbyms')
   console.log('Added correct user name');
   await userName.fill("");
   await userName.fill("Bobby");
   await password.fill("");
   await password.fill('sod3mo');
   console.log('Added correct credentials and clicked ');
   //await rememberMeCheckBox.waitFor()
   //await rememberMeCheckBox.click();
   await submitButton.click();
*/
   //switch to mainframe
   await page.mainFrame(); 
   await advancedSearch.waitFor();
   console.log(await advancedSearch.textContent());
   await expect(advancedSearch).toContainText('Advanced Search');  //this will conpare the actual and expected text
   await searchBox.fill("Test1");
   await searchIcon.click();

  //await page.waitForLoadState('networkidle'); // it will wait for all network call to get complete 
  // await topHeaderTab.first().waitFor(); // it will wait for the last element to load from the list of element 
   //console.log(await topHeaderTab.allTextContents());

   const pageFrame= await page.frameLocator('#frame_cache_0');
   const topHeaderTab= await pageFrame.locator('.CURRENTTAB');
   await expect(topHeaderTab).toContainText('Personal'); 

  //click on Adavance search and then select the dropdown 
   await page.mainFrame();
   await page.waitForLoadState("networkidle");
   await advancedSearch.waitFor();
   await advancedSearch.click();

   // navigating freame inside frame
   const frameOne = await page.frameLocator(".embed-responsive-item");
   const frameTwo= await frameOne.frameLocator("#ebRealModalFrame");
   await frameTwo.locator(".RADIO").first().waitFor();

   //click on Radio button got Contacts and assert that radio button is checked 
   await frameTwo.locator(".RADIO").nth(1).click();
   await expect(await frameTwo.locator(".RADIO").nth(1)).toBeChecked();
   await frameOne.frameLocator("#ebRealModalFrame").locator("#nm").fill("bobby");

   // console.log(await frameTwo.locator("#both_nm").isVisible());
   console.log(await frameTwo.locator("#ipID_65627").isVisible());

   // finding the element with the Role and other parameters 
   await frameTwo.getByRole("button",{name: 'Search'}).click();

   // this is hard wait and will pause the script for 3 seconds 
   await page.waitForTimeout(3000); 

   /*if(await frameTwo.getByLabel('Household Name').isVisible()){ 
    await expect (frameTwo.getByLabel('Household Name')).toHaveText('Household Name');
   }
  const houseHoldnameField=await frameTwo.locator("div[class='FIELDS'] input[uniqueeventid*='SimpleForm']");
  await houseHoldnameField.click();
  */
  const lastName= await pageFrame.locator('#lastname').getAttribute('value');
  console.log(lastName);
  await expect(lastName).toBe('Bobby');

  const sourceField=pageFrame.locator("#source");
  await sourceField.waitFor();
  await sourceField.fill('SourceField');
  await page.waitForTimeout(3000);

  // selecting element from the dropdown for smartoffice application and playwright methods are NOT working 
  await pageFrame.locator("img[ezsubclass='dropdown']").nth(1).click();
  await pageFrame.locator("select[inputid='title'] option").nth(1).click();

  //check if element element is visible or not
});
