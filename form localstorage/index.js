// function validstion() {
//   let name = document.getElementById("name");
//   let age = document.getElementById("name");
//   let address = document.getElementById("name");
//   let email = document.getElementById("name");

//   if (name == "") {
//     alert("name is required");
//     return false;
//   }
//   if (age == "") {
//     alert("age is required");
//     return false;
//   } else if (age < 1) {
//     alert("age must be between 1 and greater than zero");
//     return false;
//   }
//   if (address == "") {
//     alert("address is required");
//     return false;
//   }

//   if (email == "") {
//     alert("email is required");
//     return false;
//   }
//   return true;
// }

// let name= document.getElementById("name").Value; 
// let age= document.getElementById("age").value 
// let address= document.getElementById("address").value 
// let email= document.getElementById("email").value 
// let recordList;
// recordList.push({
//     name :  name,
//     age:age,
//     address : address,
//     email : email
    
// })
// localStorage.setItem( "recordList", JSON.stringify(recordList) )


var form = document.querySelector('form');

// Add an event listener to the form on submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    // Create an object to store the form data
    var formData = {
        name: name,
        age: age,
        address: address,
        email: email
    };

    // Check if localStorage is supported
    if (typeof(Storage) !== 'undefined') {
        // Retrieve the existing data from localStorage
        var existingData = JSON.parse(localStorage.getItem('formData')) || [];

        // Add the new form data to the existing data
        existingData.push(formData);

        // Save the updated data back to localStorage
        localStorage.setItem('formData', JSON.stringify(existingData));

        // Optionally, you can display a success message or perform other actions
        console.log('Form data saved successfully.');
    } else {
        // localStorage is not supported
        console.log('Sorry, localStorage is not supported in your browser.');
    }
});