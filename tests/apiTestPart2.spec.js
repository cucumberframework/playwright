const { test, expect } = require("@playwright/test")

const baseURL="http://216.10.245.166";
//var author='33 dsd77676s'
test("RahulShetty Acadamy library api",async({request})=>{
   
    const resource="/Library/Addbook.php";
    const finalURL=`${baseURL}${resource}`;
    var author;
    var response=await request.post(finalURL,{
        data:{
                "name":"Lssearn ffgf Automation with Java",
                "isbn":"trrr",
                "aisle":"ssss",
                "author":"rahul"
        }
    })
    var responseText=await response.text();
    console.log(responseText);
    expect(response.status()).toBe(200);
    

});

test.skip("Get the posted book",async({request})=>{
    //var author='84522'
    const resource='/Library/GetBook.php?AuthorName=kkkkk';
    console.log(resource)
    const finalgetURL=`${baseURL}${resource}`
    console.log(finalgetURL)
    var response=await request.get(finalgetURL);
    expect(response.status()).toBe(200);
})

test("Post requestDeleteBookAPI",async({request})=>{
const resourseDelete="/Library/DeleteBook.php"
const finalDeletePost=`${baseURL}${resourseDelete}`
    const response1=await request.post(finalDeletePost,{
        data:{
            "ID": "trrrssss"
        
            }
    })
})