/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 找出那个只出现了一次的元素。
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
}
//不用额外空间
var singleNumber = function (nums) {
  for (let i = nums.length - 1; i >= 1; i--) {
    nums[i - 1] ^= nums[i]
  }
  return nums[0]
}
