/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = new Map();

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate 'a' values

    let left = i + 1;
    let right = nums.length - 1;
    let want = -nums[i];

    while (left < right) {
      if (nums[left] + nums[right] === want) {
        if (!result.get(`${nums[i]},${nums[left]},${nums[right]}`)) {
          result.set(`${nums[i]},${nums[left]},${nums[right]}`, [
            nums[i],
            nums[left],
            nums[right],
          ]);
        }
        left++;
        right--;
      } else if (nums[left] + nums[right] < want) {
        left++;
      } else {
        right--;
      }
    }
  }

  return Array.from(result.values());
}
