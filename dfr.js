// test 1
const fs = require("fs");

function fileExists(filename) {
  return fs.existsSync(filename);
}
// test 2
function validNumber(value) {
  { 
      // value can be string or numeric // returns a boolean 

      const number = parseFloat(value); // parseFloat is used to check if value can be converted into a finite number
      const isValidFormat = /^-?\d+(\.\d+)?$/.test(value); // Regex Check: '^-?\d+(\.\d+)?$' ensures the input has an optional - sign, followed by digits, with an optional decimal portion.
      return isValidFormat && !isNaN(number) && isFinite(number);
  
  } };

// test 3
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


// test 4 
// dataset = [[1500.5]] // needs to return 0
function findTotal(dataset) {
   {

    if (!Array.isArray(dataset) || dataset.length === 0) return 0 ;
   
    const validNumber = value => typeof value === 'number' && !isNaN(value);
   
    
    const validNumbers = dataset.filter(value => validNumber (value)).map(Number) ; 
    if (validNumbers.length === 0) return 0
    return validNumbers. reduce(( acc, num) => acc + num, 0);
    }
  }



// test 5 

function calculateMean(dataset) {
  if (!Array.isArray(dataset) || dataset.length === 0) return false;
 
  const validNumbers = dataset.filter(value => validNumber(value)).map(Number);
 if (validNumbers.length === 0 ) return false;
 
 const sum = validNumbers.reduce((acc,num)=> acc + num, 0);
 return sum / validNumbers.length;
}

// Usage examples
console.log(calculateMean([1, 2, 3]));              // Output: 2
console.log(calculateMean([1, 'a', null, 3]));      // Output: 2
console.log(calculateMean([]));                       // Output: false
console.log(calculateMean([NaN, undefined, 5]));    // Output: false
console.log(calculateMean("not an array"));          // Output: false





  
// test 6
function calculateMedian(data) {
  
    if (!Array.isArray(data) || data.length === 0) {  // Check for valid input
        return false;
    }

    const validData = data.filter(x => typeof x === 'number'); // Filter out invalid (non-numeric) values

    if (validData.length === 0) {    // If no valid data remains
        return false;
    }

    validData.sort((a, b) => a - b);     // Sort the valid data
    const n = validData.length;

    let median;
    if (n % 2 === 1) {
        median = validData[Math.floor(n / 2)] // Odd length: return the middle element
    } else {
        median = (validData[n / 2 - 1] + validData[n / 2]) / 2;  // Even length: return the average of the two middle elements
    }

    return median;
}

// test 7
function convertToNumber(dataframe, col) {

}
// test 8
function flatten(dataframe) {

}
// test 9
          
function loadCSV(csvFile, ignoreRows, ignoreCols) {
}

// test 10

function createSlice(dataframe, columnIndex, pattern, exportColumns = []) {
}


// const slicedData = sliceDataFrame(data, 1, 'tpc', ['id', 'value']);
// console.log(slicedData);







// function createSlice(dataframe, columnIndex, pattern, exportColumns = [])

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