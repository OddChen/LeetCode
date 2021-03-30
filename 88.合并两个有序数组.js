/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1
  let len2 = n - 1
  let len = m + n - 1
  while (len1 >= 0 || len2 >= 0) {
    if (len1 === -1) {
      nums1[len] = nums2[len2]
      len2--
    } else if (len2 === -1) {
      nums1[len] = nums1[len1]
      len1--
    } else if (nums1[len1] < nums2[len2]) {
      nums1[len] = nums2[len2]
      len2--
    } else {
      nums1[len] = nums1[len1]
      len1--
    }
    len--
  }
}

//直接用库函数
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2)
  return nums1.sort((x, y) => x - y)
}
