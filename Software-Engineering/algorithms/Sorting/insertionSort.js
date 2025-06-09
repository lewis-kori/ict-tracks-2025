function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentValue; j-- ){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue;
    }
    return arr
}

console.log(insertionSort([1,2, 56, 6]))

// Problem: Arrange a list of numbers in alphabetical order.

// Algorithm (Insertion Sort):
// 1. Start with the second element (assume first is sorted)
// 2. Compare current element with elements in the sorted portion
// 3. Shift larger elements one position to the right
// 4. Insert the current element in its correct position
// 5. Repeat for all remaining elements

function sortnumbersInsertion(numberList) {
  let numbers = [...numberList]; // Create a copy
  let n = numbers.length;

  console.log("Starting Insertion Sort...");
  console.log("Initial list:", numbers);

  // Start from second element (index 1)
  for (let i = 1; i < n; i++) {
    let currentNumber = numbers[i];
    let j = i - 1;

    console.log(`\n--- Inserting ${currentNumber} ---`);
    console.log(`Sorted portion: [${numbers.slice(0, i).join(", ")}]`);

    // Move elements that are greater than currentNumber one position ahead
    while (j >= 0 && numbers[j] > currentNumber) {
      console.log(`${numbers[j]} > ${currentNumber}, shifting ${numbers[j]} right`);
      numbers[j + 1] = numbers[j];
      j--;
    }

    // Insert currentNumber at its correct position
    numbers[j + 1] = currentNumber;
    console.log(`Inserted ${currentNumber} at position ${j + 1}`);
    console.log(`Current state:`, numbers);
  }

  return numbers;
}

let numbersForInsertion = [10, 27, 15, 3, 8, 20];
console.log("\nFinal sorted list:", sortnumbersInsertion(numbersForInsertion));

// Characteristics:
// - Efficient for small datasets
// - Stable sort (maintains relative order of equal elements)
// - Adaptive (efficient for data sets that are already substantially sorted)
// - Time Complexity: O(n²) worst case, O(n) best case (already sorted)
// - Space Complexity: O(1) - Sorts in-place
// - Online algorithm (can sort a list as it receives it)
