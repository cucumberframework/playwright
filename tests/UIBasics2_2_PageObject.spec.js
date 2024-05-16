
const {test,expect} =require('@playwright/test')
const { CreateStep2 } = require('./pageObjects/CreateStep2');
const {POManager}=require('./pageObjects/POManager')
test('First playwright test execution', async ({page})=>
const {POManager}=require('../pageObjects/POManager')
//json-->String-->JavaScriptObject
const dataSet=JSON.parse(JSON.stringify(require('../utils/smartOfficeTestData.json')));
test(`First playwright test execution for ${dataSet.officename}`, async ({page})=>

{
   const poManager= new POManager(page);
   await page.goto("https://sodev.ebixcrm.com/ms/index.htm");

   await step2.login('bobbyms', 'Bobby', 'sod3mo')
   

   await poManager.loginPage.login(dataSet[0].officename, dataSet[0].username, dataSet[0].password);

   await poManager.loginPage.login('bobbyms', 'Bobby', 'sod3mo');

   await poManager.dashboardHeaderPage.searchContactBusiness("Test1");
   expect(await poManager.dashboardHeaderPage.advanceSearch).toContainText('Advanced Search'); 
   /*
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
  
  const lastName= await pageFrame.locator('#lastname').getAttribute('value');
  console.log(lastName);
  await expect(lastName).toBe('Bobby');

  const sourceField=pageFrame.locator("#source");
  await sourceField.waitFor();
  await sourceField.fill('SourceField');
  await page.waitForTimeout(3000);

  await pageFrame.locator("img[ezsubclass='dropdown']").nth(0).click();
  await pageFrame.locator("#sc65547").selectOption('1');

  */
});