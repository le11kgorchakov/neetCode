/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (const str of strs) {
    const sorted = [...str].sort().join("");
    if (map[sorted]) map[sorted].push(str);
    else map[sorted] = [str];
  }
  return Object.values(map);
};
