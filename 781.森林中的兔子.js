/**
 * @param {number[]} answers
 * @return {number}
 */
//自己写的
//看了一下和官方思路一致，写法有些累赘了
var numRabbits = function (answers) {
  let n = answers.length
  if (n === 0) {
    return 0
  }
  let map = new Map()
  let result = 0
  for (let i = 0; i < n; i++) {
    if (answers[i] === 0) {
      result += 1
      continue
    }
    if (map.has(answers[i])) {
      let num = map.get(answers[i]) + 1
      map.set(answers[i], num)
    } else {
      map.set(answers[i], 1)
    }
    //console.log(map)
  }
  for (let [key, values] of map) {
    //console.log(key, values)
    result += (key + 1) * Math.ceil(values / (key + 1))
  }
  return result
}

//官方的写法
var numRabbits = function (answers) {
  const count = new Map()
  for (const y of answers) {
    count.set(y, (count.get(y) || 0) + 1)
  }
  let ans = 0
  for (const [y, x] of count.entries()) {
    ans += Math.floor((x + y) / (y + 1)) * (y + 1)
  }
  return ans
}
