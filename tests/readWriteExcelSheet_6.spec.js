const ExcelJS=require('exceljs');
const {test,expect}= require('@playwright/test');

//read write data from excelJS
//install exceljs dependency -- > npm install exceljs
let output={row:-1,col:-1};
const workbook=new ExcelJS.Workbook();
let workSheet;
async function writeSheet(filePath,workbook,workSheet,textToReplace,newTextToadd){
    await workbook.xlsx.readFile(filePath);
    workSheet=workbook.getWorksheet(sheetName);
    workSheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            if(cell.value===textToReplace){
                output.row=rowNumber;
                output.col=colNumber;   
            };   
        });
    });
    writeIntoSheet(output.row,output.col,filePath);
}
async function updatePrice(filePath,sheetName,textToReplace,newPrice,change){
    await workbook.xlsx.readFile(filePath);
    workSheet=workbook.getWorksheet(sheetName);
    workSheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            if(cell.value===textToReplace){
                output.row=rowNumber;
                output.col=colNumber+change.columnChange;   
            };   
        });
    });
    writeIntoSheet(output.row,output.col,filePath,newPrice);
}
async function writeIntoSheet(row,col,filePath,newPrice){
    const cell =workSheet.getCell(row,col);
    cell.value=newPrice;
    await workbook.xlsx.writeFile(filePath);
}
//updatePrice('/Users/rahulbarapatre/Downloads/download.xlsx',"Sheet1","Mango",1522,{rowChange:0,columnChange:2});
test('Upload and download from the webPage',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const downloaadEvent=await page.waitForEvent('download'); // file may take time to download so we are setting the event so that 
    await page.locator('#downloadButton').click();
    await downloaadEvent // it will awit for event to complete and event trigger to complete as mentioned in step 44
    updatePrice('/Users/rahulbarapatre/Downloads/download.xlsx',"Sheet1","Mango",9999,{rowChange:0,columnChange:2});
    await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles('/Users/rahulbarapatre/Downloads/download.xlsx');
});
