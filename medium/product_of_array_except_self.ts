/**
 * @param {number[]} nums
 * @return {number[]}
 Input: nums = [1,2,3,4]
Output: [24,12,8,6]
 */
const n = [1, 2, 3, 4];
var productExceptSelf = function (nums) {
  const length = nums.length;
  let l = 1;
  let r = 1;
  const result = new Array(length).fill(1);
  for (let i = 1; i < length; i++) {
    l *= nums[i - 1];
    r *= nums[length - i];
    result[i] *= l;
    result[length - 1 - i] *= r;
  }
  return result;
};
