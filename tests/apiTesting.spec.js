const {test, expect}=require("@playwright/test")


test("This is to test API automation ",async({request})=>{
    //https://reqres.in
const response=await request.get("https://reqres.in/api/users/2");
console.log(await response.json());
var responseText= await response.text();
console.log(responseText);
expect(responseText).toContain("janet");
expect(response.status()).not.toBe(600);
expect(response.status()).toBe(200);

});