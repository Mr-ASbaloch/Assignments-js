function addData(params) {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;

  let formData = {
    name: name,
    age: age,
    address: address,
    email: email,
  };

  //   add data in object form  in json format

  let jsonData = JSON.stringify(formData);

  // sending data to local storage

  localStorage.setItem("userData", jsonData);

  document.querySelector("form").submit();

  // document.querySelector(form).reset();
  alert("thankx you so much!");
}

function showData(params) {
  var jsonData = localStorage.getItem("userData");

  // Parse the JSON string into an object
  var formData = JSON.parse(jsonData);

  // Get the table body element
  var tableBody = document.getElementById("recordBody");

  // Create a new table row
  var newRow = document.createElement("tr");

  // Create and populate table cells
  var nameCell = document.createElement("td");
  nameCell.textContent = formData.name;

  var ageCell = document.createElement("td");
  ageCell.textContent = formData.age;

  var addressCell = document.createElement("td");
  addressCell.textContent = formData.address;

  var emailCell = document.createElement("td");
  emailCell.textContent = formData.email;

  // Append the cells to the row
  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(addressCell);
  newRow.appendChild(emailCell);

  // Append the row to the table body
  tableBody.appendChild(newRow);

  alert("successfully shown")
}

