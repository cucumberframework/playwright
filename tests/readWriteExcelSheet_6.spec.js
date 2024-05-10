const ExcelJS=require('exceljs');

//read write data from excelJS
//install exceljs dependency -- > npm install exceljs
let output={row:-1,col:-1};
async function excelTest(filePath,sheetName,textToReplace,newTextToadd){
    const FileLoction=filePath;
    const workbook=new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const workSheet=workbook.getWorksheet(sheetName);
    writeSheet(filePath,workbook,workSheet,textToReplace,newTextToadd)
};
async function writeSheet(filePath,workbook,workSheet,textToReplace,newTextToadd){
    workSheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            if(cell.value===textToReplace){
                output.row=rowNumber;
                output.col=colNumber;   
            };   
        });
    });
    const cell =workSheet.getCell(output.row,output.col);
    cell.value=newTextToadd;
    await workbook.xlsx.writeFile(filePath);
}
excelTest('/Users/rahulbarapatre/Desktop/PlayWrightAutomation/externalFiles/playwright.xlsx',"Sheet1","NoWow500","NoWow100");