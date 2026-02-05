const {test, expect}=require('../../fixtures/loginFixture');
test('This is fixture test',async({login})=>{
    console.log(login.userName);
})