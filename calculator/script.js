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
    
    // Trigonometric functions
  function sin() {
      var angle = parseFloat(document.getElementById("result").value);
      var result = Math.sin(angle);
      document.getElementById("result").value = result;
    }
    
    function cos() {
      var angle = parseFloat(document.getElementById("result").value);
      var result = Math.cos(angle);
      document.getElementById("result").value = result;
    }
    
    function tan() {
      var angle = parseFloat(document.getElementById("result").value);
      var result = Math.tan(angle);
      document.getElementById("result").value = result;
    }
  
  
    // Function to calculate factorial
    var num;
  function factorial(num) {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }
    
    // Function to calculate square
    function square() {
      var number = parseFloat(document.getElementById("result").value);
      var result = Math.pow(number, 2);
      document.getElementById("result").value = result;
    }
    
    // Function to calculate logarithm
    function logarithm() {
      var number = parseFloat(document.getElementById("result").value);
      var result = Math.log(number);
      document.getElementById("result").value = result;
    }
    
    // Function to append number to the result field
    function appendNumber(num) {
      document.getElementById("result").value += num;
    }
  
    // Function to convert degrees to radians
  
  
    // Add event listener to the button
    document.getElementById("toggleButton").addEventListener("click", toggleFile);
    
    // Modified appendNumber() function with degree conversion
  //   function appendNumber(num) {
  //     var angle = parseFloat(document.getElementById("result").value);
  //     angle += num;
  //     document.getElementById("result").value = angle;
      
  //     var radians = toRadians(angle);
  //     console.log("Angle in radians:", radians);
  //   }
    
    
    
   
    