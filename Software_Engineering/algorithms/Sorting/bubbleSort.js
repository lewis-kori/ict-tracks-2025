function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
       let swapped = false
       console.log(`i --> ${i}`)
       console.log(`unsorted array ${arr}`)
        for(let j = 0; j < i-1; j++){
            //console.log(arr)
            //console.log(`j+1 is ${j+1}`)
          //  console.log(arr)
            if(arr[j] > arr[j+1]){
                //console.log(`swapping values ${arr[j]} and ${arr[j+1]}`)
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                
               swapped = true;
            }
        }
       console.log(arr);
        console.log("------------");
       // if(!swapped) break;
    }
    return arr;
   
  }

console.log(bubbleSort([5,4,9,2,6]))



// Problem: Arrange a list of names in alphabetical order.

// Algorithm (Bubble Sort):
// 1. Compare adjacent elements in the list
// 2. If they are in the wrong order, swap them
// 3. Continue through the entire list
// 4. Repeat the process until no more swaps are needed
// 5. The largest elements "bubble up" to their correct positions

function sortNamesBubble(nameList) {
  // Create a copy to avoid modifying original list
  let names = [...nameList];
  let n = names.length;

  console.log("Starting Bubble Sort...");
  console.log("Initial list:", names);

  // Outer loop: number of passes needed
  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // Flag to check if any swaps occurred
    console.log(`\n--- Pass ${i + 1} ---`);

    // Inner loop: compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Comparing ${names[j]} and ${names[j + 1]}`);

      // If current element is greater than next element, swap them
      if (names[j] > names[j + 1]) {
        console.log(`Swapping ${names[j]} and ${names[j + 1]}`);

        // Swap elements
        let temp = names[j];
        names[j] = names[j + 1];
        names[j + 1] = temp;
        swapped = true;
      }
    }

    console.log(`After pass ${i + 1}:`, names);

    // If no swaps occurred, the array is already sorted
    if (!swapped) {
      console.log("No swaps needed - array is sorted!");
      break;
    }
  }

  return names;
}

let unsortedNames = ["David", "Alice", "Charlie", "Bob"];
console.log("\nFinal sorted list:", sortNamesBubble(unsortedNames));

// Characteristics:
// - Simple to understand and implement
// - Stable sort (maintains relative order of equal elements)
// - Time Complexity: O(n²) - Not efficient for large datasets
// - Space Complexity: O(1) - Sorts in-place
// - Best case O(n) when array is already sorted
