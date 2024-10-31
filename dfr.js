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
  // Check if the input is a valid array
  if (!Array.isArray(data) || data.length === 0) return false;

  // Convert all values to numbers, filtering out invalid numbers
  const validNumbers = data.map(Number).filter(value => typeof value === 'number' && !isNaN(value));

  // If no valid numbers remain, return false
  if (validNumbers.length === 0) return false;

  // Sort the valid numbers
  validNumbers.sort((a, b) => a - b);
  const n = validNumbers.length;

  // Calculate and return the median
  if (n % 2 === 1) {
      // Odd length: return the middle element
      return validNumbers[Math.floor(n / 2)];
  } else {
      // Even length: return the average of the two middle elements
      const mid1 = validNumbers[n / 2 - 1];
      const mid2 = validNumbers[n / 2];
      return (mid1 + mid2) / 2;
  }
}

// Usage examples
console.log(calculateMedian([1, 3, 2, 5, 4]));  // Output: 3
console.log(calculateMedian([1, '2', null, 3])); // Output: 2
console.log(calculateMedian([]));                 // Output: false
console.log(calculateMedian([1, 'a', null, 2])); // Output: 1.5
console.log(calculateMedian("not an array"));     // Output: false


// test 7
function convertToNumber(dataframe, col) {
  let countOfColums = 0;
  dataframe.forEach(row => {
    if (validNumber(row[col] && typeof row[col] !== 'number') {
      row[col] = parseInt (row[col])
      countOfColums ++;
 
  };
  })
  return countOfColums;
}


// test 8
function flatten(dataframe) {
  
 const dataset = dataframe.map(row => Object.values(row)[0]);
 return dataset; 
    
}
    const dataframe = [
      { value: 1500 },
      { value: 1750 },
      { value: 1800 },
      { value: 2000 }
    ];
    const dataset = flatten(dataframe);
    console.log(dataset);

// test 9
          
function loadCSV(csvFile, ignoreRows, ignoreCols) {
  const fs = require('fs');

   {
      try {
          // Read the CSV file
          const data = fs.readFileSync(filePath, 'utf8');
  
          // Split the data into rows and trim any whitespace
          const rows = data.split('\n').map(row => row.split(',').map(cell => cell.trim())).filter(row => row.length > 0);
  
          // Original dimensions
          const originalRows = rows.length;
          const originalCols = originalRows > 0 ? rows[0].length : 0;
  
          // Filter out ignored rows
          const filteredRows = rows.filter((_, index) => !ignoreRows.includes(index));
  
          // Filter out ignored columns
          const processedData = filteredRows.map(row => 
              row.filter((_, index) => !ignoreCols.includes(index))
          );
  
          // Return the processed data and original dimensions
          return [processedData, originalRows, originalCols];
      } catch (err) {
          // Return for nonexistent file or read error
          return [[], -1, -1];
      }
  }
  
  // Usage example
  const result = loadCSV('path/to/your/file.csv', [0], [1]);
  console.log(result);
  
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