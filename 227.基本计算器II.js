/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 整数除法仅保留整数部分。
 *
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s.split('')
  let result = []
  let n = s.length
  let num = 0
  let sign = '+'
  for (let i = 0; i < n; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== ' ') {
      num = num * 10 + Number(s[i])
    }
    // 到下个运算符后开始计算前面的
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (sign) {
        case ' ':
          break
        case '*':
          result.push(result.pop() * num)
          break
        case '/':
          result.push((result.pop() / num) | 0)
          break
        case '-':
          result.push(-num)
          break
        default:
          result.push(num)
          break
      }
      sign = s[i]
      num = 0
    }
  }
  return result.reduce((x, y) => {
    return x + y
  })
}
