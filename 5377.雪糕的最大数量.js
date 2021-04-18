/**
 * 夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。
 * 商店中新到n支雪糕，用长度为n的数组costs表示雪糕的定价，其中costs[i]表示第i支雪糕的现金价格。
 * Tony 一共有 coins 现金可以用于消费，他想要买尽可能多的雪糕。
 * 给你价格数组 costs 和现金量coins ，请你计算并返回Tony用 coins 现金能够买到的雪糕的 最大数量 。
 * 注意：Tony 可以按任意顺序购买雪糕。
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let sum = 0
  let arr = []
  let count = 0
  costs.sort((x, y) => x - y)
  for (let values of costs) {
    if (values > coins) {
      continue
    }
    arr.push(values)
    sum += values
    count++
    while (sum > coins) {
      let max = arr[arr.length - 1]
      sum -= max
      //console.log(arr, index, max)
      arr.pop()
      count--
    }
  }
  return count
}
