/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let n = strs.length
  if (n === 0) {
    return ''
  }
  let result = strs[0]
  for (let i = 1; i < n; i++) {
    while (!strs[i].startsWith(result) && result) {
      result = result.substr(0, result.length - 1)
    }
  }
  return result
}

// 自己写的
var longestCommonPrefix = function (strs) {
  let result = strs[0]
  let n = strs.length
  let temp = ''
  for (let i = 1; i < n; i++) {
    let j = 0
    while (j < result.length && result[j] === strs[i][j]) {
      temp += result[j]
      j++
    }
    result = temp
    temp = ''
    //console.log(result)
  }
  return result ? result : ''
}
