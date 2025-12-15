function TwoSum(nums, target) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    let other = target - nums[i];
    if (other in numMap) {
      return [numMap[other], i];
    } else {
      numMap[nums[i]] = i;
    }
  }
  return [];
}

input = [3, 2, 4];
target = 6;
console.log(TwoSum(input, target)); // Output: [0, 1]
