/**
 * 实现一个基本的计算器来计算一个简单的字符串表达式 s 的值。
 *
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let flag = 1
  let result = 0
  let stack = [1]
  let i = 0
  while (i < s.length) {
    if (s[i] === ' ') {
      i++
    } else if (s[i] === '+') {
      flag = stack[stack.length - 1]
      i++
    } else if (s[i] === '-') {
      flag = -stack[stack.length - 1]
      i++
    } else if (s[i] === '(') {
      stack.push(flag)
      i++
    } else if (s[i] === ')') {
      stack.pop(flag)
      i++
    } else {
      let num = 0
      while (i < s.length && !isNaN(Number(s[i])) && s[i] !== ' ') {
        num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt()
        i++
      }
      console.log(num, flag)
      result += num * flag
    }
  }
  return result
}

// js的简单粗暴法 执行字符串中的js语句
var calculate = function (s) {
  return eval(s)
}
