// Step 1: Define the greet() function
function greet(fullName) {
    console.log(`Hello, ${fullName.join(" ")}.`);
  }
  
  // Step 2: Define the second function with callback
  function processFullName(fullNameString, callback) {
    // Step 3: Split the string into an array
    const fullNameArray = fullNameString.split(" ");
    
    // Step 4: Invoke the greet() function with the full-name array
    callback(fullNameArray);
  }
  
  // Step 5: Invoke the process of the callback function
  const fullNameString = "abdul saeed";
  processFullName(fullNameString, greet);
  