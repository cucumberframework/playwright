const {test,expect } =require('@playwright/test');
const { golfyPOManager } = require('../pageObjects/golfyPOManager');
const { allure } = require('allure-playwright');


test('@dryrun repracticing', async({page})=>{
    const golfyManager= new golfyPOManager(page);
    await allure.step('Navigate to the URL  ', async()=>{
        await page.goto("https://golfoy.com/");
    });
    await allure.step('Fill in the name with Rahul',async()=>{
        await golfyManager.search.fill('Rahul');
    });
    await allure.step('Wait for login to appear', async()=>{
        await golfyManager.login.waitFor();
        await golfyManager.login.click();
        await page.waitForTimeout(5000);
    });
        
    await allure.step('Wait for SignIn option to appear and then click on the sign in option',async()=>{
        await golfyManager.signInWithEmail.waitFor();
        await golfyManager.signInWithEmail.click();
    });
    await allure.step('Enter eamilId and password and then click on login button',async()=>{
        await golfyManager.emailAddress.fill('mailme.rahul09@gmail.com');
        await golfyManager.password.fill('9892338563');
        await golfyManager.loginButton.click();
        await golfyManager.userNameAfterLogin.waitFor();
        await expect(golfyManager.userNameAfterLogin).toBeVisible();
        console.log(await golfyManager.userNameAfterLogin.textContent());
        expect(await golfyManager.userNameAfterLogin).toContainText('rahul barapatre');
        await golfyManager.golfylogo.waitFor();
        await golfyManager.golfylogo.click();
    });
    await allure.step('Click on the balls from homepage',async()=>{
        await golfyManager.homepage.balls.waitFor();
        await golfyManager.homepage.balls.click();
        await page.reload();
    });
    await allure.step('Enter the name of the ball which wyou want to search and then hit Enter button from keyboard', async()=>{
        await golfyManager.homepage.searchBar.fill("pro v1 golf ball");
        // await golfyManager.homepage.getRequiredGolfBall.click();
        await golfyManager.homepage.searchBar.press('Enter');
        await page.waitForTimeout(4000);
        await golfyManager.homepage.searchRequiredBall().click();
    });

    await allure.step('Add the balls Quantity to two and check if quantity has increased', async()=>{
        await golfyManager.cartCheckout.increaseQuantity.click();
        await golfyManager.cartCheckout.customPrintCheckbox.click();
        await expect(await golfyManager.cartCheckout.customPrintCheckbox).toBeChecked();
    });
})