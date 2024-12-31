// Function implementation
function hasTargetSum(array, target) {
  // Create a set to store numbers we've seen
  const seenNumbers = new Set();
  
  // Iterate through the array
  for (const num of array) {
    // Calculate the complement
    const complement = target - num;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      return true; // Found a pair
    }

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // If no pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n) - We iterate through the array once, and lookups/additions to a Set are O(1).
  Space Complexity: O(n) - We store at most all numbers in the array in the set.
*/

/* 
  Add your pseudocode here:
  1. Initialize a set to keep track of seen numbers.
  2. For each number in the array:
     a. Compute its complement as (target - num).
     b. Check if the complement exists in the set.
        i. If yes, return true.
     c. Otherwise, add the current number to the set.
  3. If no pair is found after the loop, return false.
*/

/*
  Explanation:
  The Set data structure allows for fast lookup to check if a complement exists for the current number in the array.
  For each number, we calculate its complement (`target - num`) and check if the complement is in the set.
  If we find a match, we return true; otherwise, we add the number to the set and continue.
*/

// Tests
if (require.main === module) {
  const chai = require("chai");
  global.expect = chai.expect;

  describe("hasTargetSum", () => {
    it("returns true when the array is [3, 8, 12, 4, 11, 7] and the target is 10", () => {
      expect(hasTargetSum([3, 8, 12, 4, 11, 7], 10)).to.be.true;
    });

    it("returns true when the array is [22, 19, 4, 6, 30] and the target is 25", () => {
      expect(hasTargetSum([22, 19, 4, 6, 30], 25)).to.be.true;
    });

    it("returns false when the array is [1, 2, 5] and the target is 4", () => {
      expect(hasTargetSum([1, 2, 5], 4)).to.be.false;
    });

    it("returns true when the array is [-7, 10, 4, 8] and the target is 3", () => {
      expect(hasTargetSum([-7, 10, 4, 8], 3)).to.be.true;
    });

    it("returns true when the array is [1, 2, 3, 4] and the target is 5", () => {
      expect(hasTargetSum([1, 2, 3, 4], 5)).to.be.true;
    });

    it("returns true when the array is [2, 2, 3, 3] and the target is 4", () => {
      expect(hasTargetSum([2, 2, 3, 3], 4)).to.be.true;
    });

    it("returns false when the array is [4] and the target is 4", () => {
      expect(hasTargetSum([4], 5)).to.be.false;
    });
  });

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
