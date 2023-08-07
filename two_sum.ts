/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
var twoSum = function (nums, target) {
  const map = {};
  for (const [i, n] of nums.entries()) {
    if (target - n in map) return [map[target - n], i];
    else map[n] = i;
  }
};
