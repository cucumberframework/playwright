
const {test,expect} =require('@playwright/test')
const {POManager}=require('../pageObjects/POManager');
const { allure } = require('allure-playwright');
//json-->String-->JavaScriptObject
const dataSet=JSON.parse(JSON.stringify(require('../utils/singleLoginMS.json')));
test(`@dryrun First playwright test execution for ${dataSet.officename}`, async ({page})=>
{
   const poManager= new POManager(page);
   await allure.step('Navigate to the URL',async()=>{
      await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
   });
   await allure.step("LoginIn into the application",async()=>{
      await poManager.loginPage.login(dataSet.officename, dataSet.username, dataSet.password);
   });
   await allure.step("Search for contact or business with name as Test1",async()=>{
      await poManager.dashboardHeaderPage.searchContactBusiness("Test1");
      expect(await poManager.dashboardHeaderPage.advanceSearch).toContainText('Advanced Search');
   });
  await allure.step("click on Adavance search and then select the dropdown",async()=>{
      await page.waitForLoadState("networkidle");
      await poManager.dashboardHeaderPage.advanceSearch.waitFor();
      await poManager.dashboardHeaderPage.advanceSearch.click();
      await poManager.searchContactBusinessPopup.contactBusinessRadio.first().waitFor();
  });
  await allure.step("click on Radio button got Contacts and assert that radio button is checked ",async()=>{
     await poManager.searchContactBusinessPopup.contactBusinessRadio.nth(1).click();
     await expect(poManager.searchContactBusinessPopup.contactBusinessRadio.nth(1)).toBeChecked();
  });
   //Enter First name and last name
   await allure.step("Enter First name and last name",async()=>{
      await poManager.searchContactBusinessPopup.firstLastName.fill("bobby");
   });
   
   /*

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