const {test,expect}= require("@playwright/test")

    //https://reqres.in
    //APIRequest
    //APIRequestContext
    //APIResponse
    //APIResponseAssertions

const baseURL="https://rahulshettyacademy.com";
const resource="/maps/api/place/add/json";
const qureyParameter="key=qaclick123";
const finalURL=`${baseURL}${resource}${qureyParameter}`;
console.log(finalURL)
test("Post-Location API",async({request})=>{
var response= await request.post(finalURL,{
    data:{
        location: {
            "lat" : "-38.383494",
            "lng" : "33.427362"
            },
            "accuracy" :"50",
            
            "name":"Frontline house",
            "phone_number":"(+91) 983 893 3937",
            "address":"29, side layout, cohen 09",
            "types":[
             "shoe park",
             "shop"
            ],
            "website":"http://google.com",
            "language":"French-IN"
    }
})
var responseText=await response.text();
expect(response.status()).toBe(200);
console.log(responseText);
})
