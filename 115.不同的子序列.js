/**
 * 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。
 * 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。
 * （例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
 * 题目数据保证答案符合 32 位带符号整数范围。
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let n = s.length
  let m = t.length
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let j = 0; j < dp[0].length; j++) {
    dp[0][j] = 1
  }
  // console.log(dp)
  for (let j = 1; j < n + 1; j++) {
    for (let i = 1; i < m + 1; i++) {
      if (s[j - 1] === t[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
      } else {
        //console.log(i, j, dp[i][j - 1])
        dp[i][j] = dp[i][j - 1]
      }
    }
  }
  return dp[m][n]
}
