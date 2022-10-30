/**
 * 防抖
 * 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时。
 */
function debounce(func, wait) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}

let node = document.getElementById('layout')
function getUserAction(e) {
  console.log(this, e)
  node.innerHTML = count++
}
node.onmousemove = debounce(getUserAction, 1000)
