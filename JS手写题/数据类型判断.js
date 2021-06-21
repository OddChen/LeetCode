/**
 * typeof 可以识别：undefined bollean number string symbol function
 * 其他都会被认为object
 * 所以用typeof判断不准确，可以用Object.prototype.toString
 */
function typeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  res = res.substring(0, res.length - 1).toLowerCase()
  return res
}

toString() // [object Object]
typeOf([]) // [object Array] -> Array] -> Array -> array
