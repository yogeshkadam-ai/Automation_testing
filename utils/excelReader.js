const XLSX = require('xlsx');

function getExcelData(sheetName) {

    const workbook = XLSX.readFile('./testdata/TestData.xlsx');

    const worksheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(worksheet);

    return data;
}

module.exports = {
    getExcelData
};