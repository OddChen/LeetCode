/**
 * 给你一个有序数组 nums，请你原地删除重复出现的元素，使每个元素最多出现两次，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @param {number[]} nums
 * @return {number}
 */
//官方解法
var removeDuplicates = function (nums) {
  let n = nums.length
  let left = 0
  let right = 0
  while (left <= right && right < n) {
    if (left < 2 || nums[left - 2] < nums[right]) {
      nums[left] = nums[right]
      left++
    }
    right++
  }
  return left
}
//简化一下
var removeDuplicates = function (nums) {
  let n = nums.length
  let index = 0
  for (let values of nums) {
    if (index < 2 || nums[index - 2] < values) {
      nums[index] = values
      index++
    }
  }
  return index
}
