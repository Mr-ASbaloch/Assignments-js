
function addData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if (age == "" || name == "" || address == "" || email == "") {
            alert("please fill all fields");
            return false;
          }
          if (age < 0) {
            alert("age must be greater than zero");
            return false;
          }

    var formData = {
      name: name,
      age: age,
      address: address,
      email: email
    };

    var existingData = localStorage.getItem("formData");
    var dataArray = existingData ? JSON.parse(existingData) : [];

    for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i].name === name) {
          alert("User name already exists. Please choose a different name.");
          return false;
        }
      }
    dataArray.push(formData);
    localStorage.setItem("formData", JSON.stringify(dataArray));

    // document.getElementById("myForm").reset();

    alert("Data saved successfully!");


    // Prevent form submission
    return false;
  }

  function showData() {
    var existingData = localStorage.getItem("formData");
    var dataArray = existingData ? JSON.parse(existingData) : [];
    

    var tableBody = document.getElementById("recordBody");
    tableBody.innerHTML = ""; // Clear existing table data

    for (var i = 0; i < dataArray.length; i++) {
      var userData = dataArray[i];

      var newRow = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.textContent = userData.name;

      var ageCell = document.createElement("td");
      ageCell.textContent = userData.age;

      var addressCell = document.createElement("td");
      addressCell.textContent = userData.address;

      var emailCell = document.createElement("td");
      emailCell.textContent = userData.email;

      newRow.appendChild(nameCell);
      newRow.appendChild(ageCell);
      newRow.appendChild(addressCell);
      newRow.appendChild(emailCell);

      tableBody.appendChild(newRow);
    }
    alert("display successfully")

    var counterDiv = document.getElementById("counter");
  counterDiv.textContent = "Total Users: " + dataArray.length;
    return true;

    
  }

  function delData(index) {
    
    if (localStorage.getItem("formData") === null) {
        formData = [];
    } else {
        formData =JSON.parse( localStorage.getItem("formData"));
    }
    formData.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(formData));
  alert("deleted successfully")
  window.location.reload();
//   document.write ("no data found");

 
  }