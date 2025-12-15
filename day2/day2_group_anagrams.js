function groupAnagrams(strs) {
  const anagramMap = {};
  for (const str of strs) {
    const tag = str.split("").sort().join("");
    if (!anagramMap[tag]) {
      anagramMap[tag] = [];
    }
    anagramMap[tag].push(str);
  }

  return Object.values(anagramMap);
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input)); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
