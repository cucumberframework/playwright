const{test,expect}=require('@playwright/test')
const testdata2=require('../tests/testdata2.json');

let context;
let page;
test.describe('This is describe block',()=>{

    test.beforeAll('This is beforeAll block',async({browser})=>{
        context=await browser.newContext();
        page=await context.newPage();
    })

    test('This is test block',async({page})=>{
        //let userID=testdata2.user.id;
        console.log("ID::"+testdata2.user.id);  //accessing id value
        console.log("profile::"+testdata2.user.profile.age);//accessing age
        console.log("Address::"+testdata2.user.profile.address.state); //accessing state
        console.log("city::"+testdata2.user.profile.address.city);
        console.log("preferences::"+testdata2.user.profile.preferences.languages);
        let orderFind=testdata2.orders.find(o=>o.orderId==="ORD1001");
        console.log(orderFind.status);
    })
})