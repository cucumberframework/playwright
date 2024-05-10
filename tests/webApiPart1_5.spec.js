const { expect,test,request} = require("@playwright/test");

const loginPayload=  {userEmail:"b03810742@gmail.com", userPassword:"Rab03810742@"};
const baseURl="https://rahulshettyacademy.com/api/ecom/auth/login";
test.beforeAll( async()=>{
const browserContext= await request.newContext();
const loginResponse = await browserContext.post(baseURl,
    {
        data:loginPayload
    });
expect(loginResponse.ok()).toBeTruthy();
let loginResponseJson;
await loginResponse.json().then(data=>{
    loginResponseJson=data.token;
});
    console.log("loginResponseJson----->"+loginResponseJson);
});

test('More validations for elements, popups',async({page})=>
{
/// now we will ne injecting the token into local storage of the 
page.addInitScript(value =>{
    window.localStorage.setItem('token',value)
},loginResponseJson);
await page.goto(baseURl);
//await page.goto("https://golfoy.com/golf-accessories.html");
await page.waitForTimeout(10000)

});

