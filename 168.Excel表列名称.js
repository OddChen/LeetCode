/**
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
 *
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let rel = []
  while (columnNumber) {
    rel.push(String.fromCodePoint('A'.charCodeAt() + ((columnNumber - 1) % 26)))
    columnNumber = Math.floor((columnNumber - 1) / 26)
  }
  return rel.reverse().join('')
}
