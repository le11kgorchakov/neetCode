/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Input: s = "anagram", t = "nagaram"
Output: true
 */
var validAnagram = function (s, t) {
  const sArr = s.split("");
  const tArr = t.split("");
  if (sArr.length !== tArr.length) return false;
  if (sArr.sort().join("") === tArr.sort().join("")) return true;
  return false;
};
