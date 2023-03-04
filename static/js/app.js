// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// This tells Java to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

// Create a new function to build a table
function buildTable(data){
  // Clear any existing data
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
  });
});

// Add a click button function
// Filtering by date
// Add an if statement
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if(date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  // Rebuild the table using the filtered date
  buildTable(filteredData);

}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);