//  print negative elements in array

let array =[-1,2,3,-4,5,6,7,-8,9]
for (let index = 0; index < array.length; index++) {
   if (array[index] < 0) {
     console.log(array[index]);
   }
    
}

// output
// -1
// -4
// -8