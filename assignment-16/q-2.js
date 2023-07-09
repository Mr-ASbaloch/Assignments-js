// Step 1: Set up a Promise that resolves with a value of "Start Counting"
const startCountingPromise = new Promise((resolve) => {
    resolve("Start Counting");
  });
  
  // Step 2: Create the counter() function
  function counter(value) {
    console.log(value);
  }
  
  // Step 3: Set up the next function in the Promise with four then() instances
  startCountingPromise
    .then((value) => {
      counter(value);
      return "One";
    })
    .then((value) => {
      counter(value);
      return "Two";
    })
    .then((value) => {
      counter(value);
      return "Three";
    })
    .then((value) => {
      counter(value);
    });
  