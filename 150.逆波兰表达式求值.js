/**
 * 根据 逆波兰表示法，求表达式的值。
 * 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 说明：
 * 整数除法只保留整数部分。
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let result = []
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case '+':
        let add = result.pop()
        result.push(result.pop() + add)
        //console.log(result)
        break
      case '-':
        let subtract = result.pop()
        result.push(result.pop() - subtract)
        //console.log(result)
        break
      case '*':
        let multiply = result.pop()
        result.push(result.pop() * multiply)
        //console.log(result)
        break
      case '/':
        let divide = result.pop()
        result.push((result.pop() / divide) | 0)
        //console.log(result)
        break
      default:
        result.push(Number(tokens[i]))
        break
    }
  }
  return result
}
