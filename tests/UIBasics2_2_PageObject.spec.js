/**
 * Test suite for contact management
 */
test('Test suite for contact management', async () => {
  // Create a new instance of the POManager class, passing in the page object
  const poManager = new POManager(page);

  /**
   * Step 1: Enter First name and Last name and then click on search
   */
  await allure.step("Enter First name and Last name and then click on search", async () => {
    // Fill in the first and last name fields with the value "Automa_akshayTambe"
    await poManager.searchContactBusinessPopup.firstLastName.fill("Automa_akshayTambe");
    // Fill in the primary advisor field with the value "test"
    await poManager.searchContactBusinessPopup.primaryAdvisor.fill("test");
    // Verify that the search button is visible
    await expect(poManager.searchContactBusinessPopup.searchButtonFromPopup).toBeVisible();
    // Click the search button
    await poManager.searchContactBusinessPopup.searchButtonFromPopup.click();
    // Verify that the contact does not exist text is visible
    await expect(poManager.searchContactBusinessPopup.contactDoesNotExistText).toContainText('Add this Contact?');
  });

  /**
   * Step 2: Verify that contact does not exist popup comes up with Yes and No button and then user clicks on No button
   */
  await allure.step("Verify that contact does not exist popup comes up with Yes and No button and then user clicks on No button", async () => {
    // Verify that the contact not exist yes button is visible
    await expect(poManager.searchContactBusinessPopup.contactNotExistYesButton).toBeVisible();
    // Click the contact not exist yes button
    await poManager.searchContactBusinessPopup.contactNotExistYesButton.click();
  });

  /**
   * Step 3: Check if new contact popup is opened up
   */
  await allure.step("Check if new contact popup is opened up", async () => {
    // Verify that the last name field has the attribute ezcolid with value 65542
    await expect(poManager.newContactPopupWin.lastName).toHaveAttribute("ezcolid", "65542");
  });

  /**
   * Step 4: Enter Last name and First name and then click on Save and Close
   */
  await allure.step("Enter Last name and First name and then click on Save and Close", async () => {
    // Fill in the last name field with the value "Automa_Akshaytambe"
    await poManager.newContactPopupWin.lastName.fill('Automa_Akshaytambe');
    // Click the save and close button
    await poManager.newContactPopupWin.saveAndClose.click();
  });

  /**
   * Step 5: Verify that contact detail page is opened up
   */
  await allure.step("Verify that contact detail page is opened up", async () => {
    // Verify that the last name field has the attribute rawvalue with value "Automa_Akshaytambe"
    await expect(poManager.contactDetailPageEle.lastName).toHaveAttribute("rawvalue", "Automa_Akshaytambe");
  });

  /**
   * Step 6: Delete contact record
   */
  await allure.step("Delete contact record", async () => {
    // Call the delete record function on the dashboard side menu
    await poManager.dashBoardSideMenu.deleteRecord();
  });
});

/**
 * This test is currently skipped
 */
test.skip('Creating new contact', async () => {
  // Create a new instance of the POManager class, passing in the page object
  const poManager = new POManager(page);
  // Call the create new contact record function with the value "Auto"
  await poManager.createNewContactRecord("Auto");
  // Call the delete all existing records function with the value "Rahul"
  // await poManager.deleteAllExistingRecords("Rahul");
});

/**
 * This test checks the filter setup
 */
test('Check filter setup', async () => {
  // Create a new instance of the POManager class, passing in the page object
  const poManager = new POManager(page);
  // Click the setup option on the side menu
  await poManager.sideMenuOptions.getSideMenuOption("Setup").click();
  // Click the filter sub menu option
  await poManager.sideMenuOptions.getFilterSubMenu("Filter").click();
  // Fill in the filter name text field with the value "Auto_"
  await poManager.filtersPopup.filterNameTextField.fill("Auto_");
  // Click the search button
  await poManager.filtersPopup.searchButton.click();
});

/**
 * This test searches for a dynamic report with a filter
 */
test('Search for Dynamic report with filter', async () => {
  // Create a new instance of the POManager class, passing in the page object
  const poManager = new POManager(page);
