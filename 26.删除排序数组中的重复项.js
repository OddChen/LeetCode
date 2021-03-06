/**
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
var removeDuplicates = function (nums) {
  let left = 0
  let right = 1
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
    right++
  }
  return left + 1
}

// 自己写的暴力解
var removeDuplicates = function (nums) {
  let n = nums.length
  let i = 0
  while (i < n) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      n--
    } else {
      i++
    }
  }
  return nums.length
}
//优化了一下，仅在左右指针不重复的情况下复制值
var removeDuplicates = function (nums) {
  let left = 0
  let right = 1
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++
      if (left !== right) {
        nums[left] = nums[right]
      }
    }
    right++
  }
  return left + 1
}
