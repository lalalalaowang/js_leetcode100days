/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;
  let left = 0;
  let store = {};
  let maxLength = 1;

  for (right = 0; right < s.length; right++) {
    if (store[s[right]] !== undefined && store[s[right]] >= left) {
      left = store[s[right]] + 1;
    }
    store[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
