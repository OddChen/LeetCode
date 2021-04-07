/**
 * 已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了旋转，
 * 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
 * 例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。
 * 给你旋转后的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。
 * 如果 nums 中存在这个目标值 target，则返回 true ，否则返回 false 。
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
//官方的解法
var search = function (nums, target) {
  let n = nums.length
  if (n === 1) {
    return nums[0] === target ? true : false
  }
  let low = 0
  let high = n - 1
  let mid = null
  while (low <= high) {
    mid = Math.ceil((high + low) / 2)
    //console.log(mid)
    if (nums[mid] === target) {
      return true
    }
    if (nums[low] === nums[mid]) {
      low++
      continue
    }
    if (nums[0] < nums[mid]) {
      if (target >= nums[0] && target < nums[mid]) {
        high = mid - 1
      } else [(low = mid + 1)]
    } else {
      if (target > nums[mid] && target <= nums[n - 1]) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }
  return false
}

//直接调用函数
var search = function (nums, target) {
  if (nums.indexOf(target) === -1) {
    return false
  }
  return true
}

var search = function (nums, target) {
  return nums.includes(target)
}
