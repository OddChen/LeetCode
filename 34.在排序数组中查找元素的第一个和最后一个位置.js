/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 进阶：
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let n = nums.length
  let low = 0
  let high = n - 1
  let mid = 0
  while (low <= high) {
    mid = Math.floor((high + low) / 2)
    //console.log(mid)
    if (target < nums[mid]) {
      high = mid - 1
    } else if (target > nums[mid]) {
      low = mid + 1
    } else {
      let m = mid
      let n = mid
      //console.log(m, n)
      while (nums[m] === target) {
        m -= 1
      }
      while (nums[n] === target) {
        n += 1
      }
      return [m + 1, n - 1]
    }
  }
  return [-1, -1]
}
