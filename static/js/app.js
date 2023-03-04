// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// This tells Java to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

// Create a new function to build a table AND Clear any existing data
function buildTable(data) {
  tbody.html("");
}
 
// Add a forEach function
// Create a variable that will append a row to the table body
// Add code to loop through each field in the dataRow argument with the Object.values function
// Append each value of the object to a cell in the table
// Add the values
data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

// Add a click button function
// Filtering by date
// Add an if statement
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};