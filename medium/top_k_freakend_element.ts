/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
 */

const nums = [5, 5, 5, 2, 2, 2, 2, 8, 8, 8, 8, 8],
  k = 2;

var topKFrequent = function (nums, k) {
  const map = {},
    res = [];
  for (const [i, n] of nums.entries()) {
    if (map[n]) map[n].push(n);
    else map[n] = [n];
  }
  const sorted = Object.values(map).sort((a, b) => b.length - a.length);
  for (let i = 0; i < k; i++) {
    const key = Object.keys(map).find((key) => map[key] === sorted[i]);
    res.push(key);
  }
  return res;
};

const topKFrequent2 = (nums, k) => {
  const map = {};
  for (const n of nums) {
    map[n] = (map[n] || 0) + 1;
  }
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k);
};

console.log(topKFrequent2(nums, k));
// [8, 2]
