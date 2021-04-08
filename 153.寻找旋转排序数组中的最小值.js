/**
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。
 * 例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
 * 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
 * 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
 * 注意，数组[a[0], a[1], a[2], ..., a[n-1]]旋转一次的结果为数组[a[n-1], a[0], a[1], a[2], ..., a[n-2]]。
 * 给你一个元素值互不相同的数组nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。
 * 请你找出并返回数组中的最小元素。
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let n = nums.length
  let left = 0
  let right = n - 1
  let mid = null
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[right]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return nums[left]
}
