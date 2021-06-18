/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。
 * 请不要 使用另一个矩阵来旋转图像。
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//最简单的实现方法，旋转交换
var rotate = function (matrix) {
  let len = matrix.length
  for (let i = 0; i < len / 2; i++) {
    ;[matrix[i], matrix[len - 1 - i]] = [matrix[len - 1 - i], matrix[i]]
  }
  // console.log(matrix);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  // console.log(matrix);
  return matrix
}
