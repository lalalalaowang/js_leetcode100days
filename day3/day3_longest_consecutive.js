function longestConsecutive(nums) {
  const numsMap = {};
  let maxLength = 0;

  for (const num of nums) {
    numsMap[num] = true;
  }

  for (const num of nums) {
    if (!numsMap[num - 1]) {
      currentNum = num;
      let currentLength = 1;

      while (numsMap[currentNum + 1]) {
        currentNum += 1;
        currentLength += 1;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
