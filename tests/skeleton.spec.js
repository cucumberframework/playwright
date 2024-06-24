const{test}=require('@playwright/test')
let context;
let page;
test.describe('Sample describe',()=>{

    test.beforeEach('Sample beforeeach',async({browser})=>{
context=await browser.newContext();
page=await context.newPage();
})
        test('Sampletest',async()=>{
            console.log('Page is opened');
        })
    
});