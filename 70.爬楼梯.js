/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * @param {number} n
 * @return {number}
 */
// 动态规划
var climbStairs = function (n) {
  let p = 0
  let q = 0
  let r = 1
  for (let i = 0; i < n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}

var climbStairs = function (n) {
  let dp = [1, 2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1]
}
