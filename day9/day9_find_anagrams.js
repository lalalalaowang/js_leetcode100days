/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const lenS = s.length;
  const lenP = p.length;
  if (lenS < lenP) return [];

  let storeS = Array(26).fill(0);
  let storeP = Array(26).fill(0);
  let result = [];

  for (let char of p) {
    storeP[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < lenS; i++) {
    storeS[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;

    if (i >= lenP - 1) {
      if (storeS.toString() === storeP.toString()) {
        result.push(i - lenP + 1);
      }
      storeS[s[i - lenP + 1].charCodeAt(0) - "a".charCodeAt(0)]--;
    }
  }

  return result;
}
