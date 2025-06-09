import { binarySearchFindName } from "./binarySearch.js";
import { findName as linearSearchFindName } from "./linearSearchTime.js";

// --- Setup for Performance Test ---
console.log("--- Setting up data for performance test ---");
const listSize = 200000; // Let's use a larger list to see the difference clearly
let largeSortedNameList = [];
for (let i = 0; i < listSize; i++) {
  // Create names that will be naturally sorted, e.g., User000000, User000001
  largeSortedNameList.push(`User${String(i).padStart(6, "0")}`);
}

console.log(`Created a sorted list of ${largeSortedNameList.length} names.`);

// Test Cases:
let nameToFind_Start = "User000000"; // Best case for Linear, good for Binary
let nameToFind_Middle = `User${String(Math.floor(listSize / 2)).padStart(
  6,
  "0"
)}`; // Average for Linear, best for Binary
let nameToFind_End = `User${String(listSize - 1).padStart(6, "0")}`; // Worst case for Linear, good for Binary
let nameToFind_NotFound = "User999999"; // Worst case for Linear, good for Binary

console.log("\n--- Performance Test: Finding a name near the START ---");
console.time("LinearSearch_Start");
console.log(linearSearchFindName(largeSortedNameList, nameToFind_Start));
console.timeEnd("LinearSearch_Start");

console.time("BinarySearch_Start");
console.log(binarySearchFindName(largeSortedNameList, nameToFind_Start));
console.timeEnd("BinarySearch_Start");

console.log("\n--- Performance Test: Finding a name near the MIDDLE ---");
console.time("LinearSearch_Middle");
console.log(linearSearchFindName(largeSortedNameList, nameToFind_Middle));
console.timeEnd("LinearSearch_Middle");

console.time("BinarySearch_Middle");
console.log(binarySearchFindName(largeSortedNameList, nameToFind_Middle));
console.timeEnd("BinarySearch_Middle");

console.log("\n--- Performance Test: Finding a name near the END ---");
console.time("LinearSearch_End");
console.log(linearSearchFindName(largeSortedNameList, nameToFind_End));
console.timeEnd("LinearSearch_End");

console.time("BinarySearch_End");
console.log(binarySearchFindName(largeSortedNameList, nameToFind_End));
console.timeEnd("BinarySearch_End");

console.log("\n--- Performance Test: Name NOT FOUND ---");
console.time("LinearSearch_NotFound");
console.log(linearSearchFindName(largeSortedNameList, nameToFind_NotFound));
console.timeEnd("LinearSearch_NotFound");

console.time("BinarySearch_NotFound");
console.log(binarySearchFindName(largeSortedNameList, nameToFind_NotFound));
console.timeEnd("BinarySearch_NotFound");

/*
Expected Discussion Points from Output:

1.  **Number of Comparisons:**
    *   Linear Search: The number of items checked will be high, especially for items at the end or not found (e.g., 200,000 checks).
    *   Binary Search: The number of comparisons will be very small (e.g., for 200,000 items, it's around log₂(200000) ≈ 18 comparisons).

2.  **Time (`console.timeEnd`):**
    *   Linear Search will be significantly slower, especially for the "End" and "Not Found" cases. The time will be measurable in milliseconds.
    *   Binary Search will be extremely fast, often sub-millisecond, across all cases (start, middle, end, not found) because the number of operations is drastically lower.

3.  **Scalability:**
    *   Emphasize that if `listSize` were 2 million instead of 200,000:
        *   Linear Search would take roughly 10 times longer.
        *   Binary Search would only take a few more comparisons (log₂(2,000,000) ≈ 21, compared to ≈18). This is the power of O(log n).
*/
