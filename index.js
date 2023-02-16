/* 
  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true
  }
*/
// function hasTargetSum(array, target){
//   // create an obj to keep track of numbers we've already seen
//   const seenNumbers = {}
//   // iterate through each number in the array
//   for(let i = 0; i < array.length; i++){
//     //   for the current num, identify a complement that adds to the target (comp = target - num)
//     const complement = target - array[i]
//     //   check if any key on our object is the complement
//     //     if so, return true
//     if (seenNumbers[complement]) return true
//     //     otherwise, add that number to the obj
//     seenNumbers[array[i]] = true
//   }

//   // if I reach the end of the array, return false
//   return false
// }


// Runtime: O(n^2)
// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let i = 0; i < array.length; i++) {
//     // n steps
//     const complement = target - array[i]
//     for (let j = i + 1; j < array.length; j++) {
//       // n * n steps
//       if (array[j] === complement) return true
//     }
//   }
//   return false;
// }
// to make it simpler 
// Runtime: O(n)
function hasTargetSum(array, target){
  const seenNumbers = {}

  for (const number of array) {
    // n steps
    const complement = target - number;
    if (seenNumbers[complement]) return true;
    seenNumbers[number] = true;
  }
  return false;
}


// O(n) runtime
function findSock(array) {
  for(const item of array) {
    if (item === "sock") return "sock"
  }
}

// O(1) runtime
function findSock(obj) {
  if(Object.sock) return "sock"
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n)
*/

/*
  Add written explanation of your solution here
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
}

module.exports = hasTargetSum;
