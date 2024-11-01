// test 1
const fs = require("fs");
function fileExists(filename) {
  return fs.existsSync(filename);
}
// test 2
function validNumber(value) {{ 
      const number = parseFloat(value); // parseFloat is used to check if value can be converted into a finite number
      const isValidFormat = /^-?\d+(\.\d+)?$/.test(value); // Regex Check: '^-?\d+(\.\d+)?$' ensures the input has an optional '-' sign followed by digits with an optional decimal portion.
      return isValidFormat && !isNaN(number) && isFinite(number); // This is a boolean expression.
  }};
// test 3
function dataDimensions(data) {{  
  let rows = -1; // this indicates that no rows have been counted yet
  let cols = -1; // this indicates that no columms have been counted yet 
  if (data == null) { // Checks if the input is null or undefined
      return [rows, cols];
  }
  if (Array.isArray(data)) { // Handles an array of objects (similar to what DataFrame does.)
      rows = data.length; // This line assigns the value of data.length to the variable rows.
      if (rows > 0 && typeof data[0] === 'object') { // This line begins a conditional statement that checks two conditions.

          cols = Object.keys(data[0]).length; // It determines how many columns are present in the first row of the dataset.
      }
  } else if (typeof data === 'object') { // checks if the variable data is of type object 
      rows = 1;
      cols = Object.keys(data).length;// It deretmines the n umber of keys in an object 
  }
  return [rows, cols];
}};
// test 4 
  function findTotal(dataset) {
    if (dataDimensions(dataset)[1] !== -1 || dataset.length === 0) { // Check if dataset is not a 1D array or is empty
        return 0; 
    }
    let total = 0;
    for (let i = 0; i < dataset.length; i++) { // This initiates a loop that iterates through each element of the dataset array.
        if (validNumber(dataset[i])) {
            total += parseFloat(dataset[i]); // It takes a value from the dataset, converts it to a floating-point number, and adds it to total which then allowing for the accumulation of numeric values from the array.
        }
    }
    return total;
}
// test 5 
function calculateMean(dataset) {
  if (dataDimensions(dataset)[1] !==-1 || dataset.length ===0) { // Checks if the dataset is not valid or if it is empty.
      return 0;
  }
  let sum = 0;
  let count = 0;
  for (let i =0; i<dataset.length; i++) { // This iterates over all elements in the dataset array which allows you to access each element using 'dataset[i]' during each iteration.
     if (validNumber(dataset[i])) { // Checks if the current element in the dataset (accessed using dataset[i]) is a valid number.
      sum += parseFloat(dataset[i]); // It adds the value of the current element (after converting it to a float) to a variable called sum.
      count ++;
     }
  }
  return count >0 ? sum/count :0; // returns sum divided by count
}
// test 6
function calculateMedian(dataset) {
  if (dataDimensions(dataset)[1] !== -1 || dataset.length === 0) { // It checks if the dataset is not valid (based on dimensions) or is empty, allowing for appropriate handling of those conditions.
      return 0;
  }
  const validNumbers = dataset.filter(validNumber).map(Number).sort((a, b) => a - b);
  const mid = Math.floor(validNumbers.length / 2);//note to self- math.floor rounds down and gives the largest int ≤ to a given num
  return validNumbers.length % 2 === 0
      ? (validNumbers[mid - 1] + validNumbers[mid]) / 2 // It calculates the average of two elements 
      : validNumbers[mid];
}
// test 7
    function convertToNumber(dataframe, col) {
      let countOfColumns = 0;
      dataframe.forEach(row => { // It loops through every row of the dataframe.
        if (validNumber(row[col]) && typeof row[col] !== 'number') { // It makes sure that the value in the specified column of the current row is valid for conversion.
          row[col] = parseInt(row[col]) // It converts valid but non-numeric representations (like strings) in the specified column of the current row, into integers.
          countOfColumns ++;
        };
      })
      return countOfColumns;
  }
// test 8
function flatten(dataframe) {
 const dataset = dataframe.map(row => Object.values(row)[0]); // It creates a new array that consists of the first value from each object in the dataframe.
 return dataset; 
}
    const dataframe = [ // This is an array 
      { value: 1500 },
      { value: 1750 },
      { value: 1800 },
      { value: 2000 }
    ];
    const dataset = flatten(dataframe); // this is calling the function and passing the variable dataframe as an argument
// test 9     
function loadCSV(csvFile, ignoreRows, ignoreCols) {
  const fs = require('fs');
  {
    try {
         const data = fs.readFileSync(csvFile, 'utf8'); // Read the CSV file
  
         const rows = data.split('\n').map(row => row.split(',').map(cell => cell.trim())).filter(row => row.length > 0); // this makes sure to split the data into rows and trim any possible whitespaces.
  
         const originalRows = rows.length;// Shows original dimensions
         const originalCols = originalRows > 0 ? rows[0].length : 0;
  
         const filteredRows = rows.filter((_, index) => !ignoreRows.includes(index));  // It filters out rows that have been ignored.
  
         const processedData = filteredRows.map(row => // It filters out columns that have been ignored.
            row.filter((_, index) => !ignoreCols.includes(index))
          );
  
         return [processedData, originalRows, originalCols]; // Ensures the return of the processed data and original dimensions
      }  catch (err) {
         return [[], -1, -1]; // ensures the return for nonexistent file or read error
      }}};
// test 10
  function createSlice(dataframe,columnIndex,pattern, exportedColumns = []) {
    if (!Array.isArray(dataframe) || dataframe.length === 0 || columnIndex <0) { // This ensures that the dataframe is a valid, non-empty array and that the columnIndex is a valid non-negative integer. 
     return [];
    }
     const result = [];
     for (const row of dataframe) {
     if (!Array.isArray(row) || row.length <= columnIndex) continue;
     const cellValue = row[columnIndex];       
  const matchesPattern= (pattern === '*' || String(cellValue) === String(pattern)); // Determines if cellValue either matches a wildcard pattern or is equal to a specific pattern
         if (matchesPattern) { 
          const RowOutput = exportedColumns.length > 0 
               ? exportedColumns.map(colIndex => (row[colIndex] !== undefined ? row[colIndex] : null)) // creates a new array based on the specified column indices in the row, returning the value if it exists or null if it does not
               : row;
             result.push(RowOutput);
           }}
         return result;      
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