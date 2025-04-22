const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager');
const { allure } = require('allure-playwright');

// json --> String --> JavaScript Object
const dataSet = JSON.parse(JSON.stringify(require('../utils/singleLoginMS.json')));

let context;
let page;

test.describe(`SmartOffice contact creation flows`, () => {
  test.beforeEach('Login into SmartOffice', async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    const poManager = new POManager(page);

    await allure.step('Navigate to the URL', async () => {
      await page.goto("https://sodev.ebixcrm.com/ms/index.htm");
    });

    await allure.step("Login into the application", async () => {
      await poManager.loginPage.login(dataSet.officename, dataSet.username, dataSet.password);
    });
  });

  test(`@dryrun First Playwright test execution for ${dataSet.officename}`, async () => {
    const poManager = new POManager(page);

    await allure.step("Search for contact or business with name as Test1", async () => {
      await poManager.dashboardHeaderPage.searchContactBusiness("Test1");
      expect(await poManager.dashboardHeaderPage.advanceSearch).toContainText('Advanced Search');
    });

    await allure.step("Click on Advanced Search and then select the dropdown", async () => {
      await page.waitForLoadState("networkidle");
      await poManager.dashboardHeaderPage.advanceSearch.waitFor();
      await poManager.dashboardHeaderPage.advanceSearch.click();
      await poManager.searchContactBusinessPopup.contactBusinessRadio.first().waitFor();
    });

    await allure.step("Click on Radio button for Contacts and assert that radio button is checked", async () => {
      await poManager.searchContactBusinessPopup.contactBusinessRadio.nth(1).click();
      await expect(poManager.searchContactBusinessPopup.contactBusinessRadio.nth(1)).toBeChecked();
    });

    await allure.step("Enter First name and Last name and then click on search", async () => {
      await poManager.searchContactBusinessPopup.firstLastName.fill("Automa_akshayTambe");
      await poManager.searchContactBusinessPopup.primaryAdvisor.fill("test");
      await expect(poManager.searchContactBusinessPopup.searchButtonFromPopup).toBeVisible();
      await poManager.searchContactBusinessPopup.searchButtonFromPopup.click();
      await expect(poManager.searchContactBusinessPopup.contactDoesNotExistText).toContainText('Add this Contact?');
    });

    await allure.step("Verify that contact does not exist popup comes up with Yes and No button and then user clicks on No button", async () => {
      await expect(poManager.searchContactBusinessPopup.contactNotExistYesButton).toBeVisible();
      await poManager.searchContactBusinessPopup.contactNotExistYesButton.click();
    });

    await allure.step("Check if new contact popup is opened up", async () => {
      await expect(poManager.newContactPopupWin.lastName).toHaveAttribute("ezcolid", "65542");
    });

    await allure.step("Enter Last name and First name and then click on Save and Close", async () => {
      await poManager.newContactPopupWin.lastName.fill('Automa_Akshaytambe');
      await poManager.newContactPopupWin.saveAndClose.click();
    });

    await allure.step("Verify that contact detail page is opened up", async () => {
      await expect(poManager.contactDetailPageEle.lastName).toHaveAttribute("rawvalue", "Automa_Akshaytambe");
    });

    await allure.step("Delete contact record", async () => {
      await poManager.dashBoardSideMenu.deleteRecord();
    });

    /*
    // Example of additional code
    console.log(await frameTwo.locator("#ipID_65627").isVisible());

    // Finding the element with the Role and other parameters
    await frameTwo.getByRole("button", { name: 'Search' }).click();

    // Hard wait for 3 seconds
    await page.waitForTimeout(3000);

    const houseHoldnameField = await frameTwo.locator("div[class='FIELDS'] input[uniqueeventid*='SimpleForm']");
    await houseHoldnameField.click();

    const lastName = await pageFrame.locator('#lastname').getAttribute('value');
    console.log(lastName);
    await expect(lastName).toBe('Bobby');

    const sourceField = pageFrame.locator("#source");
    await sourceField.waitFor();
    await sourceField.fill('SourceField');
    await page.waitForTimeout(3000);

    await pageFrame.locator("img[ezsubclass='dropdown']").nth(0).click();
    await pageFrame.locator("#sc65547").selectOption('1');
    */
  });

  test.skip('Creating new contact', async () => {
    const poManager = new POManager(page);
    await poManager.createNewContactRecord("Auto");
    // await poManager.deleteAllExistingRecords("Rahul");
  });

  test('Check filter setup', async () => {
    const poManager = new POManager(page);
    await poManager.sideMenuOptions.getSideMenuOption("Setup").click();
    await poManager.sideMenuOptions.getFilterSubMenu("Filter").click();
    await poManager.filtersPopup.filterNameTextField.fill("Auto_");
    await poManager.filtersPopup.searchButton.click();
  });

  test('Search for Dynamic report with filter', async () => {
    const poManager = new POManager(page);
    await poManager.searchDynamicReportByName("Automa_");
    // await poManager.searchDynamicReportByKeyword("All");
  });
});