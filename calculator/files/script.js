function appendNumber(num) {
  document.getElementById("result").value += num;
}

var operatorAdded = false;
function appendOperator(opr) {

  document.getElementById("result").value += opr;

  if (!operatorAdded) {
    resultElement.value += opr;
    operatorAdded = true; // Set the flag to true to indicate that an operator has been added
  }
}

function clearResult(params) {
  document.getElementById("result").value = "";
}

function delResult() {
  var resultElement = document.getElementById("result");
  var resultValue = resultElement.value;
  var length = resultValue.length;

  if (length > 0) {
    resultElement.value = resultValue.substring(0, length - 1);
  }
}

function calculate() {
    try {
      var resultElement = document.getElementById("result");
      var resultValue = resultElement.value;
  
      // Perform your calculation using the resultValue
      var calculatedResult = eval(resultValue); // Using eval to evaluate the expression
  
      // Display the calculated result
      resultElement.value = calculatedResult;
    } catch (error) {
      // Handle any errors that occur during the calculation
      console.error("An error occurred during calculation:", error);
      resultElement.value = "Error"; // Display an error message in the result field
    }
  }
  

// function calculate() {
//     var resultElement = document.getElementById("result");
//     var resultValue = resultElement.value;
  
//     // Perform your calculation using the resultValue
//     var calculatedResult = eval(resultValue); // Using eval to evaluate the expression
  
//     // Display the calculated result
//     resultElement.value = calculatedResult;

   
//   }
  



// function calculate() {
//   let result = document.getElementById("result").value = eval ("" + result)

//   // Try-Catch concept comes in Error-Handling Concept

//   try {
//     // We write code in try in which chances of error are greater.
//     let answer = eval(result);
//     document.getElementById("result").value = answer;
//   } catch (error) {
//     console.log("error : " + error);
//     document.getElementById("result").value = "Error";
//   }
// }

// // Get the input and output elements
// var inputElement = document.querySelector('input[type="text"]');
// var outputElement = document.querySelector('input[type="button"][value="="]');

// // Attach event listener to the output element (= button)
// outputElement.addEventListener('click', calculate);

// // Attach event listeners to all the number buttons (0-9)
// var numberButtons = document.querySelectorAll('input[type="button"][value^="0"], input[type="button"][value="."]');
// numberButtons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     var currentValue = inputElement.value;
//     var buttonValue = this.value;
//     inputElement.value = currentValue + buttonValue;
//   });
// });

// // Attach event listeners to the AC and C buttons
// var acButton = document.querySelector('input[type="button"][value="AC"]');
// acButton.addEventListener('click', function() {
//   inputElement.value = '';
// });

// var cButton = document.querySelector('input[type="button"][value="C"]');
// cButton.addEventListener('click', function() {
//   var currentValue = inputElement.value;
//   inputElement.value = currentValue.slice(0, -1);
// });

// // Function to evaluate and display the result
// function calculate() {
//   var expression = inputElement.value;

//   try {
//     var result = eval(expression);
//     inputElement.value = result;
//   } catch (error) {
//     inputElement.value = 'Error';
//   }
// }
