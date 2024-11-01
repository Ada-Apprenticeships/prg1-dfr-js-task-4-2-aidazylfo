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

  function findTotal(dataset) {
    // Check if dataset is not a 1D array or is empty
    if (dataDimensions(dataset)[1] !== -1 || dataset.length === 0) {
        return 0; 
    }
    
    let total = 0;
    for (let i = 0; i < dataset.length; i++) {
        if (validNumber(dataset[i])) {
            total += parseFloat(dataset[i]); 
        }
    }
    return total;
}
  
  


// test 5 

function calculateMean(dataset) {
  if (dataDimensions(dataset)[1] !==-1 || dataset.length ===0) {
      return 0;
  }
  let sum = 0;
  let count = 0;
  for (let i =0; i<dataset.length; i++) {
     if (validNumber(dataset[i])) {
      sum += parseFloat(dataset[i]);
      count ++;
     }
  }
  return count >0 ? sum/count :0; // returns sum divided by count
}
  
// test 6

function calculateMedian(dataset) {
  if (dataDimensions(dataset)[1] !== -1 || dataset.length === 0) {
      return 0;
  }
  const validNumbers = dataset.filter(validNumber).map(Number).sort((a, b) => a - b);
  const mid = Math.floor(validNumbers.length / 2);//note to self- math.floor rounds down and gives the largest int ≤ to a given num
  return validNumbers.length % 2 === 0
      ? (validNumbers[mid - 1] + validNumbers[mid]) / 2
      : validNumbers[mid];
}

// test 7
function convertToNumber(dataframe, col) {
    let countOfColumns = 0;
    dataframe.forEach(row => {
      if (validNumber(row[col]) && typeof row[col] !== 'number') {
        row[col] = parseInt(row[col])
        countOfColumns ++;
      };
    })
    return countOfColumns;
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
    //console.log(dataset);

// test 9
          
function loadCSV(csvFile, ignoreRows, ignoreCols) {
  const fs = require('fs');
  {
    try {
         const data = fs.readFileSync(csvFile, 'utf8'); // Read the CSV fil
  
         const rows = data.split('\n').map(row => row.split(',').map(cell => cell.trim())).filter(row => row.length > 0); // Split the data into rows and trim any whitespace
  
         const originalRows = rows.length;// Original dimensions
         const originalCols = originalRows > 0 ? rows[0].length : 0;
  
         const filteredRows = rows.filter((_, index) => !ignoreRows.includes(index));  // Filter out ignored rows
  
         const processedData = filteredRows.map(row => // Filter out ignored columns
            row.filter((_, index) => !ignoreCols.includes(index))
          );
  
         return [processedData, originalRows, originalCols]; // Return the processed data and original dimensions
      }  catch (err) {
         return [[], -1, -1]; // Return for nonexistent file or read error
      }
  } 
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