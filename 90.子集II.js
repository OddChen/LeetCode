/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集不能包含重复的子集。返回的解集中，子集可以按任意顺序 排列。
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  let result = []

  const dfs = (index, list) => {
    result.push(list.slice())
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      list.push(nums[i])
      dfs(i + 1, list)
      list.pop()
    }
  }

  dfs(0, [])
  return result
}
