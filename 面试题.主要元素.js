/**
 * 数组中占比超过一半的元素称之为主要元素。给你一个 整数 数组，找出其中的主要元素。若没有，返回 -1 。
 * 请设计时间复杂度为 O(N) 、空间复杂度为 O(1) 的解决方案。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let len = nums.length
  let candidate = 0
  let count = 0

  for (const num of nums) {
    if (count === 0) {
      candidate = num
    }
    if (candidate === num) {
      count++
    } else {
      count--
    }
  }

  count = 0
  for (const num of nums) {
    if (candidate === num) {
      count++
    }
  }

  return count * 2 > len ? candidate : -1
}
