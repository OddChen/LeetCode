/**
 * 给定两个字符串text1 和text2，返回这两个字符串的最长公共子序列的长度。
 * 如果不存在公共子序列，返回 0 。
 * 一个字符串的子序列是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde"的子序列。
 * 两个字符串的公共子序列是这两个字符串所共同拥有的子序列。
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//动态规划
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length
  let n = text2.length
  let dp = new Array(m + 1).fill(0).map((x) => new Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (text1[i] === text2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j])
      }
    }
  }
  return dp[m][n]
}
