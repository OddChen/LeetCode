/**
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//提交里速度最快的
var searchMatrix = function (matrix, target) {
  let m = matrix.length
  let n = matrix[0].length - 1
  let i = 0
  while (i < m && n >= 0) {
    const value = matrix[i][n]
    if (value === target) {
      return true
    }
    if (value < target) {
      i++
    } else {
      n--
    }
  }
  return false
}

//自己写的
var searchMatrix = function (matrix, target) {
  let m = matrix.length - 1
  let n = 0
  let index = 0
  while (n <= m) {
    index = Math.floor((m + n) / 2)
    //console.log(index)
    if (matrix[index][0] < target) {
      n = index + 1
    } else if (matrix[index][0] > target) {
      m = index - 1
      index--
    } else {
      return true
    }
  }
  if (index < 0 || index >= matrix.length) {
    return false
  }
  return BinarySearch(matrix[index], target)
}

function BinarySearch(arr, target) {
  let high = arr.length - 1
  let low = 0
  let mid = null
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (arr[mid] === target) {
      return true
    } else if (arr[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return false
}
