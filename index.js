function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) === target) {
        return true
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The Big O time for this function is O(n*2)
  This is because it has a nested loop in it that uses the index of an element for binary search.

  If the list is has x items and the time taken with one item is n, and the time taken by each x item in the nested loop is n, then the total time is n*n or n*2.

*/

/* 
  Add your pseudocode here
  take first element add it to second element, compare result to target return true if same else false, 1st element add it to third compare result to target return true if same else false... 1st element add it to last compare result to target return true if same else false

  go to
  take 2nd element, add it to 3rd element, compare result to target return true if same else false, 2nd element add it to 4th element, compare result to target return true if same else false... 2nd element add it to last element, compare result to target return true if same else false
  ...
  go to 
  2nd last item, add it to last item, compare result to target return true if same else false
*/

/*
  Add written explanation of your solution here
  I am required to check if two numbers in an array of digits will add upto the target.
  e.g ([a, b, c], d) 
  check if a + b = d , a + c = d, and if b + c = d;
  I am to write a function hasTargetSum that checks if any of the above is true then return true.
  Else it will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
}

module.exports = hasTargetSum;
