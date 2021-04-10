/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出并返回这两个正序数组的中位数。
 *
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//自己写的 O(m+n)
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let mid = Math.floor((m + n) / 2)
  let newnum = nums1.concat(nums2).sort((x, y) => x - y)
  let result = null
  if ((m + n) % 2 === 0) {
    result = (newnum[mid] + newnum[mid - 1]) / 2
  } else {
    result = newnum[mid]
  }
  return result
}

//官方的解法 O(log (m+n))
var findMedianSortedArrays = function (nums1, nums2) {
  // 保证num1是比较短的数组
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }
  const len1 = nums1.length
  const len2 = nums2.length
  let min = 0
  let max = len1
  let mid = Math.floor((len1 + len2 + 1) / 2)
  while (max >= min) {
    const i = Math.floor((max + min) / 2)
    const j = mid - i
    if (i > min && nums1[i - 1] > nums2[j]) {
      max = i - 1
    } else if (i < max && nums1[i] < nums2[j - 1]) {
      min = i + 1
    } else {
      let left
      let right
      if (i === 0) {
        left = nums2[j - 1]
      } else if (j === 0) {
        left = nums1[i - 1]
      } else {
        left = Math.max(nums1[i - 1], nums2[j - 1])
      }

      if (i === len1) {
        right = nums2[j]
      } else if (j === len2) {
        right = nums1[i]
      } else {
        right = Math.min(nums1[i], nums2[j])
      }

      return (len1 + len2) % 2 ? left : (left + right) / 2
    }
  }
  return 0
}
