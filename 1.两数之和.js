/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出
 * 和为目标值 的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍
 * 你可以按任意顺序返回答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let n = nums.length
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
  return []
};

// 官方：哈希表
// var twoSum = function(nums, target) {
//   let map = new Map()
//   let n = nums.length
//   for (let i = 0; i < n; i++) {
//       if (map.has(target - nums[i])) {
//           return [map.get(target - nums[i]), i]
//       }
//       map.set(nums[i], i)
//   }
//   return []
// };