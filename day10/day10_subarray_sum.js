/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
  if (nums.length === 0) {
    return 0;
  }

  let res = 0;
  let preSum = 0;
  let store = {};
  store[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    if (store.hasOwnProperty(preSum - k)) {
      res += store[preSum - k];
    }

    store[preSum] = (store[preSum] || 0) + 1;
  }

  return res;
}
