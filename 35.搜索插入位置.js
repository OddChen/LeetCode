/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 自己写的
var searchInsert = function (nums, target) {
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i
    }
    nums[i] < target ? (flag = false) : (flag = true)
    if (flag) {
      return i
    }
  }
  return nums.length
}
// 简单写法
var searchInsert = function (nums, target) {
  let i = 0
  while (nums[i] < target) {
    i++
  }
  return i
}
// 二分查找
var searchInsert = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    let mid = (low + high) >> 1
    if (target === nums[mid]) {
      return mid
    }
    if (target > nums[mid]) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return low
}

/**
 * (a + b) >> 1 运算相当于 (a + b) / 2
 * 这里是因为js会算成小数，所以采用位运算
 *
 * 二分查找可以看官方题解的视频，比较形象
 */
