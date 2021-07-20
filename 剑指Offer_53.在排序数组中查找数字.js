/**
 * 统计一个数字在排序数组中出现的次数。
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//官方的解法
const binarySearch = (nums, target, lower) => {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }
  return ans
}
var search = function (nums, target) {
  let ans = 0
  const leftIdx = binarySearch(nums, target, true)
  const rightIdx = binarySearch(nums, target, false) - 1
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = rightIdx - leftIdx + 1
  }
  return ans
}

//34题同款解法
var search = function (nums, target) {
  let len = nums.length
  let low = 0
  let high = len - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] < target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      let left = mid
      let right = mid
      while (nums[left] === target) {
        left--
      }
      while (nums[right] === target) {
        right++
      }
      left += 1
      right -= 1
      if (left >= 0 && right <= len - 1) {
        return right - left + 1
      }
    }
  }
  return 0
}

//一行
var search = function (nums, target) {
  return nums.reduce((acc, cur) => (cur === target ? acc + 1 : acc), 0)
}
