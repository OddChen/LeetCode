/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下 ，能够偷窃到的最高金额。
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length
  if (n === 1) {
    return nums[0]
  }

  const dp = (start, end) => {
    let pre = 0
    let cur = 0
    for (let i = start; i < end; i++) {
      let temp = Math.max(cur, pre + nums[i])
      pre = cur
      cur = temp
    }
    return cur
  }

  return Math.max(dp(0, n - 1), dp(1, n))
}
