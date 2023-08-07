/**
 * @param {number[]} nums
 * @return {boolean}
 * Input: nums = [1,2,3,1]
Output: true
 */
const nums = [1, 2, 3, 1];
var containsDuplicate = function (nums) {
  const temp = nums.map((cur, _, arr) => arr.indexOf(cur));
  if (temp.includes(0)) return true;
  else return false;
};

console.log(containsDuplicate(nums));

var containsDuplicate2 = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

console.log(containsDuplicate2(nums));
