/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵matrix 。
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let top = 0
  let left = 0
  let bottom = n - 1
  let right = n - 1
  let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let s = n * n
  let num = 0
  while (num < s) {
    for (let i = left; i <= right; i++) {
      num++
      matrix[top][i] = num
    }
    //console.log(num, matrix)
    top++
    for (let i = top; i <= bottom; i++) {
      num++
      matrix[i][right] = num
    }
    right--
    if (top <= bottom && left <= right) {
      for (let i = right; i >= left; i--) {
        num++
        matrix[bottom][i] = num
      }
      bottom--
      for (let i = bottom; i >= top; i--) {
        num++
        matrix[i][left] = num
      }
      left++
    }
  }
  return matrix
}
