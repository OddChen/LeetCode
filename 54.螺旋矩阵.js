/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 设置范围top-bottom left-right
var spiralOrder = function (matrix) {
  const s = matrix.length * matrix[0].length
  let result = []
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  let i = 0
  while (result.length < s) {
    for (let collum = left; collum <= right; collum++) {
      result.push(matrix[top][collum])
    }
    top = top + 1
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right])
    }
    //console.log(result)
    right = right - 1
    if (left <= right && top <= bottom) {
      for (let collum = right; collum >= left; collum--) {
        result.push(matrix[bottom][collum])
      }
      //console.log(result)
      bottom = bottom - 1
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left])
      }
      left = left + 1
    }
    //console.log(result.length, s)
  }
  return result
}

// 还可以额外设置一个数组用于存储遍历过的位置
