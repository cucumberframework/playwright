const { test, expect } = require("@playwright/test")


test("This is to test API automation ", async ({ request }) => {
    //https://reqres.in
    //APIRequest
    //APIRequestContext
    //APIResponse
    //APIResponseAssertions

    const response = await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json());
    var rawResponse= await response.body();
    console.log("This is response body----"+(await response.body()).toJSON() )
    var jsonResponse=JSON.parse(rawResponse.toString());
    console.log("This is output of jsonResponse--"+jsonResponse);
    var responseText = await response.text();
    console.log(responseText);
    expect(responseText).toContain("Ferguson");
    expect(response.status()).not.toBe(600);
    expect(response.status()).toBe(200);

});

test("This is Post request", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    });
    let resp = await response.text();
    console.log(response.json());
    expect(resp).toContain("morpheus");
    expect(response.status()).toBe(201);

})

test("Put request example", async ({ request }) => {
    const putRawResponse = await request.put("https://reqres.in/api/users/2", {
        data: {
            "name": "Rahul",
            "job": "Automation Engineer"
        }
    })
    expect(putRawResponse.status()).toBe(200);
    var response = await putRawResponse.text();
    console.log(response);
    expect(response).toContain("Rahul");

})
test("RahulShetty Acadamy library api",async({request})=>{
    const baseURL="http://216.10.245.166";
    const resource="/Library/Addbook.php";
    const finalURL=`${baseURL}${resource}`;
    var response=await request.post(finalURL,{
        data:{
                "name":"Learn Appium Automation with Java",
                "isbn":"fd",
                "aisle":"33",
                "author":"33 foe"
        }
    })
    var responseText=await response.text();
    console.log(responseText);
    expect(response.status()).toBe(200);
})