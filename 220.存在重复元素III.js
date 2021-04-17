/**
 * 给你一个整数数组nums和两个整数k和t。
 * 请你判断是否存在两个不同下标i和j，使得abs(nums[i]-nums[j])<=t，同时又满足abs(i-j)<=k。
 * 如果存在则返回true，不存在返回false。
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
//暴力解
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < i + 1 + k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true
      }
    }
  }
  return false
}
