const {test,expect } =require('@playwright/test');
const { POManager } = require('../pageObjects/POManager');
const { allure } = require('allure-playwright');


test('repracticing', async({page})=>{
    const pomanager= new POManager(page);
    await allure.step('Navigate to the URL  ', async()=>{
        await page.goto("https://golfoy.com/");
    });
    await allure.step('Fill in the name with Rahul',async()=>{
        await pomanager.golfyManager.search.fill('Rahul');
        //golfyManager.search.fill('Rahul');
    });
    await allure.step('Wait for login to appear', async()=>{
        await pomanager.golfyManager.login.waitFor();
        await pomanager.golfyManager.login.click();
        await page.waitForTimeout(5000);
    });
        
    await allure.step('Wait for SignIn option to appear and then click on the sign in option',async()=>{
        await pomanager.golfyManager.signInWithEmail.waitFor();
        await pomanager.golfyManager.signInWithEmail.click();
    });
    await allure.step('Enter eamilId and password and then click on login button',async()=>{
        await pomanager.golfyManager.emailAddress.fill('mailme.rahul09@gmail.com');
        await pomanager.golfyManager.password.fill('9892338563');
        await pomanager.golfyManager.loginButton.click();
        await pomanager.golfyManager.userNameAfterLogin.waitFor();
        await expect(pomanager.golfyManager.userNameAfterLogin).toBeVisible();
        console.log(await pomanager.golfyManager.userNameAfterLogin.textContent());
        expect(await pomanager.golfyManager.userNameAfterLogin).toContainText('rahul barapatre');
        await pomanager.golfyManager.golfylogo.waitFor();
        await pomanager.golfyManager.golfylogo.click();
    });
    await allure.step('Click on the balls from homepage',async()=>{
        await pomanager.golfyManager.homepage.balls.waitFor();
        await pomanager.golfyManager.homepage.balls.click();
        await page.reload();
    });
    await allure.step('Enter the name of the ball which wyou want to search and then hit Enter button from keyboard', async()=>{
        await pomanager.golfyManager.homepage.searchBar.fill("pro v1 golf ball");
        // await golfyManager.homepage.getRequiredGolfBall.click();
        await pomanager.golfyManager.homepage.searchBar.press('Enter');
        await page.waitForTimeout(4000);
        await pomanager.golfyManager.homepage.searchRequiredBall().click();
    });

    await allure.step('Add the balls Quantity to two and check if quantity has increased', async()=>{
        await pomanager.golfyManager.cartCheckout.increaseQuantity.click();
        await pomanager.golfyManager.cartCheckout.customPrintCheckbox.click();
        await expect(await pomanager.golfyManager.cartCheckout.customPrintCheckbox).toBeChecked();
    });
})