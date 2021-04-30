/**
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。
 * 请你找出并返回那个只出现了一次的元素。
 * 进阶：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * @param {number[]} nums
 * @return {number}
 */
//哈希表，进阶要求没写出来
var singleNumber = function (nums) {
  let map = new Map()
  let n = nums.length
  for (let i = 0; i < n; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1)
    } else {
      let cur = map.get(nums[i])
      map.set(nums[i], cur + 1)
    }
  }
  for (let [key, values] of map) {
    if (values === 1) {
      return key
    }
  }
}
