/**
 * 给你一个整数数组 nums ，数组中的元素互不相同。返回该数组所有可能的子集（幂集）。
 * 解集不能包含重复的子集。你可以按任意顺序返回解集。
 * @param {number[]} nums
 * @return {number[][]}
 */
// 官方解法
var subsets = function (nums) {
  let result = []
  const dfs = (index, list) => {
    if (index === nums.length) {
      result.push(list.slice())
      return
    }
    list.push(nums[index])
    dfs(index + 1, list)
    list.pop()
    dfs(index + 1, list)
  }
  dfs(0, [])
  return result
}

//照着思路写的
var subsets = function (nums) {
  let result = []
  const backtrack = (start, path) => {
    result.push(path.slice())
    //console.log(result)
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(0, [])
  return result
}
