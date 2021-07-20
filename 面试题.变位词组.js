/**
 * 编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。
 * 变位词是指字母相同，但排列不同的字符串。
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map()
  for (let str of strs) {
    let newstr = Array.from(str)
    newstr = newstr.sort().toString()
    let same_arr = map.get(newstr) ? map.get(newstr) : new Array()
    same_arr.push(str)
    map.set(newstr, same_arr)
  }
  return Array.from(map.values())
}
