function findName(nameList, nameToFind) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === nameToFind) {
      return `Found ${nameToFind} at position ${i}!`;
    }
  }
  return `${nameToFind} not found in the list.`;
}

// Create a large array for testing
let largeNameList = [];
for (let i = 0; i < 100000; i++) {
  largeNameList.push(`Name${i}`);
}

// Test case 1: Finding an item near the beginning
console.time("findName_early");
findName(largeNameList, "Name10");
console.timeEnd("findName_early");

// Test case 2: Finding an item near the end
console.time("findName_late");
findName(largeNameList, "Name99999");
console.timeEnd("findName_late");

// Test case 3: Item not found (worst case for this simple search)
console.time("findName_not_found");
findName(largeNameList, "Name1000000"); // This name doesn't exist
console.timeEnd("findName_not_found");

export { findName };
/*
  Expected output (times will vary based on your computer):
  findName_early: 0.08ms (or similar small number)
  findName_late: 2.50ms (or similar, noticeably larger than the first)
  findName_not_found: 2.60ms (or similar, also large)
*/
