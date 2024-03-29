/**
 * 一个数对 (a,b) 的数对和 等于 a + b 。
 * 最大数对和 是一个数对数组中最大的 数对和 。
 * 比方说，如果我们有数对 (1,5) ，(2,3) 和 (4,4)，最大数对和为max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8 。
 * 给你一个长度为偶数n的数组nums ，请你将nums中的元素分成 n / 2 个数对，使得：
 * nums中每个元素恰好在一个数对中，且最大数对和的值 最小 。
 * 请你在最优数对划分的方案下，返回最小的 最大数对和 。
 *
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  let newnum = nums.sort((a, b) => a - b)
  let n = newnum.length
  let result = 0
  for (let i = 0; i < n / 2; i++) {
    result = Math.max(result, newnum[i] + newnum[n - 1 - i])
  }
  return result
}
