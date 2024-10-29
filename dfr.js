const fs = require("fs");

function fileExists(filename) {
  return fs.existsSync(filename);
}
// test 1
function validNumber(value) {
  { 
    return typeof value === 'number' && isFinite(value); // a value is equal to a number or a realistic value 
  } };

// test 2 
function dataDimensions(data) {
{  
  let rows = -1;
  let cols = -1;
  if (data == null) { // Check if the input is null or undefined
      return [rows, cols];
  }
  if (Array.isArray(data)) { // Handle array of objects (like a DataFrame)
      rows = data.length;
      if (rows > 0 && typeof data[0] === 'object') {
          cols = Object.keys(data[0]).length;
      }
  } else if (typeof data === 'object') { // Handle plain object (single row DataFrame-like structure)
      rows = 1;
      cols = Object.keys(data).length;
  }
  return [rows, cols];
} };


// test 3 
function findTotal(dataset) {
  function findTotal(dataset) {

    if (!Array. isArray(dataset) || dataset.length === 0) return false;
    
    const validNumbers = dataset. filter(value => validNumber (value)) -map (Number) ; 
    if (validNumbers.length === 0) return false;
    return validNumbers. reduce(( acc, num) => acc + num, 0);
    }
  }



// test 4 
function calculateMean(dataset) {
  if (!Array.isArray(dataset) || dataset.length === 0) return false;
 
  const validNumber = dataset.filter(value => validNumber(value)).map(Number);
 if (validNumber.length === 0 ) return false;
 
 const sum = validNumber.reduce((acc,num)=> acc + num, 0);
 return sum / validNumber.length;
}

const dataset1 = [1.5, 1.9, 10.0, 50, -10, '3, 11']; // Renamed ds to dataset1
const dataset2 = [1.9];
const dataset3 = ['a', 'b', 'c']; // No valid numbers




  
// test 5
function calculateMedian(dataset) {

}
// test 6
function convertToNumber(dataframe, col) {

}
// test 7
function flatten(dataframe) {

}
// test 8
function loadCSV(csvFile, ignoreRows, ignoreCols) {

}

// test 9
function createSlice(dataframe, columnIndex, pattern, exportColumns = []) {

}

module.exports = {
  fileExists,
  validNumber,
  dataDimensions,
  calculateMean,
  findTotal,
  convertToNumber,
  flatten,
  loadCSV,
  calculateMedian,
  createSlice,
};