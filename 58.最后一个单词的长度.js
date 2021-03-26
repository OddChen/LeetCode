/**
 * @param {string} s
 * @return {number}
 */
//自己的解法
var lengthOfLastWord = function (s) {
  let n = s.length
  let result = []
  let flag = false
  for (let i = 0; i < n; i++) {
    while (s[i] && s[i] === ' ') {
      i++
      flag = true
    }
    if (s[i]) {
      if (flag) {
        result = []
        flag = false
      }
      result.push(s[i])
    }
  }
  return result.length
}
//官方解法
var lengthOfLastWord = function (s) {
  let end = s.length - 1
  while (end >= 0 && s[end] === ' ') {
    end--
  }
  if (end < 0) {
    return 0
  }
  let start = end
  while (start >= 0 && s[start] !== ' ') {
    start--
  }
  return end - start
}

//两个分别用时和内存最少，实际运行没那么好......
var lengthOfLastWord = function (s) {
  let arr = s.split(' ').reverse()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      return arr[i].length
    }
  }
  return 0
}

var lengthOfLastWord = function (s) {
  let result = s.trim().split(' ')
  return result[result.length - 1].length
}
