function hasTargetSum(array, target) {
  for(num = 0;num < array.length-1;num++) {
    for(num2 = (num+1);num2<array.length;num2++)
      if(array[num] + array[num2] === target) {
        return true
      }
    }
    return false
    }

/* 
  0(n)
*/

/* 
  function that takes an array and a target
    variable assigned a number in array
    for every number in the array, find sum of assigned number and that number
      if sum is equal to the target number, return true
      else return false
*/

/*
  Solution iterates through an array of integers
  for every integer, it is paired up and added to all the other integers in the array
  the function will return true if any two numbers in the array add up to a target number
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
