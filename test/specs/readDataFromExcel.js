// var xlsx=require("xlsx");
// var wb=xlsx.readFile("./test/specs/TestData/TestDataJS.xlsx")

// let totalSheets=wb.SheetNames
// console.log(totalSheets)

// let ws=wb.Sheets['OpenAcc1'];
// console.log(ws)

// let excelData=xlsx.utils.sheet_to_json(ws)
// console.log(excelData);
// console.log(excelData[0].Name);


var xlsx=require("xlsx")
let wb=xlsx.readFile("./test/specs/TestData/TestDataJS.xlsx")

let totalSheets=wb.SheetNames
let ws=wb.Sheets['OpenAcc1'];

let excelData=xlsx.utils.sheet_to_json(ws)
