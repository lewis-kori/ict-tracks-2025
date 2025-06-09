// Problem: Find a specific name in a SORTED list of names efficiently.

// Algorithm (Binary Search):
// 1. Start with the entire sorted list
// 2. Find the middle element
// 3. Compare the middle element with the name you're looking for
// 4. If they match, you've found it! Stop.
// 5. If the target is smaller, search the left half
// 6. If the target is larger, search the right half
// 7. Repeat steps 2-6 until you find the name or the search space is empty

function binarySearchFindName(sortedNameList, nameToFind) {
  let low = 0;
  let high = sortedNameList.length - 1;
  let mid;
  let comparisons = 0; // To count how many checks we do

  while (low <= high) {
    comparisons++;
    mid = Math.floor((low + high) / 2);
    let currentName = sortedNameList[mid];
    // console.log(`Binary: Checking ${currentName} at index ${mid}. Low: ${low}, High: ${high}`); // Uncomment to see steps

    if (currentName === nameToFind) {
      return `Binary Search: Found ${nameToFind} at position ${mid}. (Made ${comparisons} comparisons)`;
    } else if (currentName < nameToFind) {
      low = mid + 1; // Search in the right half
    } else {
      high = mid - 1; // Search in the left half
    }
  }
  return `Binary Search: ${nameToFind} not found. (Made ${comparisons} comparisons)`;
}

export { binarySearchFindName };

// Characteristics:
// - Requires the array to be sorted
// - Much faster than linear search for large datasets
// - Time Complexity: O(log n) - Each step eliminates half the remaining elements
// - Space Complexity: O(1) - Uses constant extra space
// When to use:
// - When you have a sorted list and need to find a specific element quickly
// - When you want to minimize the number of comparisons needed to find an element
