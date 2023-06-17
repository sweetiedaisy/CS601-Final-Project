document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById('fetchButton').addEventListener('click', function() {

    
    fetch("pets.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {

      const table = document.createElement("table");

      let headerRow = document.createElement("tr");

      let headers = ["Pet's name", "Pet's type", "Breed type", "Age"];

      
      headers.forEach(headerText => {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
      });


      table.appendChild(headerRow);

 
      data.pets.forEach((pet) => {
        

        let row = document.createElement("tr");
        

        let columns = ["name", "type", "breed", "age"];


        columns.forEach(col => {
          createCell(row, pet[col]);
        });

        table.appendChild(row);
      });

      document.getElementById("tableContainer").appendChild(table);
    })
    .catch(e => {
      console.log('There was a problem with the fetch operation: ' + e.message);
    });

    function createCell(row, text) {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(text));
      row.appendChild(td);
    }
  })
});
