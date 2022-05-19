function selectionSort(arr) {
  // type your code here

        
  for(let i = 0; i < arr.length; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < arr.length; j++){
          if(arr[j] < arr[min]) {
              min=j; 
          }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = arr[i]; 
           arr[i] = arr[min];
           arr[min] = tmp;      
      }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
