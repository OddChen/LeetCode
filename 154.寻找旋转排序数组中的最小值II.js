/**
 * 已知一个长度为n的数组，预先按照升序排列，经由1到n次旋转后，得到输入数组。
 * 例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：
 * 若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]
 * 若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]
 * 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
 * 给你一个可能存在重复元素值的数组nums，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。
 * 请你找出并返回数组中的最小元素。
 *
 * @param {number[]} nums
 * @return {number}
 */
//emmm
var findMin = function (nums) {
  nums.sort((x, y) => x - y)
  return nums[0]
}

//官方解法
var findMin = function (nums) {
  let n = nums.length
  let left = 0
  let right = n - 1
  let mid = null
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[right]) {
      right = mid
    } else if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right -= 1
    }
  }
  return nums[left]
}

//最差需要遍历全部
var findMin = function (nums) {
  let n = nums.length
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i]
    }
  }
  return nums[0]
}
