const {test, expect}= require('@playwright/test');
const testdata=require('../TestData/testdata.json');

let obj={};
test.describe("Describe",()=>{

    test("Test1",async({page})=>{
       console.log("Test id::"+testdata.id);
       console.log(testdata.address.street);
       //getting amount for specific order
       let order =testdata.orders.find(o=>o.orderId=="ORD001");
       console.log("Amount for Order id ORD001::"+order.amount);
       if(!obj["amount"]){
        obj["amount"]=order.amount;
        console.log(obj);

       }

    })
    test("Test 2 for Items", async({page})=>{
       let order= testdata.orders.find(o=>o.orderId==="ORD001");

       let item=order.items.find(it=>it.productId==="P101");
       console.log("Product name::"+item.productName);
    })
})